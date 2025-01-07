import { Card } from '@/components/ui/card'
import Image from 'next/image'
import blackWhite from "./../public/blackDress.png"
export default function AboutSection() {
  return (
    <Card className="py-10 bg-white mx-auto  ">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-full min-h-[400px]">
            <Image
              src={blackWhite}
              alt="Our clothing brand"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">About Our Brand</h2>
            <p className="text-lg text-gray-600">
              At Rivayati Libass, we believe that clothing is more than just fabric – it's an expression of individuality, a canvas for creativity, and a means of empowerment. Founded in 2024, our journey began with a simple yet powerful vision: to create clothing that not only looks good but feels good and does good.
            </p>
            <p className="text-lg text-gray-600">
              Our designs are inspired by the diversity of human experiences, blending timeless elegance with contemporary flair. We meticulously select sustainable materials and partner with ethical manufacturers to ensure that every piece in our collection is crafted with care for both people and the planet.
            </p>
            <p className="text-lg text-gray-600">
              But Rivayati Libass is more than just a clothing line – it's a community. We're committed to fostering inclusivity, celebrating diversity, and inspiring confidence in every individual who wears our creations. Join us in our mission to redefine fashion as a force for positive change.
            </p>
            <button className="bg-[#800020] text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}

