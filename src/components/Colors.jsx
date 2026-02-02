import { useState } from "react";

function Colors() {
  const colors = [
    {
      id: "blue",
      name: "Titânio Azul",
      image: "/img/iphone-blue.jpg", // Certifique-se que o caminho está correto
      colorClass: "bg-blue-600",
    },
    {
      id: "silver",
      name: "Titânio Natural",
      image: "/img/iphone-silver.jpg",
      colorClass: "bg-[#8e8e8a]", // Cor mais próxima do titânio real
    },
    {
      id: "orange",
      name: "Titânio Laranja",
      image: "/img/iphone-orange.jpg",
      colorClass: "bg-orange-500",
    },
  ];

  const [selectedColor, setSelectedColor] = useState("blue");

  // Busca os dados da cor selecionada para evitar repetir código
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
                key={selectedColor} // O 'key' força o React a re-renderizar e disparar animações de entrada
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
      </div>
    </section>
  );
}

export default Colors;
