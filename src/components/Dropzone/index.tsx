import React from 'react'
import { useDropzone } from 'react-dropzone'
import { Blob } from 'nft.storage';

import { DropzoneWrapper } from './index.style';

interface DropzoneProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>
}

const DropzoneComponent: React.FC<DropzoneProps> = ({ value, onChange }) => {
  const [loading, setLoading] = React.useState(false);

  const onDrop = React.useCallback(acceptedFiles => {
    setLoading(true);
    onChange(acceptedFiles[0]);
    setLoading(false);
    console.log(acceptedFiles);

    const preview = URL.createObjectURL(acceptedFiles[0]);
    console.log(preview)

    let reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = function () {
      acceptedFiles[0].base64 = reader.result;
    };
    console.log(acceptedFiles[0]);
  }, [])

  const {getRootProps, getInputProps} = useDropzone({ 
    onDrop,
    multiple: false,
  })

  return (
    <DropzoneWrapper {...getRootProps()}>
      <input {...getInputProps()} />
      {
        value ? (
          <img src={value} width="150px" height="140px"  />

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