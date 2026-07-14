import React from "react";

const Home = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div
        className="card shadow-lg p-5 text-center"
        style={{ maxWidth: "700px", width: "100%", borderRadius: "15px" }}
      >
        <h1 className="text-success fw-bold mb-3">
          Volunteer Management System
        </h1>

        <p className="lead">
          Welcome to the Volunteer Management Portal.
        </p>

        <p className="text-muted">
          Register volunteers, maintain their information, and view all records
          in one place.
        </p>

        <hr />

        

        
      </div>
    </div>
  );
};

export default Home;