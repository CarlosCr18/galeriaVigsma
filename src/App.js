import Carousel from "react-gallery-carousel";
import "./App.css";
import "react-gallery-carousel/dist/index.css";

function App() {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images;
  }
  const bovedillas = importAll(
    require.context("./bovedillas", false, /\.(png|jpe?g|svg|webp)$/)
  );

  let bovedillasSrcValue = [];
  Object.values(bovedillas).forEach((item, index) => {
    bovedillasSrcValue.push({
      src: item,
    });
  });
  const obras = importAll(
    require.context("./obras", false, /\.(png|jpe?g|svg)$/)
  );

  let obrasSrcValue = [];
  Object.values(obras).forEach((item, index) => {
    obrasSrcValue.push({
      src: item,
      sizes: `100px`,
    });
  });
  const viguetas = importAll(
    require.context("./viguetas", false, /\.(png|jpe?g|svg)$/)
  );

  let viguetasSrcValue = [];
  Object.values(viguetas).forEach((item, index) => {
    viguetasSrcValue.push({
      src: item,
      sizes: `100px`,
    });
  });

  return (
    <>
      <h1 className="titulo">Galeria vigsma</h1>
      <div className="App">
        <div className="contenedorCarousel offsetIzquierdo">
          <h2 className="tituloDeCarousel ">Obras</h2>
          <Carousel
            images={obrasSrcValue}
            isMaximized={true}
            isAutoPlaying={true}
            autoPlayInterval={3500}
            transitionDurationLimit={1000}
            canAutoPlay={true}
          />
        </div>
        <div className="contenedorCarousel">
          <h2 className="tituloDeCarousel">Bovedillas</h2>
          <Carousel
            images={bovedillasSrcValue}
            isAutoPlaying={false}
            transitionDurationLimit={1000}
            canAutoPlay={false}
          />
        </div>
        <div className="contenedorCarousel offsetDerecho">
          <h2 className="tituloDeCarousel">Viguetas</h2>
          <Carousel
            images={viguetasSrcValue}
            transitionDurationLimit={1000}
            isAutoPlaying={false}
            canAutoPlay={false}
          />
        </div>
      </div>
    </>
  );
}

export default App;
