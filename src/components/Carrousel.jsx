import Carousel from "react-bootstrap/Carousel";
import anuncioNike from "../assets/anuncioNike.jpeg";
import anuncioAdidas from "../assets/anuncioAdidas.jpg";
import anuncioOtro from "../assets/anuncioOtro.jpeg";

export const Carrousel = () => {
  return (
    <div className="papaCarrusel">
      <Carousel className="carrusel">
        <Carousel.Item interval={750}>
          <img
            src={anuncioAdidas}
            text="First slide"
            width={1200}
            height={600}
          />
        </Carousel.Item>
        <Carousel.Item interval={750}>
          <img
            src={anuncioOtro}
            text="Second slide"
            width={1200}
            height={600}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src={anuncioNike} text="Third slide" width={1200} height={600} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
