// src/app/page.tsx
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import BrandingCards from "@/components/sections/BrandingCards";
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import TopCategories from '@/components/sections/TopCategories';
import ExploreNewStyles from '@/components/sections/ExploreNewStyles';
import OurProducts from '@/components/sections/OurProducts';

const Home = () => {
  return (
    <>
      <HeroSection />
      <br />
      <BrandingCards />
      <FeaturedProducts />
      <TopCategories />
      <ExploreNewStyles />
      <OurProducts />
    </>
  );
};

export default Home;
