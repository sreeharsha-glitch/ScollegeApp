//SJSU CMPE 138 Spring 2022 TEAM2
import { formattedDate, formmattedTime } from "../utils/formatted_date";

const axios = require("axios");

async function getEvents() {
  const res = await axios.get("http://localhost:8080/event/all");
  return res.data?.events[0];
}
async function getOrganizedEvents(id) {
  const res = await axios.get(
    `http://localhost:8080/event/organized?s_id=${id}`
  );
  return res.data?.events[0];
}
async function createEvent(dateTime, location, purpose) {
  const data = {
    date: formattedDate(dateTime),
    time: formmattedTime(dateTime),
    location,
    purpose,
  };
  const res = await axios.post(`http://localhost:8080/event/create`, data);
  return res.status == 200 ? true : false;
}

async function organizeEvent(e_id, s_id) {
  const data = {
    e_id,
    s_id
  };
  const res = await axios.post(`http://localhost:8080/event/organize`, data);
  return res.status == 200 ? true : false;
}

export { getEvents, getOrganizedEvents, createEvent , organizeEvent};
