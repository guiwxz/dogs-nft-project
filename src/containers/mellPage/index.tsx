import React from "react";
import {
  FiCheck,
  FiPlusSquare,
  FiMinusSquare,
  FiDelete,
  FiCopy,
} from "react-icons/fi";
import Button from "../../components/Button";
import DataTable from "../../components/DataTable";
import Form from "../../components/Form";

import { Grid } from "../../components/Grid";
import SubmitButton from "../../components/InputButton";
import InputField from "../../components/InputField";
import ModalDialog from "../../components/ModalDialog";
import PageHeader from "../../components/PageHeader";
import { DogsNFTType } from "../../store/dogs/dogs.types";
import useDescriptionModal from "../../store/descriptionModal/useDescriptionModal/useDescriptionModal";
import useDogsNft from "../../store/dogs/useDogs/useDogs";
import Dropzone, { ImageProps } from "../../components/Dropzone";
import copy from "copy-to-clipboard";
import { TailSpin } from "react-loader-spinner";
import { colorPalette } from "../../config/colorPalette";

const MellPage: React.FC = () => {
  const { fetchDogsNft, postDogsNft, fetchCidImage, deleteDogsNft, dogMell, loading } = useDogsNft();
  const { setDescriptionModal } = useDescriptionModal();

  const [openModal, setOpenModal] = React.useState(false);
  const [image, setImage] = React.useState<ImageProps>({} as ImageProps);

  const handleSubmit = async (values: DogsNFTType) => {
    postDogsNft("Mell", values, image.blob, () => setOpenModal(false));
    setImage({} as ImageProps);
  };

  const handleOpenCidImage = async (values: DogsNFTType) => {
    console.log(values);
    if (values.fileCid && values.fileCid.length > 0) {
      window.open(`https://${values.fileCid}.ipfs.nftstorage.link`);
      //const blob = await fetchCidImage(values.fileCid);
    } else {
      alert("Cid nao encontrado!");
    }
  };

  const handleRemove = ({ fileCid, _id }: DogsNFTType) => {
    if (fileCid && fileCid.length > 0) {
      deleteDogsNft(_id as string, "Mell", fileCid);
    } else {
      alert("Cid nao encontrado!");
    }
  }

  React.useEffect(() => {
    fetchDogsNft({ dogName: "Mell" });
  }, []);
  /*
  const handleRemoveAnime = ({ codigo }: WatchingAnime) => {
    deleteWatchingAnime(codigo);
  };

  const handleEditAnime = React.useCallback((anime) => {
    console.log('aqui');
    
    setDescriptionModal({ 
      anime, 
      open: true, 
      onSubmit: (values) => editWatchingAnime(anime.codigo, values) 
    });
  }, [setDescriptionModal, editWatchingAnime]);
*/
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PageHeader onClick={() => setOpenModal(true)} title="Mell" />
      </Grid>
      <Grid item xs={12}>
        <DataTable
          data={dogMell}
          onRowClick={handleOpenCidImage}
          columns={[
            {
              name: "title",
              label: "Título",
            },
            {
              name: "fileName",
              label: "Nome do arquivo",
            },
            {
              name: "date",
              label: "Data",
              dateFormat: true,
            },
            {
              name: "action",
              label: "Copy CID",
              icons: [
                {
                  icon: <FiCopy size={22} />,
                  onClick: (values) => copy(values.fileCid || ""),
                },
              ],
            },
            {
              name: "action",
              label: "",
              removeAction: true,
              icons: [
                {
                  icon: loading ? (
                    <TailSpin
                      height="30"
                      width="30"
                      color={colorPalette.primary[500]}
                      ariaLabel='loading'
                      radius={0}
                    />
                  ) : (
                    <FiDelete size={22} />
                  ),
                  onClick: handleRemove,
                },
              ],
            },
          ]}
        />
      </Grid>

      <ModalDialog
        title="Adicionar fotinha"
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setImage({} as ImageProps);
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Form handleSubmit={handleSubmit} nonFieldsCount={1}>
              <InputField label="Titulo" name="title" id="nome" />
              <InputField label="Descrição" name="description" id="descricao" />
              <Dropzone value={image} onChange={setImage} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                  gap: "10px",
                }}
              >
                {
                  loading ? (
                    <TailSpin
                      height="30"
                      width="30"
                      color={colorPalette.primary[500]}
                      ariaLabel='loading'
                      radius={0}
                    />
                  ) : (
                    <>
                      <Button onClick={() => {}} secondary>
                        Cancelar
                      </Button>
                      <SubmitButton label="Confirmar" />
                    </>
                  )
                }
              </div>
            </Form>
          </Grid>
        </Grid>
      </ModalDialog>
    </Grid>
  );
};

export default MellPage;
