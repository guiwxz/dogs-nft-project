import React from "react";
import { WatchingAnime } from "../dogs/dogs.types";

export type DefaultDescriptionModal = {
  open: boolean;
  anime: WatchingAnime | null;
  onSubmit(anime: WatchingAnime): void;
};

export interface DescriptionModalContextSchema {
  setDescriptionModal: React.Dispatch<
    React.SetStateAction<DefaultDescriptionModal>
  >;
}
