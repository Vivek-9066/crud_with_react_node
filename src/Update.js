import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const {id} = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:5000/update/'+id, {name,email,phone})
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
          <h1 className="d-flex justify-content-center">Update Record</h1>
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" placeholder="Name" onChange={e => setName(e.target.value)}/>
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
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
