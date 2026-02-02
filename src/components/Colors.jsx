function Colors() {
  const colors = [
    {
      id: "blue",
      name: "Titânio Azul",
      image: "/img/iphone-blue.jpg",
      colorClass: "bg-blue-500",
    },
    {
      id: "silver",
      name: "Titânio Natural",
      image: "/img/iphone-silver.jpg",
      colorClass: "bg-gray-300",
    },
    {
      id: "orange",
      name: "Titânio Laranja",
      image: "/img/iphone-orange.jpg",
    },
  ];

  const models = [
    {
      name: "Pro Max",
      screen: "6.9 polegadas",
      storage: "256GB, 512GB ou 1TB",
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

  return (
    <section id="colors" className="bg-black py-20 px-8">
      <div></div>
    </section>
  );
}

export default Colors;
