import valetMan from "../assest/Valet men with motif - About us.svg";
import valetLogo from "../assest/valet_logo.svg";
import { ChevronRight } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-2 items-center py-[48px] ">
      <img src={valetMan} alt="valet man" />
      <div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-4 items-center">
            <img src={valetLogo} alt="valet logo" />
            <h2 className="text-[32px] font-semibold text-main leading-[39.01px]">À Propos de Nous</h2>
          </div>
          <h1 className="leading-[58.51px] font-bold text-[48px] text-secondary">
            Découvrez Valet<span className="text-main">.ma</span>
          </h1>
        </div>
        <p className="text-[#868686] mt-[20px] mb-[22px]">
          Chez Valet.ma, nous nous engageons à offrir une expérience de
          voiturier de luxe inégalée. Notre équipe de professionnels est dédiée
          à offrir un service impeccable, alliant élégance et efficacité pour
          chaque occasion, qu'il s'agisse d'événements prestigieux, de
          restaurants étoilés, ou d'hôtels de luxe. Nous garantissons la
          sécurité et le confort de vos invités avec un service ponctuel et
          personnalisé, tout en assurant une présentation irréprochable et une
          gestion professionnelle de tout litige.
        </p>
        <button className="flex justify-between items-center py-[10px] px-[20px] bg-[#C49A6C14] rounded-lg text-[#726658]">
            <span>Voir Plus</span>
            <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
