import { AxiosResponse } from "axios";
import { SignInPayload, SignInRequestData } from "../store/auth/auth.types";
import { DogsName, DogsNFTType } from "../store/dogs/dogs.types";
import { getAPIClient } from "./apiWithContext";

export const baseApi = getAPIClient();

const parseResponse = (response: AxiosResponse) => {
  const res = response;
  if (response.status === 200) {
    return res.data;
  }
  throw res;
};

const api = {
  postSignIn: async ({
    password,
    username,
  }: SignInPayload): Promise<SignInRequestData> => {
    return await baseApi
      .post(
        `/signin`,
        { password, username },
        {
          method: "POST",
        }
      )
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  fetchDogsNft: async (params: { dogName: DogsName }) => {
    return await baseApi
      .get(`/dogs/${params.dogName}`, {
        method: "GET",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  postDogsNft: async (dog: DogsNFTType) => {
    return await baseApi
      .post("/dogs", dog, {
        method: "POST",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  deleteDogsNft: async (_id: string) => {
    return await baseApi
      .delete(`/delete-dog/${_id}`, {
        method: "DELETE",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  editWatchingAnime: async (codigo: number, anime: WatchingAnime) => {
    return await baseApi
      .put(`/animeswatching/${codigo}`, anime, {
        method: "PUT",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },

  fetchToWatchAnimes: async (params: { cod_user: number }) => {
    return await baseApi
      .get(`/animestowatch?cod_user=1`, {
        method: "GET",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  postToWatchAnime: async (anime: ToWatchAnime) => {
    return await baseApi
      .post("/animestowatch", anime, {
        method: "POST",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  editToWatchAnime: async (codigo: number, anime: ToWatchAnime) => {
    return await baseApi
      .put(`/animestowatch/${codigo}`, anime, {
        method: "PUT",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  deleteToWatchAnime: async (codigo: number) => {
    return await baseApi
      .delete(`/animestowatch/${codigo}`, {
        method: "DELETE",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
};

export default api;
