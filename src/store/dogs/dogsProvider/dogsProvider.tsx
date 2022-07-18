import React from "react";
import { TailSpin } from "react-loader-spinner";
import Loader from "../../../components/Loader";
import api from "../../../services/api";
import nftStorageApi from "../../../services/nftStorageApi";
import { DogsNFTType, DogsNFTContextSchema, DogsName } from "../dogs.types";

export const DogsNFTContext = React.createContext<DogsNFTContextSchema>(
  {} as DogsNFTContextSchema
);

const DogsProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = React.useState(false);

  const [dogMell, setDogMell] = React.useState<DogsNFTType[]>(
    [] as DogsNFTType[]
  );
  const [dogRedy, setDogRedy] = React.useState<DogsNFTType[]>(
    [] as DogsNFTType[]
  );
  const [dogLexa, setDogLexa] = React.useState<DogsNFTType[]>(
    [] as DogsNFTType[]
  );
  const [dogLittle, setDogLittle] = React.useState<DogsNFTType[]>(
    [] as DogsNFTType[]
  );

  const fetchDogsNft = async (params: { dogName: DogsName }) => {
    console.log("DFFETCHCHCHCH");
    try {
      const response = await api.fetchDogsNft(params);
      console.log(response);
      if (response) {
        switch (params.dogName) {
          case "Mell":
            setDogMell(response.data);
            break;
          case "Redy":
            setDogRedy(response.data);
            break;
          case "Lexa":
            setDogLexa(response.data);
            break;
          case "Little":
            setDogLittle(response.data);
            break;
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const postDogsNft = async (
    dogName: DogsName,
    dog: DogsNFTType,
    blob: any,
    callBack: () => void
  ) => {
    setLoading(true);
    try {
      const res = await nftStorageApi.uploadBlob(blob);

      if (res.ok) {
        const { cid } = res.value;
        console.log(res);

        const response = await api.postDogsNft({
          ...dog,
          dogName: dogName,
          fileCid: cid,
          fileName: blob.name,
        });
        console.log(response);

        await fetchDogsNft({ dogName });
        callBack();
        
      } else {
        console.warn("Alguma coisa deu errado");
      }
    } catch (err) {
      console.warn(err);
    }
    setLoading(false);
  };

  const fetchCidImage = async (cid: string) => {
    try {
      const response = await nftStorageApi.fetchCidImage(cid);

      if (response.ok) {
      }

      console.log(response);
    } catch (err) {
      console.warn(err);
    }
  };

  const deleteDogsNft = async (
    _id: string,
    dogName: DogsName,
    cid: string,
  ) => {
    setLoading(true);
    try {
      const res = await nftStorageApi.deleteCid(cid);

      if (res.ok) {
        const response = await api.deleteDogsNft(_id);

        await fetchDogsNft({ dogName });
        
      } else {
        console.warn("Alguma coisa deu errado");
      }
    } catch (err) {
      console.warn(err);
    }
    setLoading(false);
  };

  /*
  const editWatchingAnime = async (codigo: number, anime: WatchingAnime) => {
    try {
      const response = await api.editWatchingAnime(codigo, anime);
      console.log(response);

      //fetchWatchingAnimes();
      
      setWatchingAnimes(current => current.map(it => {
        if (it.codigo == codigo) {
          return {
            ...it,
            name: anime.name,
            description: anime.description,
          }
        }
        return it;
      }));
      
    } catch (err) {
      console.warn(err);
    }
  };

  const deleteWatchingAnime = async (codigo: number) => {
    try {
      const response = await api.deleteWatchingAnime(codigo);
      console.log(response);

      setWatchingAnimes(current => current.filter(it => it.codigo != codigo));
    } catch (err) {
      console.warn(err);
    }
  };
  */

  return (
    <DogsNFTContext.Provider
      value={{
        dogMell,
        dogRedy,
        dogLexa,
        dogLittle,
        fetchDogsNft,
        postDogsNft,
        fetchCidImage,
        deleteDogsNft,
        loading,
      }}
    >
      {children}
    </DogsNFTContext.Provider>
  );
};

export default DogsProvider;
