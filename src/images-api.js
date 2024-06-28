import axios from "axios";

const API_KEY = "Client-ID BUHrMGvMuA8lB1v5PKFqYkkPpW42xAB7bbEGOIV9Quk";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = API_KEY;

export const getImages = async (topic, currentPage) => {
  const response = await axios.get(`search/photos`, {
    params: {
      query: topic,
      page: currentPage,
      per_page: 12,
    },
  });
  return {
    results: response.data.results,
    totalPage: response.data.total_pages,
  };
};
