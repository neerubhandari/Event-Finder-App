import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios'
import { fetchData, dataUpdated } from "../../redux/actions";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker'
import moment from 'moment'

const EditEvent = ({ data }) => {
    //react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const currentData = data.find(
        (contact) => contact.id === parseInt(id)
    );
    console.log(currentData);
    const onSubmit = async (data) => {
        const values = {
            event: data.event,
            venue: data.venue,
            description: data.description,
            date:moment(startDate).format('LL')
        }
        axios.patch(`http://localhost:3005/data/${id}`, values, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            dispatch(dataUpdated())
            dispatch(fetchData());
            toast.info("Event Updated Successfully")
        })
            .catch((error) => console.log(error))
        history.push("/homepage")
    }

    return (
        <> {currentData ? (
            <div className="container-fluid">
                <h1 className="text-center text-dark py-3 display-5">Edit Event</h1>
                <div className="row ">
                    <div className="col-md-4 p-5 mx-auto shadow">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input
                                    name="event"
                                    className="form-control"
                                    type="text"
                                    placeholder="Event Title"
                                    defaultValue={currentData.event}
                                    {...register("event", { required: "This is required please fill." })}

                                />
                                <ErrorMessage errors={errors} name="event" />
                            </div>
                            <div className="form-group">
                                <input
                                    name="venue"
                                    className="form-control"
                                    type="text"
                                    placeholder="Event Venue"
                                    defaultValue={currentData.venue}
                                    {...register("venue", { required: "This is required please fill." })}
                                />
                                <ErrorMessage errors={errors} name="venue" />
                            </div>
                            <div className="form-group">
                                <input
                                    name="description"
                                    className="form-control"
                                    type="text"
                                    placeholder="Description"
                                    defaultValue={currentData.description}
                                    {...register("description", { required: "This is required please fill." })}
                                />
                                <ErrorMessage errors={errors} name="description" />
                            </div>
                            <div className="form-group ">

                                <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    placeholderText="Select Event Date"
                                />
                            </div>
                            <div className="form-group">
                                <button className="button button-left" type="submit" >Update Event</button>
                                <Link to="/homepage">  <button className=" button-top" >Cancel</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ) : (
            <h1 className="text-center">No DataFound</h1>
        )}
        </>
    )
}
const mapStateToProps = (state) => ({
    data: state.dataReducer.data,

});



export default connect(mapStateToProps)(EditEvent);