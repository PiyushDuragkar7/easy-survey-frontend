// src/api/survey.js
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const createSurvey = (data) => axios.post(`${API_URL}/surveys`, data);
export const getSurvey = (id) => axios.get(`${API_URL}/surveys/${id}`);
export const updateSurvey = (id, data) => axios.patch(`${API_URL}/surveys/${id}`, data);
