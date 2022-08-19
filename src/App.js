import { Download, Features, SectionWrapper } from './components';
import assets from './assets'

function App() {
  return (
    <>
      <SectionWrapper
        title="You own store of nifty NFTs. Star Selling & Growing"
        description="Buy, store, collect NFTs exchange & earn crypto. Join 25+ million people using ProfNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner={"banner"}
      />
      <SectionWrapper
        title="Smart User Interface  Marketplace."
        description="Experience a buttery UI of ProfNef NFTs Marketplace. Smoot constant color of a fluent UI desing."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
    </>
  );
}

export default App;
