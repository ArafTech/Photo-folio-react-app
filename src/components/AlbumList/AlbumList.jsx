import React, { useState, useEffect } from "react";
import styles from "./AlbumList.module.css";
import AlbumForm from "../AlbumForm/AlbumForm";
import { db } from "../../config/firebase";
import ImageList from "../ImageList/ImageList";
import { CiCircleRemove } from "react-icons/ci";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const AlbumLists = () => {
  const [showForm, setShowForm] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  const fetchAlbums = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "albums"));
      const albumData = [];
      querySnapshot.forEach((doc) => {
        albumData.push({ id: doc.id, ...doc.data() }); // Ensure imageUrl is included
      });
      setAlbums(albumData);
    } catch (error) {
      console.error("Error fetching albums: ", error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const handleToggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  const handleAlbumCreate = async (album) => {
    try {
      await addDoc(collection(db, "albums"), album);
      fetchAlbums();
      setShowForm(false);
    } catch (error) {
      console.error("Error in creating Albums: ", error);
    }
  };

  const handleAlbumClick = (albumId) => {
    setSelectedAlbumId(albumId);
    setShowForm(false);
  };

  const handleBackClick = () => {
    setSelectedAlbumId(null);
  };

  const handleAlbumRemove = async (id) => {
    const docRef = doc(db, "albums", id);
    await deleteDoc(docRef);
    fetchAlbums();
  };

  return (
    <>
      {!selectedAlbumId && (
        <div className={styles.main}>
          <h2>Your Albums</h2>
          <button
            className={`${styles.addButton} ${
              showForm ? styles.cancelButton : ""
            }`}
            onClick={handleToggleForm}
          >
            {showForm ? "Cancel" : "Add Album"}
          </button>
        </div>
      )}
      {showForm && <AlbumForm onAlbumCreate={handleAlbumCreate} />}
      {!selectedAlbumId && albums.length > 0 && (
        <div className={styles.lists}>
          {albums.map((album) => (
            <div key={album.id} className={styles.albumItem}>
              <CiCircleRemove
                size={20}
                className={styles.delete}
                onClick={() => handleAlbumRemove(album.id)}
              />
              <img
                src={album.imageUrl || "https://via.placeholder.com/150"} // Default image
                alt="album"
                className={styles.icon}
                onClick={() => handleAlbumClick(album.id)}
              />
              <span>{album.name}</span>
            </div>
          ))}
        </div>
      )}
      {selectedAlbumId && (
        <ImageList albumId={selectedAlbumId} onBackClick={handleBackClick} />
      )}
    </>
  );
};

export default AlbumLists;
