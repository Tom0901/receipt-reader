import React from "react";
import { Button } from "@material-ui/core";

export default function Upload() {
  const fileHandler = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <div>
      <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden onChange={fileHandler} />
      </Button>
    </div>
  );
}
