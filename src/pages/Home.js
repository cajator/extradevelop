import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import RotatingGallery from '../components/RotatingGallery';
import ProjectGrid from '../components/ProjectGrid';
import ProjectGallery from '../components/ProjectGallery';

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const Home = ({ projects }) => {
  const projectImages = [
    { src: "/images/projects/projekt1.jpg", alt: "Projekt 1" },
    { src: "/images/projects/projekt2.jpg", alt: "Projekt 2" },
    { src: "/images/projects/projekt3.jpg", alt: "Projekt 3" },
    { src: "/images/projects/projekt4.jpg", alt: "Projekt 4" },
    { src: "/images/projects/projekt5.jpg", alt: "Projekt 5" },
    { src: "/images/projects/projekt6.jpg", alt: "Projekt 6" },
    { src: "/images/projects/projekt7.jpg", alt: "Projekt 7" },
    { src: "/images/projects/projekt8.jpg", alt: "Projekt 8" },
    { src: "/images/projects/projekt9.jpg", alt: "Projekt 9" },
    { src: "/images/projects/projekt10.jpg", alt: "Projekt 10" },
    { src: "/images/projects/projekt11.jpg", alt: "Projekt 11" },
    { src: "/images/projects/projekt12.jpg", alt: "Projekt 12" },
    { src: "/images/projects/projekt13.jpg", alt: "Projekt 13" },
    { src: "/images/projects/projekt14.jpg", alt: "Projekt 14" },
    { src: "/images/projects/projekt15.jpg", alt: "Projekt 15" },
    { src: "/images/projects/projekt16.jpg", alt: "Projekt 16" },
  ];

  const realizationImages = [
    { thumbnail: "/images/realizations/realizace1.jpg", full: "/images/realizations/realizace1.jpg", alt: "Realizace 1", description: "Popis realizace 1" },
    { thumbnail: "/images/realizations/realizace2.jpg", full: "/images/realizations/realizace2.jpg", alt: "Realizace 2", description: "Popis realizace 2" },
    { thumbnail: "/images/realizations/realizace3.jpg", full: "/images/realizations/realizace3.jpg", alt: "Realizace 3", description: "Popis realizace 3" },
    { thumbnail: "/images/realizations/realizace4.jpg", full: "/images/realizations/realizace4.jpg", alt: "Realizace 4", description: "Popis realizace 4" },
    { thumbnail: "/images/realizations/realizace5.jpg", full: "/images/realizations/realizace5.jpg", alt: "Realizace 5", description: "Popis realizace 5" },
    { thumbnail: "/images/realizations/realizace6.jpg", full: "/images/realizations/realizace6.jpg", alt: "Realizace 6", description: "Popis realizace 6" },
    { thumbnail: "/images/realizations/realizace7.jpg", full: "/images/realizations/realizace7.jpg", alt: "Realizace 7", description: "Popis realizace 7" },
    { thumbnail: "/images/realizations/realizace8.jpg", full: "/images/realizations/realizace8.jpg", alt: "Realizace 8", description: "Popis realizace 8" },
    { thumbnail: "/images/realizations/realizace9.jpg", full: "/images/realizations/realizace9.jpg", alt: "Realizace 9", description: "Popis realizace 9" },
    { thumbnail: "/images/realizations/realizace10.jpg", full: "/images/realizations/realizace10.jpg", alt: "Realizace 10", description: "Popis realizace 10" },
    { thumbnail: "/images/realizations/realizace11.jpg", full: "/images/realizations/realizace11.jpg", alt: "Realizace 11", description: "Popis realizace 11" },
    { thumbnail: "/images/realizations/realizace12.jpg", full: "/images/realizations/realizace12.jpg", alt: "Realizace 12", description: "Popis realizace 12" },
    { thumbnail: "/images/realizations/realizace13.jpg", full: "/images/realizations/realizace13.jpg", alt: "Realizace 13", description: "Popis realizace 13" },
    { thumbnail: "/images/realizations/realizace14.jpg", full: "/images/realizations/realizace14.jpg", alt: "Realizace 14", description: "Popis realizace 14" },
    { thumbnail: "/images/realizations/realizace15.jpg", full: "/images/realizations/realizace15.jpg", alt: "Realizace 15", description: "Popis realizace 15" },
    { thumbnail: "/images/realizations/realizace16.jpg", full: "/images/realizations/realizace16.jpg", alt: "Realizace 16", description: "Popis realizace 16" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero sekce s paralaxem */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero/hero-image.jpg')",
            backgroundPosition: 'center top',
            transform: "translateY(var(--scroll)) translateY(-1%)",
            transition: "transform 0.5s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              EXTRA DEVELOP
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl lg:text-3xl max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Tvoříme budoucnost bydlení a komerčních prostor s důrazem na inovace a udržitelnost
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link
                to="/projects"
                className="inline-block bg-extradevelop-blue text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition duration-300"
              >
                Prohlédnout projekty
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O nás sekce */}
      <FadeInSection>
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">O nás</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-10">
              V <strong>EXTRA DEVELOP</strong> stavíme na rodinných tradicích a dlouholetých zkušenostech v oblasti developmentu.
              Naším cílem je vytvářet moderní a funkční prostory pro život i práci s důrazem na kvalitu a individuální přístup.
            </p>
            <div className="text-center">
              <Link
                to="/about"
                className="inline-block bg-extradevelop-blue text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-opacity-90 transition duration-300"
              >
                Zjistit více o nás
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Rotující galerie projektů */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Naše projekty v obrazech</h2>
            <RotatingGallery images={projectImages} />
          </div>
        </section>
      </FadeInSection>

      {/* Přehled našich projektů */}
      <FadeInSection>
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Přehled našich projektů</h2>
            <ProjectGrid projects={projects.slice(0, 3)} showFilters={false} />
            <div className="text-center mt-8">
              <Link
                to="/projects"
                className="inline-block bg-extradevelop-blue text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition duration-300"
              >
                Zobrazit všechny projekty
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Galerie fotografií realizací */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Galerie našich realizací</h2>
            <ProjectGallery images={realizationImages} limit={12} />
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default Home;