//SJSU CMPE 138 Spring 2022 TEAM2
import { Button } from "primereact/button";
import { Chip } from "primereact/chip";
import { Link, useParams } from "react-router-dom";
import { getApplicationById } from "../services/ApplicationService";
import React, { useState, useEffect, useRef } from "react";
import Detail from "../components/detail";
import { useQuery } from "../routes/query";
import Payment from '../components/payment'

function ApplicationDetail() {
  const { id } = useParams();
  const { type } = useQuery();

  console.log(id, type);

  const [application, setApplication] = useState(null);

  useEffect(() => {
    getApplicationById(id, type).then((data) => setApplication(data));
  }, []);

  function handleSubmit() {
    alert("Done");
  }

  return (
    <div>
      <Detail className="mb-10" data={application} title="Application Details" />
      <Payment clasName="mr-20 ml-20" app_id={id} />
    </div>
  );
}

export default ApplicationDetail;
