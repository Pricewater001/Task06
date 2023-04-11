import React, { useState } from "react";
import CustomeCard from "./CustomeCard";
import { Button } from "react-bootstrap";

const DuckContent = () => {
  const [url, setUrl] = useState("");

  // ✅ Works
  async function getData() {
    try {
      const response = await fetch("https://biriyani.anoram.com/get", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const { image } = await response.json();
      setUrl(image);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="mainContent">
      {url && <CustomeCard url={url} />}
      <Button
        as="input"
        type="button"
        value="GET Random Rice"
        onClick={getData}
      />
    </div>
  );
};

export default DuckContent;
