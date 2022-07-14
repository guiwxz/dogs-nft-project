import React from 'react'
import { useDropzone } from 'react-dropzone'
import { Blob } from 'nft.storage';

import { DropzoneWrapper, ImageInsideDiv, ImageInsidePropsDiv } from './index.style';
import Image from 'next/image';

interface DropzoneProps {
  value: ImageProps;
  onChange: React.Dispatch<React.SetStateAction<ImageProps>>
}

export type ImageProps = {
  image: string;
  blob: {
    name: string;
    type: string;
    size: string;
  };
}

const DropzoneComponent: React.FC<DropzoneProps> = ({ value, onChange }) => {
  const [loading, setLoading] = React.useState(false);
  const onDrop = React.useCallback(files => {
    setLoading(true);
    //onChange(acceptedFiless[0]);
    setLoading(false);

    const preview = URL.createObjectURL(files[0]);
    onChange({
      image: preview,
      blob: files[0]
    });
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = function () {
      files[0].base64 = reader.result;
    };
  }, [])

  const {getRootProps, getInputProps} = useDropzone({ 
    onDrop,
    multiple: false,
  })

  return (
    <DropzoneWrapper {...getRootProps()}>
      <input {...getInputProps()} />
      {
        Object.keys(value).length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Image src={value.image} width="150px" height="140px" alt="Imagem uploadada" />
            <ImageInsideDiv>
              <div><ImageInsidePropsDiv>name: </ImageInsidePropsDiv>{value.blob.name}</div>
              <div><ImageInsidePropsDiv>type: </ImageInsidePropsDiv>{value.blob.type}</div>
              <div><ImageInsidePropsDiv>size: </ImageInsidePropsDiv>{value.blob.size} bytes</div>
            </ImageInsideDiv>
          </div>

        ) : loading ? (
          <p>loading...</p>
        ) : (
          <p>Drop or select files here</p>
        )
      }
    </DropzoneWrapper>
  )
}

export default DropzoneComponent;