//SJSU CMPE 138 Spring 2022 TEAM2
const axios = require("axios");

async function studentSignUp(data) {
  const res = await axios.post("http://localhost:8080/signup/student", data);
  return res;
}

async function getStudents() {
  const res = await axios.get("http://localhost:8080/student/");
  return res.data?.data;
}
async function getUnApprovedStudents(col_id) {
  const res = await axios.get(
    `http://localhost:8080/student/unapproved?col_id=${col_id}`
  );
  return res.data?.data ? res.data?.data[0] : [];
}
async function getApprovedStudents(col_id) {
  const res = await axios.get(
    `http://localhost:8080/student/approved?col_id=${col_id}`
  );
  return res.data?.data ? res.data?.data[0] : [];
}

async function verifyStudent(s_id){
  const res = await axios.get(`http://localhost:8080/student/verify?s_id=${s_id}`);
  if (res.status == 200) return true;
  else return false;
}

async function getProfile(id) {
  const res = await axios.get(
    `http://localhost:8080/student/viewProfile?s_id=${id}`
  );
  const data = res?.data;
  let profile = { ...data?.user, ...data.profile };
  return profile;
}

async function usersignup(data, type) {
  let url = `http://localhost:8080/signup/user?type=seeker`;
  if (type == "clo") url = `http://localhost:8080/signup/user?type=clo`;
  if (type == "provider")
    url = `http://localhost:8080/signup/user?type=provider`;
  if (type == "ambassdor")
    url = `http://localhost:8080/signup/user?type=ambassdor`;
  const res = await axios.post(url, data);
  if (res.status == 200) return true;
  return false;
}

async function userLogin(data, type) {
  let url = `http://localhost:8080/login/user?type=seeker`;
  if (type == "clo") url = `http://localhost:8080/login/user?type=clo`;
  if (type == "provider")
    url = `http://localhost:8080/login/user?type=provider`;
  if (type == "ambassdor")
    url = `http://localhost:8080/login/user?type=ambassdor`;
  try {
    const res = await axios.post(url, data);
    if (res.status == 200) return res?.data?.user;
    else return null;
  } catch (error) {
    return null;
  }
}

async function getPayment(id) {
  const res = await axios.get(
    `http://localhost:8080/application/paymentStatus?app_id=${id}`
  );
  return res.data.payment;
}

async function pay(data) {
  const res = await axios.post("http://localhost:8080/application/pay", data);
  console.log(res);
  return res.status == 200 ? true : false;
}

async function updateFeedback(data) {
  return true;
  const res = await axios.post('http://localhost:8080/application/pay', data);
  return res.status == 200 ? true : false;
}
async function updateStatus(data) {
  return true;
  const res = await axios.post("http://localhost:8080/application/pay", data);
  return res.status == 200 ? true : false;
}
async function getNotifications() {
  const res = await axios.get(
    `http://localhost:8080/notification/all`
  );
  
  return res?.data?.notifications? res?.data?.notifications[0] :[];
}

export {
  studentSignUp,
  getStudents,
  getApprovedStudents,
  getUnApprovedStudents,
  getProfile,
  usersignup,
  userLogin,
  pay,
  getPayment,
  updateFeedback,
  updateStatus,
  getNotifications,
  verifyStudent
};
