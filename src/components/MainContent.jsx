import React, { useState } from "react";
import CustomeCard from "./CustomeCard";
import { Button } from "react-bootstrap";
import "../style/main.css";

const MainContent = () => {
  const [url, setUrl] = useState(
    "https://images.dog.ceo/breeds/airedale/n02096051_441.jpg"
  );

  const getData = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const {message} = await response.json();
    setUrl(message);
  };

  return (
    <div className="mainContent">
      <CustomeCard url={url} />
      <Button as="input" type="button" value="Random" onClick={getData}  />
    </div>
  );
};

export default MainContent;
