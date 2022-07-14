export type DogsName = "Mell" | "Redy" | "Lexa" | "Little";

export type DogsNFTType = {
  dogsName: DogsName;
  title: string;
  date: string;
  description?: string;
  fileName?: string;
  fileCID?: string;
};

export interface DogsNFTContextSchema {
  dogMell: DogsNFTType[];
  dogRedy: DogsNFTType[];
  dogLexa: DogsNFTType[];
  dogLittle: DogsNFTType[];
  fetchDogsNft: (params: { dogName: DogsName }) => Promise<void>;
  //postWatchingAnime: (cod_user: number, anime: DogsNFTType) => Promise<void>;
  //editWatchingAnime: (codigo: number, anime: DogsNFTType) => Promise<void>;
  //deleteWatchingAnime: (codigo: number) => Promise<void>;
}
