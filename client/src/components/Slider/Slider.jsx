import "./slider.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const photos = [
    "https://www.bellazon.com/main/uploads/monthly_2019_02/2051456272_graceelizabeth.jpg.ffb895336a20198e4b1ace3a00f34e57.jpg",
    "https://glamours.name/uploads/posts/2022-03/1647647586_1-glamours-name-p-ulichnii-stil-odezhdi-devushka-krasivo-fot-1.jpg",
    "http://storage.ning.com/topology/rest/1.0/file/get/89128835?profile=RESIZE_1024x1024",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="slider">
      <div className="wrapper" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={photos[0]} alt="" />
        <img src={photos[1]} alt="" />
        <img src={photos[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
