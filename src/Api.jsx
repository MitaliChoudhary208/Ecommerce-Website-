import axios from "axios";
export async function signUp(formData) {
  try {
    const response = await axios.post("http://localhost:3000/create", formData);
    console.log(response.data);
    return response;
  } catch (err) {
    console.error("API Error:", err);
  }
}
