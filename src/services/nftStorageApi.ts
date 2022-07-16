import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "https://api.nft.storage",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.REACT_APP_NFT_KEY}`
  },
});

const parseResponse = (response: AxiosResponse) => {
  const res = response;
  if (response.status === 200) {
    return res.data;
  }
  throw res;
};

const nftStorageApi = {
  uploadBlob: async (blob: any) => {
    return await api.post('/upload', blob, {
      method: 'POST',
    })
    .then(parseResponse)
    .catch((err) => console.warn(err));
  },
  fetchCidImage: async (cid: string) => {
    return await api.get(`/${cid}`, {
      method: 'GET',
    })
    .then((parseResponse))
    .catch((err) => console.warn(err));
  }
};

export default nftStorageApi;
