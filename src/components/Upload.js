import React from "react";
import { Typography, Card } from "@material-ui/core";
import Dropzone from "react-dropzone";

export default function Upload() {
  const fileHandler = (files) => {
    console.log(files);
  };
  return (
    <div>
      <Dropzone onDrop={(acceptedFiles) => fileHandler(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <Card {...getRootProps()} outline="primary">
              <input {...getInputProps()} />
              <Typography>
                Drag 'n'drop some files here, or click to select files
              </Typography>
            </Card>
          </section>
        )}
      </Dropzone>
    </div>
  );
}
