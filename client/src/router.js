import React from "react";
import { Route, Routes } from "react-router-dom";
import CategorizedAnimalsPage from "./Pages/CategorizedAnimals";
import Homepage from "./Pages/Homepage";
import PetProfilePage from "./Pages/PetProfilePage";

const Router = () => {
  return (
    <Routes>
       <Route path="/" element={<Homepage />} />
      <Route path="/category/:category" element={<CategorizedAnimalsPage />} />
      <Route path="/category/:category/:id" element={<PetProfilePage />} />
    </Routes>
  );
};

export default Router;