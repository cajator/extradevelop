import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FloatingHeader from './components/FloatingHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './components/ProjectDetail';
import ScrollToTop from './components/ScrollToTop'

const projectsData = [
  { 
    id: 1, 
    title: "Panorama Chlum I.", 
    shortDescription: "Projekt využívá jedinečný potenciál mírně svažitého pozemku s ohromujícím výhledem na Šumavu",
    longDescription: "Projekt Panorama Chlum byl navržen s cílem maximálně využít jedinečný potenciál velkého, mírně svažitého pozemku, který nabízí ohromující výhledy na hřebeny Šumavy. Tento prostor jsme proměnili v místo pro bydlení, které je v dokonalé harmonii s okolní přírodou. Jednotlivé objekty jsou citlivě zasazeny do terénu tak, aby každý bytový prostor disponoval jedinečnou orientací ke světovým stranám, čímž se zajišťuje optimální oslunění a kontakt s přírodou. Prostor mezi objekty je modelován terénními úpravami, které nejen dotvářejí estetiku celého místa, ale také otevírají průhledy na malebné horizonty horských luk a zalesněných vrchů. Tímto projektem jsme chtěli vytvořit bydlení, které nejen poskytuje komfort a funkčnost, ale také vnáší do každodenního života klid a krásu okolní přírody.",
    status: "dokončeno", 
    location: "Šumava",
    area: 10000,
    startDate: "2022",
    endDate: "2024",
    features: [
      "Jedinečný výhled na hřebeny Šumavy",
      "Harmonické zasazení do přírody",
      "Optimální orientace bytových prostor ke světovým stranám",
      "Modelované terénní úpravy mezi objekty",
      "Průhledy na horské louky a lesy",
      "Bydlení v souladu s okolní přírodou"
    ],
    gallery: ["panorama_1.jpg", "panorama_2.jpg", "panorama_3.jpg", "panorama_4.jpg"]
  },
  { 
    id: 2, 
    title: "Pivovarské Terasy", 
    shortDescription: "Moderní bydlení s nádechem historie v srdci Protivína. Světlé byty s terasou, sklepem a parkováním.",
    longDescription: "Pivovarské Terasy v Protivíně – to je moderní bydlení s nádechem historie. Užijte si klidné prostředí v blízkosti bývalého pivovaru, obklopené zelení, s nádhernými výhledy z mírného kopce. Architektonicky unikátní domy s osobitým vzhledem nabízejí světlé a vzdušné byty, každý s vlastní terasou pro chvíle relaxace, prostorným sklepem a pohodlným parkováním. Pivovarské Terasy jsou ideálním místem pro ty, kteří hledají komfortní bydlení v srdci Jižních Čech s výbornou dostupností do centra Protivína i na hlavní dopravní tahy směr Písek a České Budějovice.",
    status: "v přípravě", 
    location: "Protivín",
    area: 3000,
    startDate: "2025",
    endDate: "2027",
    features: [
      "Moderní architektura s historií", 
      "Světlé a vzdušné byty", 
      "Soukromé terasy s výhledy", 
      "Kompletní zázemí (sklep, parking)", 
      "Strategická poloha v centru", 
      "Klidné prostředí, dobrá dostupnost", 
      "Atraktivní lokalita v Jižních Čechách"
    ],
    gallery: ["protivin_1.jpg", "protivin_2.jpg", "protivin_3.jpg", "protivin_4.jpg"]
  },
  { 
    id: 3, 
    title: "Rezidence Starý Mlýn Vodňany", 
    shortDescription: "Exkluzivní bydlení v srdci Jižních Čech. Bydlení v historickém mlýně s prvky moderní architektury a designu.",
    longDescription: "Připravujeme pro vás Rezidenci Starý Mlýn Vodňany – výjimečný projekt, který propojí historii s moderním bydlením. V srdci malebných Vodňan, v historické budově mlýna z 15. století,  vznikají exkluzivní byty s jedinečnou atmosférou. Představte si bydlení, kde se probouzíte s výhledem na klidnou hladinu řeky a historické centrum města. Kde si užíváte klid a pohodu s šuměním vody pod okny a zároveň veškeré výhody centra s plnou občanskou vybaveností. Rezidence Starý Mlýn Vodňany – místo, kde se tradice setkává s moderním stylem života. ",
    status: "v přípravě", 
    location: "Praha 1",
    area: 15000,
    startDate: "2021",
    endDate: "2023",
    features: [
      "Historická budova s moderní rekonstrukcí",
      "Exkluzivní byty s prostornými dispozicemi",
      "Nádherné výhledy na řeku a město",
      "Klidné prostředí v centru Vodňan",
      "Výborná dostupnost do Českých Budějovic a Písku",
      "Atraktivní investice s potenciálem zhodnocení"
    ],
    gallery: ["vodnany_1.jpg", "vodnany_2.jpg", "vodnany_3.jpg", "vodnany_4.jpg"]
  },
  { 
    id: 4, 
    title: "Panorama Chlum II.", 
    shortDescription: "Exkluzivní bytový dům s wellness centrem a bistrem využívá jedinečný potenciál mírně svažitého pozemku s dechberoucím výhledem na Šumavu",
    longDescription: "Druhá etapa projektu Panorama Chlum představuje bytový dům s exkluzivními byty 1+kk až 3+kk.  Nabízí  nejen komfortní a moderní bydlení, ale i dechberoucí panoramatické výhledy na Šumavu. K dispozici je menší wellness centrum se saunami a vířivkou, včetně venkovních saun pro dokonalý relax. Přízemí domu oživí restaurace nebo bistro a vlastní recepce zajistí komfortní servis pro rezidenty.  Vše je zasazeno do klidného prostředí s důrazem na soukromí a harmonii s okolní přírodou.",
    status: "v přípravě", 
    location: "Šumava",
    area: 2500,
    startDate: "2025",
    endDate: "2027",
    features: [
      "Exkluzivní byty 1+kk až 3+kk",
      "Panoramatické výhledy na Šumavu",
      "Wellness centrum se saunami a vířivkou",
      "Venkovní sauny",
      "Restaurace/bistro v přízemí",
      "Vlastní recepce",
      "Klidné prostředí a soukromí"
    ],
    gallery: ["panorma.bd_1.jpg", "panorma.bd_2.jpg", "panorma.bd_3.jpg", "panorma.bd_4.jpg"]
  },
  { 
    id: 5, 
    title: "Nový Projekt", 
    description: "Popis nového projektu", 
    status: "v přípravě", 
    imageUrl: "/images/novy-projekt.jpg" 
  },
  { 
    id: 6, 
    title: "Nový Projekt", 
    description: "Popis nového projektu", 
    status: "v přípravě", 
    imageUrl: "/images/novy-projekt.jpg" 
  },
];

const useScrollEffect = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

function App() {
  useScrollEffect();

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <FloatingHeader />
        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<Home projects={projectsData.slice(0, 3)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects projects={projectsData} />} />
            <Route path="/project/:id" element={<ProjectDetail projects={projectsData} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
