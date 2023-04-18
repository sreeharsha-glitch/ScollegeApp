//SJSU CMPE 138 Spring 2022 TEAM2
import { formattedDate } from "../utils/formatted_date";

const axios = require("axios");

async function getScholarships() {
  const res = await axios.get("http://localhost:8080/scholarship/");
  return res.data?.data;
}

async function getProviderScholarships(id) {
  const res = await axios.get(
    `http://localhost:8080/scholarship/viewScholarships?p_id=${id}`
  );
  return res.data?.scholarship;
}

async function applyToScholarship(p_id, sc_id, s_id) {
  const data = {
    date: formattedDate(new Date()),
    p_id,
    sc_id,
    s_id,
  };
  const res = await axios.post(`http://localhost:8080/application/apply`, data);
  return res.status == 200 ? true : false;
}
async function createScholarship(name, amount, deadline,purpose,p_id) {
  const data = {
    name, amount, deadline,purpose,p_id
  };
  data.deadline = formattedDate(data.deadline);
  const res = await axios.post(`http://localhost:8080/scholarship/create`, data);
  return res.status == 200 ? true : false;
}

export { getScholarships, getProviderScholarships, applyToScholarship, createScholarship };
