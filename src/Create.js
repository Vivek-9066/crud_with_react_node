import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/create', {name,email,phone})
      .then(res => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <form className="bg-white rounded w-50" onSubmit={handleSubmit}>
        <div className="form-group p-3">
          <h1 className="d-flex justify-content-center">Create New Record</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group p-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={e => setEmail(e.target.value)}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group p-3">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            className="form-control"
            onChange={e => setPhone(e.target.value)}
            placeholder="Phone"
          />
        </div>
        <div className=" d-flexform-check p-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit"
          className="d-flex btn btn-primary justify-content-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
