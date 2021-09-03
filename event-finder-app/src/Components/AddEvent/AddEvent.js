import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './add-event.css';
import axios from 'axios'
import { fetchData, dataAdded } from "../../redux/actions";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import DatePicker from 'react-datepicker'
import moment from 'moment'

const AddEvent = () => {
  //react-hook-form
  const { register, control, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const [startDate, setStartDate] = useState();
  const dataSubmitted = (value) => {
    const values = {
      event: value.event,
      venue: value.venue,
      description: value.description,
      date:moment(startDate).format('LL')
    }
console.log(values)
    axios.post("http://localhost:3005/data", values, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res)
      dispatch(dataAdded());
      dispatch(fetchData());
      toast.success("Event Added Successfully")

    })
      .catch((error) => console.log(error))
    history.push("/homepage")
  }

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center text-dark py-4 display-5">Add Event</h1>
        <div className="row ">
          <div className="col-md-4 p-5 mx-auto shadow">
            <form onSubmit={handleSubmit(dataSubmitted)}>
              <div className="form-group">
                <input
                  name="event"
                  className="form-control"
                  type="text"
                  placeholder="Event Title"
                  value={register.event}
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
                  value={register.venue}
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
                  value={register.description}
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
                {console.log(startDate)}
              </div>
              <div className="form-group buttons">
                <button className="button button-left" type="submit">Add Event</button>
                <Link to="/homepage">  <button className=" button-top" >Cancel</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddEvent;