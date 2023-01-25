import AOS from 'aos';
import { ThemeProvider } from 'styled-components'
import { baseTheme } from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Slider from '../sliderMain/SliderMain';
import SliderCategory from '../sliderCategory/SliderCategory';
import BlockWithTextAndImg from '../blockWithTextAndImg/BlockWithTextAndImg';
import Container from '../../styles/Container/Container';
import BlockFastNavigation from '../blockFastNavigation/BlockFastNavigation';
import 'aos/dist/aos.css';


function App() {
  AOS.init();

  return (
    <ThemeProvider theme={baseTheme}>
      <div className="App">
        <Header/>
        
        <main>

          <Container>
            <Slider/>  
          </Container>

          <Container  data-aos="fade-up">
            <SliderCategory/>
          </Container>

          <Container data-aos="fade-up-right">
            <BlockWithTextAndImg/>
          </Container>

          <Container mrgt={105}  data-aos="flip-up">
            <BlockFastNavigation/>
          </Container>
        </main>

        
        <Footer/>
      </div>

      <GlobalStyles/>
    </ThemeProvider>
  );
}

export default App;