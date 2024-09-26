import axios from "axios";

// Set up a base URL for the API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Create an Axios instance with default options
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// API call methods (no need for extraHeaders parameter anymore)
export const GET = async (url, config = {}) => {
  try {
    const response = await api.get(url, config);
    return response?.data;
  } catch (error) {
    throw error?.response?.data || new Error(error.message);
  }
};

export const POST = async (url, data, config = {}) => {
  try {
    const response = await api.post(url, data, config);
    return response?.data;
  } catch (error) {
    throw error?.response?.data || new Error(error.message);
  }
};

export const PUT = async (url, data, config = {}) => {
  try {
    const response = await api.put(url, data, config);
    return response?.data;
  } catch (error) {
    throw error?.response?.data || new Error(error.message);
  }
};

export const PATCH = async (url, data, config = {}) => {
  try {
    const response = await api.patch(url, data, config);
    return response?.data;
  } catch (error) {
    throw error?.response?.data || new Error(error.message);
  }
};

export const DELETE = async (url, config = {}) => {
  try {
    const response = await api.delete(url, config);
    return response?.data;
  } catch (error) {
    throw error?.response?.data || new Error(error.message);
  }
};
