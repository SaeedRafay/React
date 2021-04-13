import React, { useState } from "react";
import DogPhoto from "./DogPhoto";
import Button from "../ex2/Button";

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const getDogPhoto = () => {
    return fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogPhotos((dogPhotos) => [...dogPhotos, data.message]);
      });
  };
  return (
    <div className="DogGallery">
      <Button getDogPhoto={getDogPhoto} />
      <br />
      {dogPhotos.length > 0 &&
        dogPhotos.map((dogPhoto) => <DogPhoto dogPhoto={dogPhoto} />)}
    </div>
  );
}

export default DogGallery;
