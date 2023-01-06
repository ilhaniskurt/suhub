/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import axios, { Axios, AxiosError, isAxiosError } from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000'

export const tryLogin = async (username: string, password: string) => {
    try {
        const response = await axios.post('/login', {username: username, password: password})
        axios.defaults.data = response.data
        return null
    } catch (error) {
        if (isAxiosError(error)) {
            return error.response ? error.response?.data : 'Service Unavailable'
        } else {
            return 'Service Unavailable'
        }
    }
};
