/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import axios, { Axios, AxiosError, isAxiosError } from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000'

export const tryLogin = async (username: string, password: string) => {
    try {
        const response = await axios.post('/login', {username: username, password: password})
        axios.defaults.data = response.data
        console.log('Login Successful')
        return null
    } catch (error) {
        if (isAxiosError(error)) {
            console.log(error.response?.data)
            console.error('Login Failed')
            return error.response?.data
        } else {
            console.error('Service Unavailable')
            console.error(error)
            return error
        }
    }
};
