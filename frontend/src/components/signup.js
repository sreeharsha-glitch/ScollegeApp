//SJSU CMPE 138 Spring 2022 TEAM2
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Link , useParams} from "react-router-dom";
import React, { useState } from "react";
import { studentSignUp, usersignup } from "../services";

function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState();
  const [col_id, setcollegeID] = useState();
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");


  const types = [
    { label: "Student Seeker", value: "seeker" },
    { label: "Student Ambassdor", value: "ambassdor" },
    { label: "CLO", value: "clo" },
    { label: "Provider", value: "provider" },
  ];

  async function handleSubmit() {
    const data = { fname, lname, email, col_id, password, name ,dob:date};
    const res = await usersignup(data, type);
    if(res)
    alert("Successfully signedup");
    else alert('Signup failed');
  }

 

  const studentSignUp = (
    <div>
      <label htmlFor="fname" className="block text-900 font-medium mb-2">
        First Name
      </label>
      <InputText
        id="email"
        type="text"
        className="w-full mb-3"
        value={fname}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="lname" className="block text-900 font-medium mb-2">
        Last Name
      </label>
      <InputText
        id="lname"
        type="text"
        className="w-full mb-3"
        value={lname}
        onChange={(e) => setLastName(e.target.value)}
      />

      <label htmlFor="email" className="block text-900 font-medium mb-2">
        Email
      </label>
      <InputText
        id="email"
        type="text"
        className="w-full mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password" className="block text-900 font-medium mb-2">
        Password
      </label>
      <InputText
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-3"
      />
      <label htmlFor="col_id" className="block text-900 font-medium mb-2">
        College ID
      </label>
      <InputText
        id="collegeId"
        value={col_id}
        onChange={(e) => setcollegeID(e.target.value)}
        className="w-full mb-3"
      />
      <label htmlFor="dob" className="block text-900 font-medium mb-2">
            DOB
          </label>
          <Calendar
            id="date"
            className="w-full mb-3"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            showTime
          />

      <div className="flex align-items-center justify-content-between mb-6">
        <Dropdown
          value={type}
          options={types}
          onChange={(e) => setType(e.value)}
          placeholder="Select Type"
        />
      </div>

      <Button
        label="Sign Up"
        icon="pi pi-user"
        className="w-full"
        onClick={handleSubmit}
      />
         <Link
          className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"
          to="/signin"
          style={{ textDecoration: "none" }}
        >
          <Button label= 'Go Back to LOGIN Page'  className="w-6" />
        </Link>
    </div>
  );
  const cloSignUp = (
    <div>
      <label htmlFor="name" className="block text-900 font-medium mb-2">
        Name
      </label>
      <InputText
        id="name"
        type="text"
        className="w-full mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="password" className="block text-900 font-medium mb-2">
        Password
      </label>
      <InputText
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-3"
      />

      <label htmlFor="col_id" className="block text-900 font-medium mb-2">
        College ID
      </label>
      <InputText
        id="collegeId"
        value={col_id}
        onChange={(e) => setcollegeID(e.target.value)}
        className="w-full mb-3"
      />

      <div className="flex align-items-center justify-content-between mb-6">
        <Dropdown
          value={type}
          options={types}
          onChange={(e) => setType(e.value)}
          placeholder="Select Type"
        />
      </div>

      <Button
        label="Sign Up"
        icon="pi pi-user"
        className="w-full"
        onClick={handleSubmit}
      />
    </div>
  );
  const providerSignUp = (
    <div>
      <label htmlFor="name" className="block text-900 font-medium mb-2">
        Name
      </label>
      <InputText
        id="name"
        type="text"
        className="w-full mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="password" className="block text-900 font-medium mb-2">
        Password
      </label>
      <InputText
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-3"
      />


      <div className="flex align-items-center justify-content-between mb-6">
        <Dropdown
          value={type}
          options={types}
          onChange={(e) => setType(e.value)}
          placeholder="Select Type"
        />
      </div>

      <Button
        label="Sign Up"
        icon="pi pi-user"
        className="w-full"
        onClick={handleSubmit}
      />
    </div>
  );
  let signUp = studentSignUp;
  if (type === "clo") signUp = cloSignUp;
  if (type === "provider") signUp = providerSignUp;
  return (
    <div className=" py-8 flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full  lg:w-4">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Sign UP</div>
          <span className="text-600 font-medium line-height-3">
            Don't have an account?
          </span>
          <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
            Create today!
          </a>
        </div>
        {signUp}
      </div>
    </div>
  );
}

export default SignUp;
