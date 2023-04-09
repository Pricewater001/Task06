import React, { useState } from "react";
import CustomeCard from "./CustomeCard";
import { Button } from "react-bootstrap";
import "../style/main.css";

const MainContent = () => {
  const [url, setUrl] = useState("");

  const getData = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const { message } = await response.json();
    setUrl(message);
  };

  return (
    <div className="mainContent">
      {url && <CustomeCard url={url} />}
      <Button as="input" type="button" value="Random" onClick={getData} />
    </div>
  );
};

export default MainContent;
