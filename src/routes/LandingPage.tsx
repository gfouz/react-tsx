import * as React from 'react'
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { about } from './content';
import SpyGlass from '../icons/SpyGlass'
import Navbar from './Navbar'


const LandingPage = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledHome>
          <main className="main">
            <img className="main__image" src="./images/coder.jpg" />
            <div className="logo">
              <h2 className="logo__title">gfouz</h2>
              <SpyGlass color="#ffffff" size="1.5em" />
            </div>
          </main>
          <header>
            <Navbar />
          </header>
          <section className="technology">
            <article className="technology__about">
              <h3 className="technology__title">A little about me</h3>
              <p className="technology__paragraph">{about}</p>
            </article>
            <article className="technology__image-container">
              <img className="technology__image" src="./images/pallete.jpg" />
            </article>
          </section>
          
        </StyledHome>
      </ThemeProvider>
    </>

  );
}
export default LandingPage;

const StyledHome = styled.div`
  height: 100vh;
  .main {
    position: relative;
  	width: 100%;
    text-align: center;
    padding: 2.5em 0 0 0;
    background-color: #613ba2;
  }
  .main__image {
    max-width: 100%;
    height: auto;
  }
  .logo {
     position: absolute;
     top: 15px;
     left: 10px;
  }
  .logo__title {
    color: #ffffff;
    margin: 5px;
  }
  .technology {
    width: 100%;
    padding: 2em 0;
    ${({ theme }) => theme.row('space-evenly', 'flex-start')};
    @media (max-width: 700px) {
      ${({ theme }) => theme.column("flex-start", "center")};
    }
  }
  .technology__title {
    margin: 0;
    color: #666666;
  }
  .technology__paragraph {
    margin: 0;
    color: #555555;
  }
  .technology__about {
     margin: 1em 0;
     padding: 0.5em;
     ${({ theme }) => theme.article()};    
     @media (max-width: 700px) {
     ${({ theme }) => theme.article("600px")};  
     }
  }
  .technology__image-container {
    margin: 1em 0;
    ${({ theme }) => theme.article()};
    @media (max-width: 700px) {
    ${({ theme }) => theme.article("600px")};  
    }
  }
  .technology__image {
    max-width: 80%;
    height: auto;
  }
`;
