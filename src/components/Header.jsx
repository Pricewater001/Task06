import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navigation />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
