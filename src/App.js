import { useEffect, useRef, useState } from "react";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Box display="flex" flexDirection="column">
        <Box flexGrow={1} bgcolor="grey.300">
          <Header />
        </Box>
        <Box p={1}>
          <Content />
        </Box>
        <Box
          p={1}
          bgcolor="grey.300"
          style={{ width: "100%" }}
          css={{ position: "fixed", bottom: "0" }}
        >
          <Footer />
        </Box>
      </Box>
    </div>
  );
}

export default App;
