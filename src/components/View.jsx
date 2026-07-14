import axios from "axios";
import React, { useEffect, useState } from "react";

const View = () => {

  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:3000/view_nss")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3">Volunteer Details</h3>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Volunteer ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Blood Group</th>
              <th>Department</th>
              <th>Year</th>
              <th>Camp Name</th>
              <th>Hours Completed</th>
              <th>Address</th>
              <th>Unit Number</th>
            </tr>
          </thead>

          <tbody>
            {data.map((volunteer) => (
              <tr key={volunteer._id}>
                <td>{volunteer.volunteer_id}</td>
                <td>{volunteer.full_name}</td>
                <td>{volunteer.email}</td>
                <td>{volunteer.phone}</td>
                <td>{volunteer.date_of_birth}</td>
                <td>{volunteer.gender}</td>
                <td>{volunteer.blood_group}</td>
                <td>{volunteer.department}</td>
                <td>{volunteer.year_of_study}</td>
                <td>{volunteer.camp_name}</td>
                <td>{volunteer.hours_completed}</td>
                <td>{volunteer.address}</td>
                <td>{volunteer.unit_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;