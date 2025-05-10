// filepath: c:\Users\Arafath\OneDrive\Desktop\Coding\React\photo-folio\src\App.jsx
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import AlbumList from "./components/AlbumList/AlbumList";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <AlbumList />
    </React.Fragment>
  );
}

export default App;
