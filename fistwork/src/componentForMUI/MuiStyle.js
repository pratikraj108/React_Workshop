import React from "react";
import Button from '@mui/material/Button';

const MuiStyle = () => {
  return (
    <>
      <div>MUI STYLE</div>
      <Button variant="text" style={{}}>Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
};

export default MuiStyle;
