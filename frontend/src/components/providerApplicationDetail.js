//SJSU CMPE 138 Spring 2022 TEAM2
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { getApplicationById, updateFeedback, updateStatus } from "../services/ApplicationService";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { pay } from "../services";

function ProviderApplicationDetail() {
  const { id } = useParams();
  const [feedback, setFeedback] = useState("");
  const [amt, setAmt] = useState("");
  const [type, setType] = useState("");
  const [Application, setApplication] = useState([]);

  useEffect(() => {
    console.log(id);
    getApplicationById(id, "app_id").then((data) => setApplication(data));
  }, []);

  const types = [
    { label: "Pending", value: "pending" },
    { label: "Reject", value: "rejected" },
    { label: "Accept", value: "accepted" },
  ];

  function handleSubmit() {
    alert("Done");
  }

  async function sendPay() {
    const data = { amt, app_id: id };
    const res = await pay(data);
    if (res) alert("Payment Done");
    else alert("Something went wrong");
  }

  async function submitFeedback() {
    const data = { feedback, app_id: id };
    const res = await updateFeedback(data);
    if (res) alert("Feedback Submitted");
    else alert("Something went wrong");
  }
  async function modifyStatus() {
    const data = { status: type, app_id: id };
    const res = await updateStatus(data);
    if (res) alert("Status Modified");
    else alert("Something went wrong");
  }
  return (
    <div className=" py-8 flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full  lg:w-8">
        <div className="surface-section">
          <div className="font-medium text-3xl text-900 mb-3">
            Student Application
          </div>

          <ul className="list-none p-0 m-0">
            {Object.keys(Application).map(function (key, index) {
              return (
                <li
                  key={index}
                  className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
                >
                  <div className="text-500 w-30 md:w-2  lg:w-3 font-medium">
                    {key}
                  </div>
                  <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                    {Application[key]}
                  </div>
                </li>
              );
            })}
          </ul>
          <div>
            <p>Send Pay</p>
          </div>
          <div className="pb-4">
              <InputText
                className="w-full pb-10"
                value={amt}
                onChange={(e) => setAmt(e.target.value)}
              />
            </div>
          <Button label="Send Payment" className="w-5" onClick={sendPay} />
          <div>
            <p>Provide Feedback</p>
            <div className="pb-4">
              <InputText
                className="w-full pb-10"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>

            <Button
              label="Submit Feedback"
              className="w-5"
              onClick={submitFeedback}
            />
          </div>

          <div className=" align-items-center justify-content-between mb-6 m-10">
            <p>Modiy Status</p>

            <Dropdown
              className="w-full m-2"
              value={type}
              options={types}
              onChange={(e) => setType(e.value)}
              placeholder="Select Type"
            />
            <Button
              label="Modify Status"
              className="w-5 m-2"
              onClick={modifyStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderApplicationDetail;
