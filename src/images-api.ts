import axios, { AxiosResponse } from "axios";
import type { ImagesApiResponse } from "./types";

const API_KEY = "Client-ID BUHrMGvMuA8lB1v5PKFqYkkPpW42xAB7bbEGOIV9Quk";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = API_KEY;


export const getImages = async <T> (topic: string, currentPage:number): Promise<ImagesApiResponse<T>> => {
  const response: AxiosResponse<ImagesApiResponse<T>> = await axios.get(`search/photos`, {
    params: {
      query: topic,
      page: currentPage,
      per_page: 12,
    },
  });
  return {
    results: response.data.results,
    totalPage: response.data.totalPage,
  };
};
