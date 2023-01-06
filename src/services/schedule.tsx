import axios, { isAxiosError } from "axios";

export const trySchedule = async () => {
  try {
    const response = await axios.post("/schedule");
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return null;
    } else {
      return null;
    }
  }
};
