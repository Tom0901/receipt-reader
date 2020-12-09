import { CardContent, Paper, Typography } from "@material-ui/core";
import React from "react";

export default function Header() {
  return (
    <React.Fragment>
      <Paper>
        <CardContent>
          <Typography variant="h1">Receipt Reader</Typography>
          <Typography variant="p">
            Upload an image of a receipt then we'll read it for you and adjust
            the values to reflect tax it's eligible for.
          </Typography>
        </CardContent>
      </Paper>
    </React.Fragment>
  );
}
