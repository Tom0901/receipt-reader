import { Card, Paper, Typography } from "@material-ui/core";
import React from "react";
import hero from "../media/hero.mp4";
import styles from "../CSS/header.module.css";

export default function Header() {
  return (
    <React.Fragment>
      <Paper>
        <Card>
          <video src={hero} style={styles.vid} autoPlay={true}></video>
          <Typography variant="p">
            Upload an image of a receipt, then we'll read it for you and adjust
            the values to include any tax the items are eligible for.
          </Typography>
        </Card>
      </Paper>
    </React.Fragment>
  );
}
