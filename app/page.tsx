import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900">
      <Navbar />
      <Hero />
      <InfoSection />
      <FeaturedProjects />
    </main>
  );
}