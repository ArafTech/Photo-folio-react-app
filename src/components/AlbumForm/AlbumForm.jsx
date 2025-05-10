import React, { useState } from "react";
import styles from "./AlbumForm.module.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

const AlbumForm = ({ onAlbumCreate, fetchAlbums, setShowForm }) => {
  const [albumName, setAlbumName] = useState("");
  const [albumImage, setAlbumImage] = useState("");

  const handleInputChange = (e) => {
    setAlbumName(e.target.value);
  };

  const handleImageChange = (e) => {
    setAlbumImage(e.target.value);
  };

  const handleAlbumCreate = async (album) => {
    try {
      if (!album.name || !album.imageUrl) {
        console.error("Album name or image URL is missing.");
        return;
      }
      await addDoc(collection(db, "albums"), album);
      fetchAlbums(); // Refresh the album list after adding
      setShowForm(false);
    } catch (error) {
      console.error("Error in creating Albums: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const album = { name: albumName, imageUrl: albumImage };
    handleAlbumCreate(album);
    setAlbumName("");
    setAlbumImage("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Create Album</h1>
      <input
        type="text"
        value={albumName}
        onChange={handleInputChange}
        placeholder="Enter album name"
        required
        autoFocus
      />
      <input
        type="text"
        value={albumImage}
        onChange={handleImageChange}
        placeholder="Enter album image URL"
        required
      />
      <button type="submit">Add Album</button>
    </form>
  );
};

export default AlbumForm;
