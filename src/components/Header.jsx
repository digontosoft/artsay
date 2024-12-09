import Artsaylogo from "../../src/assets/LOGO ARTSAY.png";
const Header = () => {
  return (
    <div className="flex justify-start items-start px-10 pb-10">
      <img className="w-10 md:w-20 h-10 md:h-16 " src={Artsaylogo} alt="" />
    </div>
  );
};
export default Header;
