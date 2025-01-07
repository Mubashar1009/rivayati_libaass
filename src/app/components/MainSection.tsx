import React from "react";
import Image from "next/image";
import product from "./../public/product.png"
import Categories from "./Categories";
import ProductCards from "./ProductCard";
import { menProducts, womenProducts } from "../constant";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
export const MainSection = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
        
     <div className=" flex lg:gap-4 bg-[#800020] h-screen">
        <div className="lg:flex-1 flex justify-center items-center lg:gap-4 flex-col">
      <h4 className=" text-lg lg:text-7xl text-white font-normal lg:font-semibold">  Rivayati Libaas</h4>
      <h4 className=" text-sm lg:text-2xl text-white font-light lg:font-semibold text-center"> { `want to unite \n our nation with one Brand` }</h4>
        </div>
     <Image
      src={product}
      className="flex-1 "
      alt="Picture of the author"
    />
     </div>
     <Categories/>
  
     <ProductCards title= "New Arrivals for Women" products={womenProducts}/>
     <ProductCards title= "New Arrivals for Men" products={menProducts}/>
     <AboutSection/>
     <Footer/>
    </div>
  );
};
