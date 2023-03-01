import axios from "axios";
const BASE_URL = "https://todo.api.devcode.gethired.id";

export async function getAllActicity() {
  return await axios.get(`${BASE_URL}/activity-groups?email=${process.env.REACT_APP_EMAIL}`).catch(error => {
    return error
  });
}

export async function createNewActivity(data) {
  return await axios.post(`${BASE_URL}/activity-groups`, data).catch(error => {
    return error
  });
}

export async function deleteActivity(id) {
  return await axios.delete(`${BASE_URL}/activity-groups/${id}?email=${process.env.REACT_APP_EMAIL}`).catch(error => {
    return error
  })
}

export async function getOneActivity(id) {
  return await axios.get(`${BASE_URL}/activity-groups/${id}?email=${process.env.REACT_APP_EMAIL}`).catch(error => {
    return error
  })
}

export async function getAllTodoItems(id) {
  return await axios.get(`${BASE_URL}/todo-items?activity_group_id=${id}`).catch(error => {
    return error
  })
}

export async function createNewTodoList(data) {
  return await axios.post(`${BASE_URL}/todo-items`, data).catch(error => {
    return error
  })
}

export async function deleteTodoItem(id) {
  return await axios.delete(`${BASE_URL}/todo-items/${id}`).catch(error => {
    return error
  })
}

export async function getOneTodoItem(id) {
  return await axios.get(`${BASE_URL}/todo-items/${id}`).catch(error => {
    return error
  })
}

export async function changeActivityTitle(id, data) {
  return await axios.patch(`${BASE_URL}/activity-groups/${id}`, data).catch(error => {
    return error
  })
}