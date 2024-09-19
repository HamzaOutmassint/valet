import ac_hotels_img from "../assest/ac_hotels.svg"
import omni_img from "../assest/omni.svg"
import renaissance_img from "../assest/RENAISSANCE.svg"
import springhill_img from "../assest/springhill.svg"

const Partenaire = () => {
  return (
    <div className="px-[212.61px] py-[51px] bg-[#eae8e6]">
      <ul className="flex gap-[92px] w-full">
        <li>
            <img src={ac_hotels_img} alt="ac hotel" />
        </li>
        <li>
            <img src={omni_img} alt="omni hotel" />
        </li>
        <li>
            <img src={renaissance_img} alt="RENAISSANCE hotel" />
        </li>
        <li>
            <img src={springhill_img} alt="springhill hotel" />
        </li>
      </ul>
    </div>
  )
}

export default Partenaire
