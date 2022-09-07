import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


export default function App() {
  const { register, getValues, reset, setValue, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:8080/api/v1/users", data)
      .then((res) => {
        alert(
          `sucessFully registered  ${getValues("firstname")} ${getValues(
            "lastname"
          )}`
        );
        reset();
      })
      .catch((err) => {
        alert("something went wrong");
        reset();
      });
  };
  function age() {
    let today = new Date();
    let birthDate = new Date(getValues("dob"));
    let age = today.getFullYear() - birthDate.getFullYear();

    setValue("age", age);
    console.log(age);
  }
  return (
    <>
      <p
      style={{
        fontSize: 24,
        color: "red",
      }}
      > Register Here !</p>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        style={{ paddingLeft: 40, width: 400 }}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <div className="form-group">
          <label htmlFor="firstName">Firstname</label>
          <input
            id="firstName"
            type="text"
            required
            className="form-control"
            placeholder="FirstName"
            {...register("firstname")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Lastname</label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="LastName"
            {...register("lastname")}
          />
          Gender
          <br />
          <div className="form-check form-check-inline">
            <input
              required
              className="form-check-input"
              type="radio"
              {...register("gender")}
              name="gender"
              id="inlineRadio1"
              value="male"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              required
              className="form-check-input"
              type="radio"
              {...register("gender")}
              name="gender"
              id="inlineRadio2"
              value="female"
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input
            required
            type="Email"
            placeholder="Email"
            className="form-control"
            id="Email"
            {...register("email")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            required
            type="password"
            placeholder="Password"
            className="form-control"
            id="Password"
            {...register("password")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">DOB</label>
          <input
            required
            type="date"
            placeholder="Date of birth"
            className="form-control"
            id="date"
            {...register("dob")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Age">Age</label>
          <input
            required
            type="number"
            defaultValue={age}
            onClick={() => age()}
            placeholder="Age"
            className="form-control"
            id="age"
            {...register("age")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            required
            type="text"
            placeholder="Address"
            className="form-control"
            id="address"
            {...register("address")}
          />
        </div>
        <div class="form-group">
          <label htmlFor="number">Mobile_no</label>
          <input
            type="number"
            required
            placeholder="Number"
            className="form-control"
            id="number"
            title="please enter 10 digits"
            {...register("mobile_no", {
              minLength: 10,
              maxLength: 10
            })}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </>
  );
}