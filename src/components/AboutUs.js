const AboutUs = () => {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">O nás</h2>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <img src="/images/team.jpg" alt="Náš tým" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 md:pl-10">
              <p className="text-lg mb-6">
              V EXTRA DEVELOP stavíme na rodinných tradicích a dlouholetých zkušenostech v oblasti developmentu. 
              Naším cílem je vytvářet moderní a funkční prostory pro život i práci s důrazem na kvalitu a individuální přístup.
              </p>
              <p className="text-lg mb-6">
                Naše zkušenosti sahají od luxusních rezidenčních komplexů až po moderní 
                kancelářské prostory. Každý projekt je pro nás příležitostí vytvořit 
                něco výjimečného.
              </p>
              <a href="/about" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                Zjistit více
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };