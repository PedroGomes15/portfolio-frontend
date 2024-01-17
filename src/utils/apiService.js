// apiService.js
import axios from "axios";
import Cookies from "js-cookie";

class ApiService {
  constructor() {
    this.axiosInstance = axios.create({
      //baseURL: process.env.REACT_APP_API_URL, // Defina a URL base no .env
      baseURL: "http://localhost:3001/",
    });
    this.token = Cookies.get("pedroToken");
  }

  async get(route) {
    try {
      const headers = this.token ? { Authorization: `Bearer ${this.token}` } : {};
      const response = await this.axiosInstance.get(route, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post(route, data) {
    try {
      const headers = this.token ? { Authorization: `Bearer ${this.token}` } : {};
      const response = await this.axiosInstance.post(route, data, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Adicione outras funções para PUT, DELETE, etc., conforme necessário
}

export default new ApiService();
