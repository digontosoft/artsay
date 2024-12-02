import Artsaylogo from "../../src/assets/LOGO ARTSAY.png";
const Header = () => {
  return (
    <div className="flex justify-start items-start">
      <img className="w-10 md:w-24 h-10 md:h-20 " src={Artsaylogo} alt="" />
    </div>
  );
};
export default Header;
