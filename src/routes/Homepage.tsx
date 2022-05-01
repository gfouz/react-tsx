import * as React from 'react'
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { about, technologies } from './content';
import ContactApps from '../components/ContactApps'
import Section from '../components/Section'
import Article from '../components/Article'
import Paragraph from '../components/Paragraph'
import Figure from '../components/Figure'
import Aside from '../components/Aside'
import SpyGlass from '../icons/SpyGlass'
import GitAlt from '../icons/GitAlt'
import Navbar from './Navbar'
import Footer from '../components/Footer'


const Homepage = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledHome>
          <Banner>
            <img className="main__image" src="./images/man.jpg" />
            <img className="banner__title" src="./images/port.png" />
            <Logo>
              <h2 className="logo__title">gfouz</h2>
              <SpyGlass color="#ffffff" size="1.5em" />
            </Logo>
          </Banner>
          <header>
            <Navbar />
          </header>
          <Section padding="3em 0">
            <Paragraph padding="0.5em" titleColor="#029c90">
              <h3>A little about me</h3>
              <p>{about}</p>
            </Paragraph>
            <Aside padding="0.5em" titleColor="#029c90">
              <div className="nameless">
                <h3>Did you know?</h3>
                <p>
                  React hydration is a technique used that is similar to rendering, 
                  but instead of having an empty DOM to render all of our react components into, 
                  we have a DOM that has already been built, with all our components rendered as HTML.
                </p>
              </div>
              <div>
                <img src= "./images/young.jpg" alt="woman" />
              </div>
            </Aside>
          </Section>
          <article className="stack">
            <Logo>
              <h2 className="logo__title">gfouz</h2>
              <SpyGlass color="#ffffff" size="1.5em" />
            </Logo>
            <div className="stack__list">
              <h4 className="stack__title">Modern React State</h4>
              <h4 className="stack__title">zustang</h4>
              <h4 className="stack__title">react-query</h4>
              <h4 className="stack__title">react-hook-form</h4>
            </div>
          </article>
          <Section padding="2em 0" bg="#181818">
            <Paragraph padding="0.1em 1em" textColor="#b2b2b2">
              <h3>I use these technologies</h3>
              <p>{technologies}</p>
            </Paragraph>
            <Figure imagePercentage="60%" padding="2em 1em">
              <img className="technical__image" src="./images/face.jpg" />
            </Figure>
          </Section>
          <section className="contact"> 
                 <ContactApps height="200px" svgColor="#555555"/>
          </section>
          <Footer 
            top="80%" 
            left="25%" 
            lighttext 
            textAlign="right" 
            boxBg="#224e7f"
            boxPadding="0.5em 2em"
            >
             <div>
                <h4 >gfouz &copy; {new Date().getFullYear()}</h4>
                <ContactApps size="20px"/>
                <p>gfouz1975@gmail.com</p>
             </div> 
             <img  src="./images/submarine.jpg" />  
          </Footer>
        </StyledHome>
      </ThemeProvider>
    </>

  );
}
export default Homepage;

const StyledHome = styled.div`
  min-height: 100vh;
  font-family: calibri;
  .stack {
    ${({ theme }) => theme.centered()}
    position: relative;
    text-align: center;
    width: 100%;
    height: 400px;
    background-image: url('./images/laptop.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .stack__image {
    max-width: 100%;
    height: auto;
  }
  .stack__list {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.5em;
    border-radius: 5px;
    background-color: #22222290;
    box-shadow: 1px 1px 10px #222222;
  }
  .stack__title {
    ${({ theme }) => theme.reset()};
    color: ${({ theme }) => theme.white};
    text-shadow: 1px 1px 10px #000000;
    text-transform: uppercase;
  }
  
`;
const Banner = styled.div`
   position: relative;
    width: 100%;
    text-align: left;
    background-color: #fefdf9;
    .main__image {
    max-width: 80%;
    object-fit: cover;
    height: auto;
    @media (min-width: 700px) {
    max-width: 30%;
    }
  }
  .banner__title {
    position: absolute;
    top:60%;
    left: 50%;
    max-width: 80%;
    height: auto;
    transform: translate(-50%, -50%);
  }
`;
const Logo = styled.div`
   position: absolute;
   text-align: center;
   top: 15px;
   left: 10px;
   .logo__title {
   color: #ffffff;
   text-shadow: 1px 1px 10px #000000;
   margin: 5px;
  }
  
`;
//https://github.com/gfouz/react-tsx.git
//You can also disable this overlay by setting server.hmr.overlay to false in vite.config.js.