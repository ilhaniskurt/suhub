import axios, { isAxiosError } from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";

export const tryLogin = async (username: string, password: string) => {
  try {
    const response = await axios.post("/login", {
      username: username,
      password: password,
    });
    console.log(JSON.stringify(response.data));
    axios.defaults.data = response.data;
    return null;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response ? error.response?.data : "Service Unavailable";
    } else {
      console.log(error);
      return "Unexpected Error";
    }
  }
};
