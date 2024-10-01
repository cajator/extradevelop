import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero sekce */}
      <div className="relative h-96 bg-cover bg-center" style={{backgroundImage: "url('/images/projekt1.jpg')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">O EXTRA DEVELOP holding</h1>
        </div>
      </div>

      {/* Hlavní obsah */}  
      <div className="container mx-auto px-4 py-16">
        {/* O nás sekce */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Více než jen development</h2>
          <p className="text-lg mb-4">
            V <strong>EXTRA DEVELOP</strong> stavíme na rodinných tradicích a dlouholetých zkušenostech v oblasti developmentu. Spojujeme zkušenosti z pozemního stavitelství, realitních služeb a financování, abychom vám zajistili nadstandardní a prověřený servis.
          </p>
          <p className="text-lg mb-4">
            Naše developerské projekty najdete v atraktivních lokalitách s vysokým potenciálem růstu. Investujte s námi do budoucnosti a zhodnoťte své finance.
          </p>
          <p className="text-lg mb-4">
            Naším cílem je vytvářet funkční a promyšlené stavby, které zapadnou do okolního prostředí. V rámci rodinného holdingu se staráme o kompletní realizaci developmentu – od investic a výstavby až po prodej a financování.
          </p>
          <p className="text-lg">
            Díky širokým znalostem v oboru se dokážeme plně zaměřit na vaše potřeby. Neustále se vzděláváme a zdokonalujeme, abychom vám poskytli ty nejlepší služby. Naším cílem je vytvářet kvalitní a příjemné prostředí pro život i práci.
          </p>
        </div>

        {/* Standardy a hodnoty */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Světové standardy kvality</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Systém managementu jakosti (ČSN EN ISO 9001:2001)</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Certifikovaný makléř (ČSN EN ISO/IEC 17024)</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Licence pro finanční servis udělená ČNB</span>
              </li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Naše hodnoty</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span>Inovace v designu a technologiích</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span>Udržitelnost a ohled na životní prostředí</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span>Kvalita a spokojenost zákazníků</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span>Transparentnost a etické jednání</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Naše vize */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Naše vize</h2>
          <p className="text-lg mb-4">
            V <strong>EXTRA DEVELOP</strong> budujeme více než jen domy. Stavíme na pevných základech rodinných tradic a s vášní vytváříme moderní a funkční prostory pro život i práci.
          </p>
          <p className="text-lg">
            Naším cílem je poskytovat komplexní služby s důrazem na kvalitu a individuální přístup ke každému klientovi. Chceme být vaším partnerem na cestě k vysněnému domovu a budovat dlouhodobé vztahy založené na důvěře a spokojenosti.
          </p>
        </div>

        {/* Galerie realizací */}
        <h2 className="text-3xl font-bold mb-8 text-center">Naše realizace</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img src={`/images/realizace-${index}.jpg`} alt={`Realizace ${index}`} className="w-full h-64 object-cover transition duration-300 ease-in-out transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                <span className="text-white text-lg font-bold">Projekt {index}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;