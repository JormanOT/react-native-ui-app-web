import { Download, Features, SectionWrapper } from './components';
import assets from './assets'
import styles from './styles/Global';

function App() {
  return (
    <>
      <SectionWrapper
        title="Tu propia tienda de NFT's, para vender y crecer como estrella."
        description="Compre, almacene, recopile el intercambio de NFT y gane criptografía. Únase a más de 25 millones de personas que utilizan ProfNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner={"banner"}
      />
      <SectionWrapper
        title="Interfaz de usuario Inteligente"
        description="Experimente una interfaz de usuario limpia de ProfNef NFTs Marketplace. Color uniforme y suave de un diseño de interfaz de usuario fluido."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Despliegue"
        description="ProfNef se construye utilizando expo, que se ejecuta de forma nativa en los dispositivos de todos los usuarios. Puede poner fácilmente su aplicación en manos de las personas"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Manera creativa de exhibir la tienda."
        description="La aplicación contiene dos pantallas. La primera pantalla enumera todos los NFT, mientras que la segunda muestra los detalles de un NFT específico."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Hecho con dedicacion por {" "}
          <span className='bold'>Jorman Ortega</span>
        </p>
      </div>
    </>
  );
}

export default App;
