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
      <div className="px-2 lg:px-20 pt-10 md:pt-0">
        <Header />
      </div>
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
          className="horn-container flex flex-col justify-between items-center px-2 lg:px-20 py-10 md:py-0 hidden md:block"
        >
          <div className="flex flex justify-start items-center md:pt-28 pt-0">
            <Banner />
          </div>
        </div>
        {/* this is for mobaile device */}
        <div className="relative h-screen flex justify-center items-center block md:hidden">
          {/* Horn Image (Background) */}
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              className="w-full h-full object-cover"
              src={hornImage}
              alt="Horn Image"
            />
          </div>

          {/* Content (Text and Footer) */}
          <div className="relative z-10 bottom-28">
            <Banner />
          </div>
        </div>
      </div>
      <div className=" hidden md:block ">
        <div className=" flex justify-start px-2 md:block  bottom-10">
          {" "}
          <Footer />
        </div>
        <div className="flex justify-center items-center bottom-2 md:pt-10 pt-0">
          <img className="h-8 w-20 " src={footerImg} alt="" />
        </div>
      </div>
      {/* for mobaile */}
      <div className=" relative  block md:hidden">
        <div className=" flex justify-start px-2 md:block  absolute -top-20 left-6">
          {" "}
          <Footer />
        </div>
        <div className="flex justify-center items-center bottom-2 md:pt-10 pt-0 absolute -top-6 left-40 ">
          <img className="h-8 w-20 " src={footerImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
