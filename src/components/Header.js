import { Card, Paper, Box } from "@material-ui/core";
import React from "react";
import hero from "../media/hero.mp4";
import "../CSS/header.css";

export default function Header() {
  return (
    <React.Fragment>
      <Paper>
        <Card className="vidContainer">
          <video src={hero} className="vid" autoPlay={true}></video>
        </Card>
      </Paper>
    </React.Fragment>
  );
}
