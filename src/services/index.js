import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  "Accept":"*/*"
};

export const getAllTodos = async () => {
  return await axios.get("http://127.0.0.1:8081/api/task/read-all", {
    headers,
  });
};

export const getOneTodo = async (itemId) => {
  return await axios.get("http://127.0.0.1:8081/api/task/read-one/" + itemId, {
    headers,
  });
};

export const createTodo = async (desc) => {
  return await axios.post("http://127.0.0.1:8081/api/task/create", {
    headers,
    taskDetails: desc,
    status: "ON_GOING",
  });
};

export const updateTodo = async (itemId, desc,status) => {
  return await axios.put("http://127.0.0.1:8081/api/task/update", {
    headers,
    taskId: itemId,
    taskDetails: desc,
    status: status
  });
};

export const deleteTodo = async (itemId) => {
  return await axios.delete("http://127.0.0.1:8081/api/task/delete/" + itemId, {
    headers,
  });
};
