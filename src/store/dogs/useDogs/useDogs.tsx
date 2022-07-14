import { useContext } from "react";

import { DogsNFTContext } from "../dogsProvider/dogsProvider";

const useDogsNft = () => {
  const context = useContext(DogsNFTContext);

  if (!context) {
    throw new Error(
      "useDogsNft() deve estar dentro de um <DogsProvider />"
    );
  }

  return context;
};

export default useDogsNft;
