import { Header } from "./components/Header"
import { IntroComponent } from "./components/IntroComponent"
import { HowItWorks } from './components/HowItWorks';
import { KeywordsCarousal } from "./components/KeywordsCarousal";
import { CardsComponent } from "./components/CardsComponent";
import { RoadMap } from "./components/RoadMap";

function App() {
  return (
    <>
      <Header/>
      <IntroComponent/>
      <HowItWorks/>
      <KeywordsCarousal/>
      <CardsComponent/>
      <RoadMap/>
    </>
  )
}

export default App
