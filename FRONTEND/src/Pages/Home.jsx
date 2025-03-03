import React, { useContext } from "react";
import { motion } from "framer-motion";
import { StoreContext } from "../Context";
import potterImg from "../assets/potterImgv.jpg";
import Hero from "../Components/Hero";
import Category from "../Components/Category";

function Home() {
  const { url } = useContext(StoreContext);

  return (
    <div className="container mx-auto py-30 px-6 md:px-12">
      <Hero />
      <div className="py-16">
        <Category />
      </div>
    </div>
  );
}

export default Home;
