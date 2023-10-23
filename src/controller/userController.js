import ApiService from "../utils/apiService";
import Cookies from "js-cookie";

export async function login(username, password) {
  try {
    const body = {
      username,
      password,
    };
    const response = await ApiService.post("/auth/login", body);
    if (response.token) {
      Cookies.set("pedroToken", response.token, { secure: true });
      return true;
    } else return false;
  } catch (error) {
    console.error("Erro ao enviar dados para a API:", error);
    return false;
  }
}
