import axios from "axios";
const BASE_URL = "https://todo.api.devcode.gethired.id";
const EMAIL = "kalosaya@sih.com"

export async function getAllActicity() {
  return await axios.get(`${BASE_URL}/activity-groups?email=${EMAIL}`).catch(error => {
    return error
  });
}