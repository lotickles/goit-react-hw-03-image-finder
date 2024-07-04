import axios from 'axios';

export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43764300-c8e70daa82082c3c5d2e410f5';

export const getAPI = async (query, page) => {
  const url = `${BASE_URL} q=${query} &page=${page} &key=${API_KEY}&image_type=photo &orientations=horizontal &per_page =12`;
  const response = await axios.get(url);
  return response.data;
};
