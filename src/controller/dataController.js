import ApiService from "../utils/apiService";

export async function newProject(data) {
  try {
    const body = {
      project: data,
    };
    const response = await ApiService.post("/data", body);
    return response;
  } catch (error) {
    console.error("Erro ao enviar dados para a API:", error);
  }
}
