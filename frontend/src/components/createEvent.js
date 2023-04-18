//SJSU CMPE 138 Spring 2022 TEAM2
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import React, { useState } from "react";
import { createEvent } from "../services/EventService";

function CreateEvent() {
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState();
  const [purpose, setPurpose] = useState("");

  async function handleSubmit() {
    const res = await createEvent(date, location, purpose);
    if (res) alert('Successfully Created Event');
    else {alert('Error in creation');}
  }

  return (
    <div className=" py-8 flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full  lg:w-4">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Create Event</div>
        </div>

        <div>
          <label htmlFor="location" className="block text-900 font-medium mb-2">
            Location
          </label>
          <InputText
            id="location"
            type="text"
            className="w-full mb-3"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="datetime" className="block text-900 font-medium mb-2">
            Date and Time
          </label>
          <Calendar
            id="time24"
            className="w-full mb-3"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            showTime
          />
          <label htmlFor="purpose" className="block text-900 font-medium mb-2">
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

export default CreateEvent;
