import axios from 'axios';
import React, { useState } from 'react';

const Add = () => {

    const [input, changeInput] = useState({
        volunteer_id: "",
        full_name: "",
        email: "",
        phone: "",
        date_of_birth: "",
        gender: "",
        blood_group: "",
        department: "",
        year_of_study: "",
        camp_name: "",
        hours_completed: "",
        address: "",
        unit_number: ""
    });

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {
        console.log(input);

        axios.post("http://localhost:3000/add-nss", input)
            .then((response) => {
                console.log(response.data);
                alert("Volunteer Added Successfully!");
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong!");
            });
    };

    return (
        <div>
            <div className="container border border-2 rounded shadow p-5 mt-5 mb-5">
                <div className='form text-center p-5 '><h1>APPLICATION FORM</h1></div>
                <div className="row">
                    <div className="col-12">
                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">Volunteer ID</label>
                                <input type="text" className="form-control"
                                    name="volunteer_id"
                                    value={input.volunteer_id}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control"
                                    name="full_name"
                                    value={input.full_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control"
                                    name="email"
                                    value={input.email}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control"
                                    name="phone"
                                    value={input.phone}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Date of Birth</label>
                                <input type="date" className="form-control"
                                    name="date_of_birth"
                                    value={input.date_of_birth}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Gender</label>
                                <select
                                    className="form-select"
                                    name="gender"
                                    value={input.gender}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Blood Group</label>
                                <input type="text" className="form-control"
                                    name="blood_group"
                                    value={input.blood_group}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Department</label>
                                <input type="text" className="form-control"
                                    name="department"
                                    value={input.department}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Year of Study</label>
                                <input type="text" className="form-control"
                                    name="year_of_study"
                                    value={input.year_of_study}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Camp Name</label>
                                <input type="text" className="form-control"
                                    name="camp_name"
                                    value={input.camp_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Hours Completed</label>
                                <input type="number" className="form-control"
                                    name="hours_completed"
                                    value={input.hours_completed}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Unit Number</label>
                                <input type="text" className="form-control"
                                    name="unit_number"
                                    value={input.unit_number}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label">Address</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    name="address"
                                    value={input.address}
                                    onChange={inputHandler}
                                ></textarea>
                            </div>

                            <div className="col-12 text-center mt-4">
                                <button
                                    className="btn btn-success px-5"
                                    onClick={readValue}
                                >
                                    Add Volunteer
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;