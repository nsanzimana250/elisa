import { useEffect } from "react";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const scrollToHashTarget = (behavior: ScrollBehavior) => {
  const rawHash = window.location.hash;
  if (!rawHash || rawHash === "#") return;

  const targetId = decodeURIComponent(rawHash.replace("#", ""));
  const el = document.getElementById(targetId);
  if (!el) return;

  el.scrollIntoView({ behavior, block: "start" });
};

const Index = () => {
  useEffect(() => {
    const onHashChange = () => scrollToHashTarget("smooth");

    // After initial render, ensure deep-links like /#contact scroll correctly.
    window.setTimeout(() => scrollToHashTarget("auto"), 0);
    window.setTimeout(() => scrollToHashTarget("auto"), 250);

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Achievements />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

