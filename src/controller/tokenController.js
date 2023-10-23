import ApiService from "../utils/apiService";

export async function validToken(token) {
  try {
    const body = {
      token,
    };
    const response = await ApiService.post("/token", body);
    return response.valid;
  } catch (error) {
    console.error("Erro ao enviar dados para a API:", error);
  }
}
