import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
  * {
    box-sizing:border-box;
    padding:0;
    margin:0;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size:10px;
    line-height:1em;
  }
  .App {
    overflow:hidden;
    width:100%;
  }
`