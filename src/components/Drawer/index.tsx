import React from "react";
import { Grid } from "../Grid";
import { Container, Header, DrawerItems, Item, Footer } from "./index.style";
import router from "next/router";

import { FaDog, FaHome, FaRegPlayCircle } from "react-icons/fa";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { FiPause, FiPlay } from "react-icons/fi";

//TODO adicionar styled components no _document
const Drawer: React.FC<{ switchTheme?: (param: boolean) => void }> = ({
  switchTheme,
}) => {
  return (
    <Container>
      <div style={{ height: "87%" }}>
        <Header>
          <img src="/static/god.png" width="150px" height="140px" />
        </Header>
        <DrawerItems>
          <Item onClick={() => router.push("/mell")}>
            <FaDog size="20px" />
            Mell
          </Item>
          <Item onClick={() => router.push("/redy")}>
            <FaDog size="20px" />
            Redy
          </Item>
          <Item onClick={() => router.push("/lexa")}>
            <FaDog size="20px" />
            Lexa
          </Item>
          <Item onClick={() => router.push("/little")}>
            <FaDog size="20px" />
            Little
          </Item>
        </DrawerItems>
      </div>
      {/* <Footer>Switch Theme</Footer> */}
    </Container>
  );
};

export default Drawer;
