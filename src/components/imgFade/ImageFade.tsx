import { h } from "preact";
import "./fade.css";
import { useEffect, useState } from "preact/hooks";
import { getCollection } from "astro:content";

let data = await getCollection("art").then((art) => art);

let images = data.map((item) => item.data.src);

export default function ImageFade() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className={`slideshow max-h-[70vh] h-screen  md:h-[70vh] md:w-[50vw] flex justify-center items-center relative`}
    >
      {images.map((image, index) => (
        <img
          className={`slideshow-image  absolute ${
            currentIndex === index ? "active" : ""
          }`}
          src={image}
          alt=""
          key={index}
        />
      ))}
    </div>
  );
}
