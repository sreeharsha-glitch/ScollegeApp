//SJSU CMPE 138 Spring 2022 TEAM2
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { useCookies } from 'react-cookie';
import React, { useState } from "react";
import { createScholarship } from "../services/ScholarshipService";

function CreateScholarship() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [deadline, setDeadline] = useState();
  const [purpose, setPurpose] = useState();
  const [cookies, setCookie] = useCookies(['user']);


  
  async function handleSubmit() {
    if(cookies.p_id)
    { const res = await createScholarship(name,amount,deadline,purpose,cookies.p_id);
       if (res) return alert('Created Success !') 
       else alert("Something went wrong!");
    }

  }

  return (
    <div className=" py-8 flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full  lg:w-4">
        <div className="text-center mb-5">
         
          <div className="text-900 text-3xl font-medium mb-3">Create Scholarship</div>
          
        </div>

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
  <label htmlFor="amount" className="block text-900 font-medium mb-2">
            Amount
          </label>
          <InputText
            id="amount"
            type="text"
            className="w-full mb-3"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
            <label htmlFor="deadline" className="block text-900 font-medium mb-2">
            Deadline
          </label>
          <Calendar
            id="basic"
            className="w-full mb-3"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
            <label className="block text-900 font-medium mb-2">
            Purpose
          </label>
          <InputText
            id="purpose"
            type="text"
            className="w-full mb-3"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
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

export default CreateScholarship;
