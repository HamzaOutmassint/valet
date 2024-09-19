import { Link } from "react-router-dom";
import logo from "../../assest/logo.svg";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-4 px-[49.28px]">
      <div className="py-[10px]">
        <img src={logo} alt="valet logo" className="w-[143px]"/>
      </div>
      <ul className="flex gap-[45px] font-medium text-base text-[#84796D]">
        <li>
          <Link to="/" className="hover:text-main">Acceuil </Link>
        </li>
        <li className="relative group">
          <div className="flex gap-1 cursor-pointer hover:text-main">
            <span>Services</span>
            <ChevronDown size={24} strokeWidth={1.25} />
          </div>

          {/* Dropdown Menu */}
          <div className="absolute z-50 bg-white shadow-md shadow-[#0000001A] gap-4 flex flex-col w-[258px] px-[10px] py-[20px] rounded-2xl invisible group-hover:visible">
            <Link className="hover:bg-[#72665814] hover:text-main rounded-md pl-[20px] pr-2 py-1 flex gap-1 justify-between items-center group/item">
              <span>Événements Prestigieux</span>
              <ChevronDown
                size={24}
                strokeWidth={1.25}
                style={{ rotate: "-90deg" }}
                className="invisible group-hover/item:visible"
              />
            </Link>

            <Link className="hover:bg-[#72665814] hover:text-main rounded-md pl-[20px] pr-2 py-1 flex gap-1 justify-between items-center group/item">
              <span>Restaurants Gastronomiques et Bars Exclusifs</span>
              <ChevronDown
                size={45}
                strokeWidth={1.25}
                style={{ rotate: "-90deg" }}
                className="invisible group-hover/item:visible"
              />
            </Link>

            <Link className="hover:bg-[#72665814] hover:text-main rounded-md pl-[20px] pr-2 py-1 flex gap-1 justify-between items-center group/item">
              <span>Hôtels et Résidences de Prestige</span>
              <ChevronDown
                size={35}
                strokeWidth={1.25}
                style={{ rotate: "-90deg" }}
                className="invisible group-hover/item:visible"
              />
            </Link>

            <Link className="hover:bg-[#72665814] hover:text-main rounded-md pl-[20px] pr-2 py-1 flex gap-1 justify-between items-center group/item">
              <span>Entreprises de Haut Standing</span>
              <ChevronDown
                size={32}
                strokeWidth={1.25}
                style={{ rotate: "-90deg" }}
                className="invisible group-hover/item:visible"
              />
            </Link>
          </div>
        </li>

        <li>
          <Link to="/" className="hover:text-main">À Propos </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-main">Engagements </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-main">FAQ </Link>
        </li>
        <li>
          <Link to="/" className="bg-main text-white py-[10px] px-[20px] rounded-3xl hover:bg-secondary">Contactez Nous  </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
