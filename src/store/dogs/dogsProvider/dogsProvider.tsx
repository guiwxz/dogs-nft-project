import React from "react";
import api from "../../../services/api";
import nftStorageApi from "../../../services/nftStorageApi";
import { DogsNFTType, DogsNFTContextSchema, DogsName } from "../dogs.types";


export const DogsNFTContext = React.createContext<DogsNFTContextSchema>(
  {} as DogsNFTContextSchema
);

const DogsProvider: React.FC = ({ children }) => {
  const [dogMell, setDogMell] = React.useState<DogsNFTType[]>([] as DogsNFTType[]);
  const [dogRedy, setDogRedy] = React.useState<DogsNFTType[]>([] as DogsNFTType[]);
  const [dogLexa, setDogLexa] = React.useState<DogsNFTType[]>([] as DogsNFTType[]);
  const [dogLittle, setDogLittle] = React.useState<DogsNFTType[]>([] as DogsNFTType[]);

  const fetchDogsNft = async (params: { dogName: DogsName }) => {
    console.log("DFFETCHCHCHCH")
    try {
      const response = await api.fetchDogsNft(params);
      console.log(response)
      if (response) setDogMell(response.data);

    } catch (err) {
      console.warn(err);
    }
  };
  
  const postDogsNft = async (dogName: DogsName, dog: DogsNFTType, blob: any) => {
    try {
      const res = await nftStorageApi.uploadBlob(blob);

      if (res.ok) {
        const { cid } = res.value;
        console.log(res);

        const response = await api.postDogsNft({
          ...dog,
          dogName: dogName,
          fileCid: cid,
          fileName: blob.name
        });
        console.log(response);

        fetchDogsNft({ dogName });

      } else {
        console.warn('Alguma coisa deu errado');
      }

    } catch (err) {
      console.warn(err);
    }
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
        postDogsNft
      }}
    >
      {children}
    </DogsNFTContext.Provider>
  );
};

export default DogsProvider;
