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
    @media${({ theme }) => theme.media.extraLarge} {
        font-size:8px;
    }

    @media${({ theme }) => theme.media.large} {
      font-size:7px;
    }
    @media${({ theme }) => theme.media.small} {
        padding-bottom:42px;
    }
  }
  .App {
    overflow:hidden;
    width:100%;
  }
`