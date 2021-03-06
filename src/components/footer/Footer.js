import React from "react";
import Box from "@material-ui/core/Box";

export const Footer = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={1}
      m={1}
      css={{ height: 100 }}
    >
      <Box bgcolor="grey.300">Ronaldo Monserrate &copy;</Box>
    </Box>
  );
};
