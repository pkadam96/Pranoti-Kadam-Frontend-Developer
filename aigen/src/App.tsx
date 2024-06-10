import { Header } from "./components/Header"
import { IntroComponent } from "./components/IntroComponent"
import { HowItWorks } from './components/HowItWorks';
import { KeywordsCarousal } from "./components/KeywordsCarousal";
import { CardsComponent } from "./components/CardsComponent";
import { RoadMap } from "./components/RoadMap";
import { Tokenomics } from "./components/Tokenomics";

function App() {
  return (
    <>
      <Header/>
      <IntroComponent/>
      <HowItWorks/>
      <KeywordsCarousal/>
      <CardsComponent/>
      <Tokenomics/>
      <RoadMap/>
    </>
  )
}

export default App
