import React from "react";
import Box from "@material-ui/core/Box";
import { PlayButton } from "./PlayButton";
import { Table } from "./Table";

export const Content = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={1}
      m={1}
      bgcolor="background.paper"
      css={{ height: 100 }}
    >
      <Box p={1}>
        <PlayButton />
      </Box>
      <Box p={1} css={{ width: "50vw" }}>
        <Table />
      </Box>
    </Box>
  );
};
