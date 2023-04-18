//SJSU CMPE 138 Spring 2022 TEAM2
const axios = require("axios");

async function getApplications(type, id) {
  if (!type) type = 'app_id'
  if(!id) id = '2142';
  const url = `http://localhost:8080/application/viewApplications?${type}=${id}`
  const res = await axios.get(url);
  const data = res?.data?.applications;
  return data;
}

async function getApplicationById(id, type){
  if (!type) type = 'app_id'
  const url = `http://localhost:8080/application/viewApplications?${type}=${id}`
  const res = await axios.get(url);
  const data = res?.data?.applications;
  console.log(data);
  return data && data.length ? data[0] :{};
}
async function updateFeedback(body){
  const url = `http://localhost:8080/application/updateFeedback`
  const res = await axios.put(url,body);
  return res.status == 200 ? true : false;
}
async function updateStatus(body){
  const url = `http://localhost:8080/application/updateStatus`
  const res = await axios.put(url,body);
  return res.status == 200 ? true : false;
}
export { getApplications, getApplicationById,updateFeedback,updateStatus };
