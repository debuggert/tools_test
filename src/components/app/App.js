import { ThemeProvider } from 'styled-components'
import { baseTheme } from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import H1 from '../../styles/H1/H1';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Slider from '../sliderMain/SliderMain';
import SliderCategory from '../sliderCategory/SliderCategory';
import BlockWithTextAndImg from '../blockWithTextAndImg/BlockWithTextAndImg';
import Container from '../../styles/Container/Container';
import BlockFastNavigation from '../blockFastNavigation/BlockFastNavigation';
 


function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <div className="App">
        <Header/>
        
        <main>

          <Container>
            <Slider/>  
          </Container>

          <Container>
            <SliderCategory/>
          </Container>

          <Container>
            <BlockWithTextAndImg/>
          </Container>

          <Container mrgt={105}>
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