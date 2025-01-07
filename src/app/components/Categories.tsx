import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import men from "./../public/men.png";
import women from "./../public/women.jpg"
const products = [
  {
    title: "Products for Women",
    image: women,
  },
  {
    title: "Products for Men",
    image: men,
  },
];
export default function Categories() {
  return (
    <div className="container mx-auto px-4 py-8 h-96">
      <div className="grid md:grid-cols-2 gap-8 h-full ">
        {products.map((product) => {
          return (
            <Card className="overflow-hidden h-full">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2">
                  <Image
                    src={product.image}
                    alt={product.title}
                    
                    className="w-full h-96 "
                  />
                </div>
                <CardContent className="md:w-1/2 flex items-center justify-center p-6 bg-[#800020]">
                  <h2 className="text-2xl font-bold text-center text-white">
                    {product.title}
                  </h2>
                </CardContent>
              </div>
            </Card>
          );
        })}

      
      </div>
    </div>
  );
}
