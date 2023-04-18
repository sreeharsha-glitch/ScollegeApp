//SJSU CMPE 138 Spring 2022 TEAM2
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { getProfile } from "../services";
import React, { useState, useEffect, useRef } from "react";
import { Link , useParams} from "react-router-dom";

function EditProfile() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState();
  const [phone, setPhone] = useState();
  const [qualification, setQualification] = useState('');
  const [gpa, setGpa] = useState('');
  const [income, setIncome] = useState('');
 
  const types = [
    { label: "Seeker", value: "seeker" },
    { label: "Ambassdor", value: "ambassdor" },
    { label: "CLO", value: "clo" },
    { label: "Provider", value: "provider" },
  ];

  const [profile, setProfile] = useState(null);
  
  const {id}  = useParams();

  useEffect(() => {
    getProfile(id).then((data) => setProfile(data));
  }, []);

  
  function handleSubmit() {
    alert(email + " ," + password + "," + type + ',' + phone);
  }

  return (
    <div className=" py-8 flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full  lg:w-4">
        <div className="text-center mb-5">
         
          <div className="text-900 text-3xl font-medium mb-3">Edit Profile</div>
          
        </div>

        <div>
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
          
          <label htmlFor="qualification" className="block text-900 font-medium mb-2">
            Highest qualification 
          </label>
          <InputText
            id="qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className="w-full mb-3"
          />
           <label htmlFor="gpa" className="block text-900 font-medium mb-2">
            GPA
          </label>
          <InputText
            id="gpa"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
            className="w-full mb-3"
          />
          <label htmlFor="family_annual_income" className="block text-900 font-medium mb-2">
            Family Annual Income
          </label>
          <InputText
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full mb-3"
          />
         

          <Button
            label="Submit"
            icon="pi pi-user"
            className="w-full"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
