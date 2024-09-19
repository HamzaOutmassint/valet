import hero_img from "../assest/hero_img.svg";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 justify-between gap-[76.68px] pt-[60px] pb-[51px] px-[49.28px]" id="hero_section">
      <div className="basis-1/2"> 
        <span className="text-secondary">Service de voiturier de luxe depuis <span className="text-main">2024</span></span>
        <h1 className="my-[25px] text-[40px] lg:text-[60px] leading-[72px] font-bold text-secondary">
          Transformez chaque <span className="text-main">arrivée</span> en moment d'<span className="text-main">exception</span>
        </h1>
        <p className="mb-[22px] text-[#726658]">
          Offrez à vos invités une expérience d'exception grâce à nos services
          de voiturier de luxe. Que ce soit pour un événement prestigieux, un
          restaurant étoilé, un hôtel 5 étoiles ou une entreprise de renom, nous
          assurons un service de qualité supérieure avec une élégance et un
          professionnalisme incomparable.
        </p>
        <button className="bg-main text-white py-[10px] px-[20px] rounded-3xl hover:bg-secondary">Réservez Maintenant</button>
      </div>
      <img src={hero_img} alt="valet person" className="basis-1/2 z-0 place-self-center justify-self-start" /> 
    </div>
  );
};

export default Hero;