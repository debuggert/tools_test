import { ThemeProvider } from 'styled-components'
import { baseTheme } from '../../styles/theme'
import GlobalStyles from '../../styles/global'


import Header from '../header/Header';
import Footer from '../footer/Footer';
import Slider from '../sliderMain/SliderMain';
import SliderCategory from '../sliderCategory/SliderCategory';
 
function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <div className="App">
        <Header/>
        
        <main>

          
          <Slider/>  

          <SliderCategory/>
          
          

        </main>

        
        <Footer/>
      </div>

      <GlobalStyles/>
    </ThemeProvider>
  );
}

export default App;