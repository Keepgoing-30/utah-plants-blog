"use client";

import { useState } from "react";
import { Plant, getPlantImages } from "@/data/plants";

interface PlantCardProps {
  plant: Plant;
}

export default function PlantCard({ plant }: PlantCardProps) {
  const images = getPlantImages(plant);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFadeIn(true);
    }, 300);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
      {/* Image container */}
      <div className="relative w-full aspect-4/3 overflow-hidden bg-[#F5F0EB]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[currentIndex]}
          alt={`${plant.name} - ${plant.scientificName}`}
          className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
            fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-[#3D3D3D] mb-1">{plant.name}</h2>
        <p className="text-sm italic text-[#8B6F5E] mb-3">
          {plant.scientificName}
        </p>

        {/* Description */}
        <div className="text-sm text-[#5A5A5A] leading-relaxed mb-4 max-h-40 overflow-y-auto pr-1 custom-scrollbar">
          {plant.description.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-2">
              {paragraph.replace(/^"|"$/g, "")}
            </p>
          ))}
        </div>

        {/* Image counter + next button */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#8B6F5E]">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={handleNext}
            className="inline-block mt-6 px-6 py-2.5 bg-[#2e9c3d] text-white text-sm font-medium rounded-full transition-all duration-200 hover:bg-[#93b361] hover:scale-105"
          >
            Next Photo →
          </button>
        </div>
      </div>
    </div>
  );
}
