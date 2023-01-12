import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";
import background from "../assets/background.jpg";

export const GlobalStyle = createGlobalStyle`
 ${Reset};
:root {
    --white: #FFFFFF;
    --gray-1: #F7F7F7;
    --gray-2: #888888;
    --gray-3: #6B6B6B;
    --gray-4:#656565;
    --gray-5:#444444;
    --gray-trans: rgba(330, 330, 330, 0.25);
    --color-blue: #0083D1;
    --black:#000;
    --color-error: #E60000; 
    --color-success: #168821;
    --color-warning: #FFCD07;

    --font-family-1: 'Inter', sans-serif;
    --font-family-2: 'Roboto', sans-serif;
    --font-family-3: 'Dhurjati', sans-serif;

    --title-header:70px;
    --title-header-mobile:50px;
    --title-1: 40px;
    --title-2: 30px;
    --name-states: 12px;
    --label:14px;
    --font-button:20px;

    --radius-1:2px;
    --radius-2:5px;
    --radius-3: 30px;

    --margin-top-H2:3ch;
    --margin-bottom-h2: 28px;
  }

  ::-webkit-scrollbar {
      width: 10px;
  } 

  ::-webkit-scrollbar-thumb {   
      border-radius: 40px;
      
  }

  ::-webkit-scrollbar-thumb:hover { 
      background-color: var(--gray-5);   
  }

  ::-webkit-scrollbar-thumb:not(:hover) {   
      background-color: var(--gray-4);   
  }

  ::-webkit-scrollbar-thumb:window-inactive {
      background-color: #0083d1;
  }

  body {
      background-image: url(${background});
      background-size: 5000px;
      background-repeat: no-repeat;
      background-attachment: fixed;
  }
`;
