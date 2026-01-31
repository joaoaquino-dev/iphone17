function Intro() {
  const specs = [
    {
      value: '6.3"',
      label: "Display Super Retina XDR",
      color: "text-slate-100",
    },
    {
      value: "A18 Pro",
      label: "Chip mais rápido",
      color: "text-slate-100",
    },
    {
      value: "48MP",
      label: "Sistema de câmera",
      color: "text-slate-100",
    },
    {
      value: "29h",
      label: "Bateria para o dia todo",
      color: "text-blue-400", // único destaque
    },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">iPhone 17 Pro</h1>
        <p
          className="text-2xl md:text-4xl mb-4 font-bold bg-linear-to-r 
        from-zinc-400 via-slate-200 to-zinc-500 
          bg-clip-text text-transparent "
        >
          Titânio. Tão forte. Tão leve. Tão pro.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          O design mais refinado que já criamos. Titânio de grau aeroespacial.
          Chip A18 Pro.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 cursor-pointer">
          Comprar agora
        </button>
        <button className="border-2 border-white rounded-full hover:bg-white hover:text-black px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer">
          Saiba mais
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-5xl">
        {specs.map((spec, index) => (
          <div
            key={index}
            className=" bg-gray-800
            rounded-2xl
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:bg-gray-700
            hover:-translate-y-1
            hover:shadow-md"
          >
            <p className={`text-3xl font-bold ${spec.color}`}>{spec.value}</p>
            <p>{spec.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Intro;
