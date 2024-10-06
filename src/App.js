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
    location: "Vodňany",
    area: 2500,
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
    area: 3000,
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
    title: "Rezidenční Vila Mladá Boleslav", 
    shortDescription: "Čtyřpodlažní vila z dvacátých let minulého století, navržená architektem Josefem Repšem, nabízí po kompletní rekonstrukci 8 moderních bytových jednotek",
    longDescription: "Rezidenční Vila Repšova je samostatně stojící čtyřpodlažní vila z poloviny dvacátých let, z dílny známého mladoboleslavského architekta Josefa Repše. Po pečlivé a kompletní rekonstrukci nabízí 8 moderních bytových jednotek o dispozici 2+kk, ideálních pro mladé rodiny, startovací bydlení nebo jako výhodná investice do budoucna. Projekt se nachází v klidné vilové čtvrti na rozhraní ulic Nerudova a Čechova, v širším centru Mladé Boleslavi, s kompletní občanskou vybaveností. V pěší dostupnosti od domu najdete nákupní centrum Bondy, Klaudiánovu nemocnici, autobusové nádraží a hlavní výrobní závody Škoda Auto, což činí tuto lokalitu ideální pro komfortní bydlení nebo investici.",
    status: "dokončeno", 
    location: "Mladá Boleslav",
    area: 600,
    startDate: "2016",
    endDate: "2017",
    features: [
      "Byty 2+kk, ideální pro startovací bydlení",
      "Kompletní rekonstrukce historické vily z 20. let",
      "Vlastní zahrada a garáže",
      "Klidná vilová čtvrť blízko centra",
      "5 minut pěšky od Škoda Auto a obchodního centra Bondy",
      "Výhodná investice díky strategické lokalitě",
      "Moderní, světlé interiéry",
    ],
    gallery: ["boleslav_1.jpg", "boleslav_2.jpg", "boleslav_3.jpg", "boleslav_4.jpg"] 
  },
  { 
    id: 6, 
    title: "Apartmánové Domy Šumava", 
    shortDescription: "Apartmánový komplex na ideální poloze mezi Volary a Horní Planou s úchvatnými výhledy na šumavskou přírodu.",
    longDescription: "Apartmánové Domy Šumava představují unikátní ubytovací komplex, který spojuje moderní design s respektem k historické architektuře Šumavy. Komplex se skládá ze tří ubytovacích objektů propojených lehkou, levitující střechou s popínavými rostlinami, které dotvářejí harmonický vzhled celého areálu. Centrální recepce slouží jako místo pro uvítání hostů a rozdělení do jednotlivých objektů. Apartmány jsou ideálně umístěny na spojnici mezi Volary a Horní Planou, s výhledy na šumavskou krajinu, v těsné blízkosti cyklostezek vedoucích k Lipenské přehradě a do národního parku Šumava. Tento projekt kombinuje moderní detaily s přírodními prvky, což z něj činí ideální volbu pro milovníky klidného ubytování v přírodě.",
    status: "v přípravě", 
    location: "Šumava",
    area: 2000,
    startDate: "2026",
    endDate: "2028",
    features: [
      "Moderní apartmány s výhledy na šumavskou přírodu",
      "Levitující střecha s popínavými rostlinami",
      "Recepce jako centrální objekt",
      "Propojení tří ubytovacích budov",
      "Ideální poloha mezi Volary a Horní Planou",
      "V blízkosti cyklostezek a Lipenské přehrady",
      "Respekt k historické architektuře s moderním zpracováním",
    ],
    gallery: ["zelanava_1.jpg", "zelanava_2.jpg", "zelanava_3.jpg", "zelanava_4.jpg"] 
  },
  { 
    id: 7, 
    title: "Rezidenční Bydlení v Písku", 
    shortDescription: "Renovovaný cihlový dům z počátku 20. století nabízí byty o dispozicích 2+kk až 3+1 s vysokým nadstandardem. Nachází se v klidné části města Písek s výbornou občanskou vybaveností",
    longDescription: "Projekt Bydlení v Písku představuje kompletně renovovaný cihlový dům, který svým obyvatelům nabízí příjemné bydlení ve vysokém nadstandardu. Dům pochází z počátku 20. století a díky renovaci se mu vrátily jeho typické rysy, včetně vysokých stropů, dřevěných oken a věžičky inspirované původním projektem z roku 1902. Byty o dispozicích 2+kk až 3+1 (37m² - 90m²) jsou navrženy s důrazem na kvalitu a moderní trendy. Objekt je tepelně izolován, což zajišťuje nižší náklady na bydlení. Strategická poloha města Písek, ležící mezi Příbramí, Táborem, Strakonicemi a Českými Budějovicemi, spolu s výbornou občanskou vybaveností a blízkostí nové rychlostní komunikace do Prahy, činí z tohoto projektu výhodnou investici s potenciálem zhodnocení.",
    status: "dokončeno", 
    location: "Šumava",
    area: 2000,
    startDate: "2015",
    endDate: "2016",
    features: [
      "Dispozice 2+kk až 3+1 (37 m² - 90 m²)",
      "Vysoké stropy a dřevěná okna",
      "Kompletní renovace dle původního projektu z roku 1902",
      "Tepelná izolace a nízké náklady na vytápění",
      "Věžička inspirovaná původním návrhem",
      "Výborná občanská vybavenost",
      "Strategická poloha města Písek s investičním potenciálem",
    ],
    gallery: ["pisek_1.jpg", "pisek_2.jpg", "pisek_3.jpg", "pisek_4.jpg"] 
  },
  { 
    id: 8, 
    title: "Polyfunkční dům Praha", 
    shortDescription: "Moderní polyfunkční dům v Praze 4 – Michle nabízí luxusní byty s terasami do klidného vnitrobloku, zubní ordinace a kancelářské prostory.",
    longDescription: "Polyfunkční dům v Praze 4 – Michle přináší spojení luxusního bydlení, kancelářských prostor a zubních ordinací v jednom komplexu. Většina bytů disponuje terasami směřujícími do klidného vnitrobloku, které zajišťují soukromí a komfort. Moderní technologie, jako je rekuperace vzduchu, izolační trojskla a chytrá domácnost, umožňují pohodlné ovládání všech aspektů bytu, čímž vytváří ideální prostředí pro náročné klienty. Svou polohou v žádané lokalitě Praha 4 – Michle, kde je snadná dostupnost do centra i do klidných rezidenčních částí, tento projekt představuje atraktivní investiční příležitost. Díky propojení luxusních bytů, moderních kancelářských prostor a zubních ordinací je vhodný jak pro bydlení, tak pro podnikání.",
    status: "dokončeno", 
    location: "Praha 4",
    area: 2000,
    startDate: "2018",
    endDate: "2020",
    features: [
      "Luxusní byty s terasami do klidného vnitrobloku",
      "Zubní ordinace a kancelářské prostory",
      "Rekuperace vzduchu pro vyšší komfort",
      "Instalace chytré domácnosti",
      "Výhodná investiční příležitost",
      "Strategická poloha v Praze 4 – Michle",
    ],
    gallery: ["michle_1.jpg", "michle_2.jpg", "michle_3.jpg", "michle_4.jpg"] 
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
