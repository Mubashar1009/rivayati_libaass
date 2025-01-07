import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "../type";


export default function ProductCards({title,products} : {title:string,products:Product[]}) {
  return (
    <div className="container mx-auto py-8">
     <div className="flex justify-between items-center">
     <h4 className="text-xl font-semibold mb-6 ">{title}</h4>
     <span className="text-green-600 underline line-clamp-2">See more</span>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {products.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-transparent border-0"
          >
            <div className="relative h-[420px]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-4 py-2">
              <div className="flex justify-between items-start flex-col ">
             
                  <h2 className="text-base font-medium  ">{product.name}</h2>
                 
              
                <span className="text-lg font-bold text-[#800020]">
                  RS {product.price.toFixed(2)}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
