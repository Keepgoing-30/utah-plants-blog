import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 text-center">
        <div className="text-5xl mb-4">🌿</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#3D3D3D] mb-4">
          About the Blog
        </h1>
        <div className="text-[#5A5A5A] leading-relaxed space-y-4 text-left">
          <p>
            This blog was created with the purpose of introducing the beauty of Utah&apos;s native plants to everyone — especially children and nature lovers.
            Each plant has a unique story, from the towering Linh Sam trees on the Rocky Mountains to the tiny dragon&apos;s breath flowers in the desert.
            We hope this blog will help you love and understand the wonderful world of nature around us.
          </p>
          <p>
            Please join us in exploring and protecting these amazing native plants! To learn more: <a href="https://www.wildflower.org" target="_blank" rel="noopener noreferrer" className="text-[#2e9c3d] hover:text-[#93b361] transition-colors">Wildflower.org</a>
          </p>
        </div>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-2.5 bg-[#2e9c3d] text-white text-sm font-medium rounded-full transition-all duration-200 hover:bg-[#93b361] hover:scale-105"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
