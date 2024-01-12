// apiService.js
import axios from "axios";
import Cookies from "js-cookie";

class ApiService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3001/", //process.env.REACT_APP_API_URL, // Defina a URL base no .env
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
      console.log("header ", headers);
      const response = await this.axiosInstance.post(route, data, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApiService();
