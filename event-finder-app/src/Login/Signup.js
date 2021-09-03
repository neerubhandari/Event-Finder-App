import React from 'react'
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import "./Login.css"
function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const values = data => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(values)} className="form-group login" >
                <h4 className="login-header">Sign-Up</h4>
                <div className="form">
                    <input
                        name="names"
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        value={register.names}
                        {...register("names", { required: "This is required please fill." })}
                        onChange={handleSubmit} />
                    <ErrorMessage errors={errors} name="names" />
                    <input
                        name="emails"
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={register.email}
                        {...register("emails", { required: "This is required please fill." })}
                        onChange={handleSubmit} />
                    <ErrorMessage errors={errors} name="emails" />

                </div>
                <div className="form">
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={register.password}
                        {...register('password', { pattern: { value: /(?=.*[0-9])/, message: 'must contain some number' } })}
                        onChange={handleSubmit} />
                    <ErrorMessage errors={errors} name="password" />
                </div>

                <div className="form">
                    <button type="submit" >Sign Up</button>
                </div>

            </form>
        </div>


    )
}

export default Signup;