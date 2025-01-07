
import womenWhiteDress from "./public/womenWhiteDress.webp";
import womenBlackDress from "./public/womenBlackDress.webp";
import { Product } from "./type";
import womenOffWhiteDress from "./public/womenOffWhiteDress.webp";
import womenOffBlackDress from "./public/womenOffBlackDress.jpg";
import menBlueDress from "./public/menBlueDress.jpg";
import menOffBlueDress from "./public/menOffBlueDress.jpg";
import menYellowDress from "./public/menYellowDress.jpg";
import zeeshan from "./public/zeeshan.webp"
export const menProducts:Product[] = [
    {
      id: 1,
      name: "Zarvan",
      description: "High-quality sound with noise cancellation",
      price: 2000,
      image: menBlueDress,
    },
    {
        id: 2,
        name: "Keher",
        description: "Powerful sound in a compact design",
        price: 3000,
        image: zeeshan,
      },
    
    {
      id: 3,
      name: "Lumah",
      description: "Fast charging for all your devices",
      price: 3600,
      image: menOffBlueDress,
    },
    {
        id: 4,
        name: "Kaar-e-Khas",
        description: "Track your fitness and stay connected",
        price: 2800,
        image: menYellowDress,
      },
   
  ];
  
  export const womenProducts : Product[] = [
    {
      id: 1,
      name: "gen Z style",
      description: "High-quality sound with noise cancellation",
      price: 1000,
      image: womenWhiteDress,
    },
    {
        id: 2,
        name: "gen Z style",
        description: "Powerful sound in a compact design",
        price: 1500,
        image: womenBlackDress,
      },
    
    {
        id: 3,
        name: "Lumah",
        description: "Track your fitness and stay connected",
        price: 1500,
        image: womenOffWhiteDress,
      },
    
    {
        id: 4,
        name: "Sartaj",
        description: "Fast charging for all your devices",
        price: 2000,
        image: womenOffBlackDress,
      },
  ];

  