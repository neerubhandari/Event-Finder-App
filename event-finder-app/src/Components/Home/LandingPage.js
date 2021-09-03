import React, { useState } from "react";
import './Home.css'
import { Link } from 'react-router-dom';
import { connect, useDispatch } from "react-redux";
import { fetchData, dataDeleted } from "../../redux/actions";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import * as ReactBootStrap from 'react-bootstrap';


const Home = ({ data, loading }) => {
    const sortByDate = (arr) => {
        const sorter = (a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        };
        const output = data.sort(sorter);
        console.log(output)
    };
    sortByDate(data);
    const dispatch = useDispatch();
    const deleteData = async (id) => {
        await axios.delete(`http://localhost:3005/data/${id}`).then((res) => {
            dispatch(dataDeleted())
            dispatch(fetchData());
            toast.error("Deleted Successfully")
        });

    };
    return (
        <div className="landing-container">
            <div className="container-contents">
                <ToastContainer />
                {/* if loading then display spinner*/}
                {loading &&
                    <div className="spinner">
                        <ReactBootStrap.Spinner animation="border" />
                    </div>
                }
            </div>
            <div className="row d-flex flex-column">
                <div className="col-md-10 mx-auto ">
                    <table className="table table-hover">
                        <thead className="table-header bg-dark text-white">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Event</th>
                                <th scope="col">Venue</th>
                                <th scope="col">Description</th>
                                <th scope="col">Date</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* if not loading then display data*/}
                            {!loading &&
                                data.map((data, id) => (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{data.event}</td>
                                        <td>{data.venue}</td>
                                        <td>{data.description}</td>
                                        <td>{data.date}</td>


                                        <td>
                                            <Link
                                                to={`/edit/${data.id}`}
                                                className="btn btn-sm btn-primary mr-1 edit"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-danger"
                                                onClick={() => deleteData(data.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.dataReducer.data,
    loading: state.dataReducer.loading

});

export default connect(mapStateToProps)(Home);