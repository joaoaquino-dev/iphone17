import { useState } from "react";

function Colors() {
  const colors = [
    {
      id: "blue",
      name: "Titânio Azul",
      image: "/img/iphone-blue.jpg",
      colorClass: "bg-blue-600",
    },
    {
      id: "silver",
      name: "Titânio Natural",
      image: "/img/iphone-silver.jpg",
      colorClass: "bg-[#8e8e8a]",
    },
    {
      id: "orange",
      name: "Titânio Laranja",
      image: "/img/iphone-orange.jpg",
      colorClass: "bg-orange-500",
    },
  ];

  const models = [
    {
      name: "Pro Max",
      screen: "6.9 polegadas",
      storage: "256GB, 512GB, ou 1TB",
      battery: "33h de vídeo",
      weight: "221g",
    },
    {
      name: "Pro",
      screen: "6.3 polegadas",
      storage: "128GB, 256GB ou 512GB",
      battery: "29h de vídeo",
      weight: "199g",
    },
  ];

  const [selectedColor, setSelectedColor] = useState("blue");

  const currentColor = colors.find((c) => c.id === selectedColor);

  return (
    <section
      id="colors"
      className="bg-black py-20 px-8 text-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Escolha sua cor
          </h2>
          <p className="text-xl text-gray-400">
            3 acabamentos em titânio lindos
          </p>
        </div>

        {/* Display do iPhone */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-3xl">
            <div className="relative flex items-center justify-center min-h-125">
              <img
                key={selectedColor}
                className="max-w-full max-h-150 mx-auto transition-all duration-500 animate-in fade-in zoom-in-95"
                src={currentColor.image}
                alt={currentColor.name}
              />
            </div>

            {/* Label da Cor */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <div className="px-8 py-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 inline-block transition-all duration-300">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {currentColor.name}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Seletores de Cor */}
        <div className="flex justify-center items-center gap-6">
          {colors.map((color) => {
            const isSelected = selectedColor === color.id;

            return (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color.id)}
                className={`
                  relative w-12 h-12 rounded-full transition-all duration-300 ease-out outline-none
                  /* O Anel de seleção */
                  ${
                    isSelected
                      ? "ring-2 ring-white ring-offset-4 ring-offset-black scale-110"
                      : "ring-0 scale-100 hover:scale-110 opacity-70 hover:opacity-100"
                  }
                `}
              >
                <div
                  className={`w-full h-full rounded-full shadow-inner border border-white/20 ${color.colorClass}`}
                />
              </button>
            );
          })}
        </div>

        <div className="grid gap-8 mt-20 grid-cols-2">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-800"
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
              <p className="text-gray-400 mb-4">{model.screen}</p>
              <ul className="space-y-2 text-gray-300">
                <li>{model.storage}</li>
                <li>{model.battery}</li>
                <li>{model.weight}</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 mb-8 hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer">
            Compre agora a partir de R$9.299,00
          </button>
          <p>Ou em até 12x de R$774,92 sem juros</p>
        </div>
      </div>
    </section>
  );
}

export default Colors;
