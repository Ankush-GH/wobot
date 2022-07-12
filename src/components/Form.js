import React from "react";
import LOGO from "../assets/header.jpg";
import { useState } from "react";

const Form = () => {
  const [nameInput, setNameInput] = useState("");

  const nameInputHandler = (e) => {
    setNameInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="FORM shadow p-3 mb-5 bg-white rounded">
      <form onSubmit={submitHandler}>
        <img className="LOGO" src={LOGO} alt="Wobot" />
        <h3>It's a delight to have you onboard</h3>
        <h6 className="light1">Help us know you better.</h6>
        <h6 className="light2">
          (This is how we optimize wobot as per your bussiness needs)
        </h6>

        <h5 className="cName">Company name</h5>
        <input
          value={nameInput}
          onChange={nameInputHandler}
          className="nameInput"
          type="text"
          placeholder="e.g. Example Inc"
        />

        <h5 className="industry">Industry</h5>
        <select
          className="SELECT form-select"
          aria-label="Default select example"
        >
          <option selected>Select</option>
          <option value="1">Technology</option>
          <option value="2">Finance</option>
          <option value="3">Agriculture</option>
          <option value="4">IT</option>
          <option value="5">Medical</option>
        </select>

        <h5 className="size">Company Size</h5>
        <div
          className="BTNS btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="button btn btn-outline-primary mx-3">
            1-20
          </button>
          <button type="button" className="button btn btn-outline-primary">
            21-50
          </button>
          <button type="button" className="button btn btn-outline-primary mx-3">
            51-200
          </button>
          <button type="button" className="button btn btn-outline-primary">
            201-500
          </button>
          <button type="button" className="button btn btn-outline-primary mx-3">
            500+
          </button>
        </div>

        <button
          type="button"
          className="SUBMIT btn btn-primary btn-lg btn-block"
        >
          Get Started
        </button>
      </form>
    </div>
  );
};

export default Form;
