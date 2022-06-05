import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  "Accept":"*/*"
};

export const getAllTodos = async () => {
  return await axios.get("http://127.0.0.1:8081/api/task/read-all", {
    headers,
  }).catch((e)=>{console.log("getAllTodos::ERR "+e)});
};

export const getOneTodo = async (itemId) => {
  return await axios.get("http://127.0.0.1:8081/api/task/read-one/" + itemId, {
    headers,
  }).catch((e)=>{console.log("getOneTodo::ERR "+e)});
};

export const createTodo = async (desc) => {
  return await axios.post("http://127.0.0.1:8081/api/task/create", {
    headers,
    taskDetails: desc,
    status: "ON_GOING",
  }).catch((e)=>{console.log("createTodo::ERR "+e)});
};

export const updateTodo = async (itemId, desc,status) => {
  return await axios.put("http://127.0.0.1:8081/api/task/update", {
    headers,
    taskId: itemId,
    taskDetails: desc,
    status: status
  }).catch((e)=>{console.log("updateTodo::ERR "+e)});
};

export const deleteTodo = async (itemId) => {
  return await axios.delete("http://127.0.0.1:8081/api/task/delete/" + itemId, {
    headers,
  }).catch((e)=>{console.log("deleteTodo::ERR "+e)});
};
