import axios, { isAxiosError } from "axios";

axios.defaults.baseURL = "https://suhub-api.herokuapp.com";
axios.defaults.headers.common["accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

export const tryLogin = async (username: string, password: string) => {
  try {
    const response = await axios.post("/login", {
      username: username,
      password: password,
    });
    return [response.data, null];
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response
        ? [null, error.response?.data]
        : [null, "Service Unavailable"];
    } else {
      console.log(error);
      return [null, "Unexpected Error"];
    }
  }
};
