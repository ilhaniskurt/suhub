import axios, { isAxiosError } from "axios";

export const trySchedule = async (auth: any) => {
  try {
    const response = await axios.post("/schedule", auth);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return null;
    } else {
      return null;
    }
  }
};
