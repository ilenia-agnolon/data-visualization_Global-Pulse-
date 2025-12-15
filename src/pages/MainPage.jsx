import { useState } from "react";

//components
import { ParticleBackground } from "../components/ParticleBackground";
import { Hero } from "../components/Hero";
import { ExploreCategories } from "../components/ExploreCategories";
import { CuriositiesSection } from "../components/CuriositiesSection";

//css
import "./MainPage.css"

export function MainPage() {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  return (
    <div className="main-page">
        {/* BACKGROUND */}
      <ParticleBackground />

      <div className="page-content">
        {/* HERO */}
        <Hero />

        {/* CATEGORIES SECTION */}
        <ExploreCategories/>

        {/* CURIOSITIES SECTION */}
        <CuriositiesSection/>
      </div>
    </div>
  );
}