import React, { useRef, useState } from "react";
import CustomeCard from "./CustomeCard";
import { Button } from "react-bootstrap";
import "../style/main.css";
import Counter from "./Counter";

const MainContent = () => {
  const [url, setUrl] = useState("");
  const testRef = useRef();

  const getData = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const { message } = await response.json();
    setUrl(message);
  };

  return (
    <div className="mainContent">
      {url && <CustomeCard url={url} />}
      <Button
        as="input"
        type="button"
        value="GET Random Dog"
        onClick={getData}
      />
    </div>
  );
};

export default MainContent;
