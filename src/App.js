import logo from './logo.svg';
import './App.css';
import MainHeader from './Commponents/MainHeader';
import MainSlider from './Commponents/MainSlider';
import NhnSection from './Commponents/NhnSection';
import InsideSection from './Commponents/InsideSection';
import AudioSection from './Commponents/AudioSection';
import Footer from './Commponents/Footer';
import SlideSection from './Commponents/SlideSection';


function App() {
  return (
    <div className="App">
      <MainHeader />
      <MainSlider />
      <NhnSection />
      <SlideSection />
      <AudioSection />
      <InsideSection />
      <Footer />
    </div>
  )
}

export default App;
