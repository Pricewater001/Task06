import React, { useState } from 'react'
import CustomeCard from './CustomeCard';
import { Button } from 'react-bootstrap';

const CatContent = () => {
const [url, setUrl] = useState("");
  


  const getData = async () => {
    const response = await fetch('https://randomfox.ca/floof/');
    const {image} = await response.json();
    console.log(image)
    setUrl(image);
  };

  return (
    <div className="mainContent">
      {url && <CustomeCard url={url} />}
      <Button as="input" type="button" value="GET Random Foxs" onClick={getData} />
    </div>
  )
}

export default CatContent
