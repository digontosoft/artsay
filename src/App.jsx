import Banner from "./components/Banner";
import bannerImg from "../src/assets/Background.png";
import bannerLogo from "../src/assets/BACKGROUNDLOGO.png";
import hornImage from "../src/assets/HORN.png";
import footerImg from "../src/assets/LOGO ARTSAY FOOTER.png";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-container bg-black md:py-20 py-0 flex flex-col justify-between overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${bannerLogo})`,
          backgroundSize: "contain",
          backgroundPosition: "start",
          backgroundRepeat: "no-repeat",
        }}
        className="logo-container"
      >
        <div
          style={{
            backgroundImage: `url(${hornImage})`,
            backgroundSize: "contain",
            backgroundPosition: "start",
            backgroundRepeat: "no-repeat",
          }}
          className="horn-container flex flex-col justify-between px-2 lg:px-20 py-10 md:py-0"
        >
          <Header />
          <Banner />
          <Footer />
        </div>
      </div>
      <div className="flex justify-center items-center bottom-0 pt-10">
        <img className="h-8 w-20 " src={footerImg} alt="" />
      </div>
    </div>
  );
}

export default App;
