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

import { NFTStorage, Blob, File } from 'nft.storage';
import Dropzone from "../../components/Dropzone";


const MellPage: React.FC = () => {
  const { 
    fetchDogsNft,
    dogMell
  } = useDogsNft();
  const { setDescriptionModal } = useDescriptionModal();
  
  const [openModal, setOpenModal] = React.useState(false);
  const [image, setImage] = React.useState('');

  console.log('ababhababna', image);

  const handleSubmit = async (values: DogsNFTType) => {
    console.log(values);
    setOpenModal(false);
  };
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
        <PageHeader
          onClick={() => setOpenModal(true)}
          title="Animes watching"
        />
      </Grid>
      <Grid item xs={12}>
        <DataTable
          data={dogMell}
          onRowClick={() => alert('adifmdsfd')}
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
                  onClick: () => alert("copiar"),
                },
              ],
            },
            {
              name: "action",
              label: "",
              removeAction: true,
              icons: [
                {
                  icon: <FiDelete size={22} />,
                  onClick: () => alert('remove'),
                },
              ],
            },
          ]}
        />
      </Grid>

      <ModalDialog
        title="Adicionar anime"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Grid container>
          <Grid item xs={12}>
            <Form handleSubmit={handleSubmit}>
              <InputField label="Titulo" name="title" id="nome" />
              <InputField label="Descrição" name="description" id="descricao" />
              <InputField label="Episódio" name="ep_counter" type="number" id="ep" />
              <Dropzone value={image} onChange={setImage} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "8px",
                  gap: "10px",
                }}
              >
                <Button onClick={() => {}} secondary>
                  Cancelar
                </Button>
                <SubmitButton label="Confirmar" />
              </div>
            </Form>
          </Grid>
        </Grid>
      </ModalDialog>
      
    </Grid>
  );
};

export default MellPage;
