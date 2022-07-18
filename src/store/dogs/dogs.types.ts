export type DogsName = "Mell" | "Redy" | "Lexa" | "Little";

export type DogsNFTType = {
  _id?: string;
  dogName: DogsName;
  title: string;
  date?: string;
  description?: string;
  fileName?: string;
  fileCid?: string;
};

export interface DogsNFTContextSchema {
  dogMell: DogsNFTType[];
  dogRedy: DogsNFTType[];
  dogLexa: DogsNFTType[];
  dogLittle: DogsNFTType[];
  loading: boolean;
  fetchDogsNft: (params: { dogName: DogsName }) => Promise<void>;
  postDogsNft: (dogName: DogsName, dog: DogsNFTType, blob: any, callBack: () => void) => Promise<void>;
  fetchCidImage: (cid: string) => Promise<void>;
  deleteDogsNft: (_id: string,
    dogName: DogsName,
    cid: string,) => Promise<void>
  //postWatchingAnime: (cod_user: number, anime: DogsNFTType) => Promise<void>;
  //editWatchingAnime: (codigo: number, anime: DogsNFTType) => Promise<void>;
  //deleteWatchingAnime: (codigo: number) => Promise<void>;
}
