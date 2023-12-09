
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Container,
  FormButton,
  FormH1,
  FormWrap,
  Icon,
  Form,
  FormContent,
  Text,
} from './VerifyElements';

const Verify = () => {


  const [uploadedFile, setUploadedFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = 'https://issuer-ui.polygonid.me/credentials/scan-link/1aee0baa-3c1c-4d1b-9cab-39293c2c1322';

};

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">DesignVue</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Upload document for verification</FormH1>
              <div {...getRootProps()} style={dropzoneStyles}>
                <input {...getInputProps()} />
                <Text>
                  {uploadedFile
                    ? `File uploaded: ${uploadedFile.name}`
                    : 'Drag and drop your file here or click to select a file'}
                </Text>
              </div>
              <FormButton type="submit">Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

const dropzoneStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100px',
  border: '2px dashed #01bf71',
  borderRadius: '4px',
  padding: '16px',
  textAlign: 'center',
  cursor: 'pointer',
  marginBottom: '24px',
};

export default Verify;
