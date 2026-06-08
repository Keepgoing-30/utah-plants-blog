import PlantCard from "@/components/PlantCard";
import { plants } from "@/data/plants";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#3D3D3D] mb-3">
          Explore Utah Native Plants
        </h1>
        <p className="text-base sm:text-lg text-[#8B6F5E] max-w-xl mx-auto">
          Uncover the beauty of Utah through its unique native plants
        </p>
      </div>

      {/* Plant grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}
