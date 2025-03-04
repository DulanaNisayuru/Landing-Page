import { useState, useEffect } from "react";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center justify-center text-center">
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-white">
        
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Welcome to Our Website
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          High-quality services tailored for you.
        </p>
        <button className="mt-5 px-6 py-2 bg-blue-500 text-gray-900 dark:text-white rounded-lg shadow-lg dark:bg-blue-500">
          Get Started
        </button>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </section>
  );
}

  