import * as React from 'react'
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { about, technologies } from './content';
import ContactApps from '../components/ContactApps'
import Section from '../components/Section'
import Article from '../components/Article'
import Figure from '../components/Figure'
import Aside from '../components/Aside'
import SpyGlass from '../icons/SpyGlass'
import GitAlt from '../icons/GitAlt'
import Navbar from './Navbar'


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
          <Section padding="2em 0">
            <Article padding="0.3em 1em">
              <h3 className="about__title">A little about me</h3>
              <p className="about__paragraph">{about}</p>
            </Article>
            <Aside imageSize="50%"  textPadding="0.3em 1em">
              <div className="nameless">
                <h3>Did you know?</h3>
                <p>
                  One of the most common examples of a methodology 
                  in programming is Object-Oriented Programming. 
                  It’s a programming paradigm embodied by many languages. 
                </p>
              </div>
              <img  src="./images/prettywoman.jpg" />
            </Aside>
          </Section>
          <article className="stack">
            <Logo>
              <h2 className="logo__title">gfouz</h2>
              <SpyGlass color="#777777" size="1.5em" />
            </Logo>
            <div className="stack__list">
              <h4 className="stack__title">Study Modern React</h4>
              <h4 className="stack__title">zustang</h4>
              <h4 className="stack__title">react-query</h4>
              <h4 className="stack__title">react-hook-form</h4>
            </div>
          </article>
          <Section padding="2em 0">
            <Article padding="0.1em 1em">
              <h3 className="technical__title">Technologies i use</h3>
              <p className="technical__paragraph">{technologies}</p>
            </Article>
            <Figure imagePercentage="80%" padding="1em">
              <img className="technical__image" src="./images/freelancer.jpg" />
            </Figure>
          </Section>
          <section className="contact"> 
                 <ContactApps />
          </section>
          <footer>
              <h2 className="footer__title">gfouz &copy; {new Date().getFullYear()}</h2>
              <img className="footer__image" src="./images/submarine.jpg" />  
          </footer>
        </StyledHome>
      </ThemeProvider>
    </>

  );
}
export default Homepage;

const StyledHome = styled.div`
  min-height: 100vh;
  footer {
   position: relative;
   width: 100%;
   text-align: right;
  }
  .footer__title {
    position: absolute;
    top: 65%;
    left: 5%;
    color: #0066ff;
    margin: 0;
    padding: 0 5px;
    @media (max-width: 570px) {
      color: #ffffff;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .footer__image {
    max-width: 100%;
    height: auto;
  }
  .about__title {
    margin: 0;
    color: #666666;
  }
  .about__paragraph {
    margin: 0;
    color: #555555;
  }
  .about__image {
    max-width: 70%;
    height: auto;
  }
  .about__image-title {
    margin: 1em;
    padding: 0 5px;
    border-radius: 5px;
    text-transform: uppercase;
    text-align: right;
    color: #0066ff;
  }
  .stack {
    ${({ theme }) => theme.centered()}
    position: relative;
    text-align: center;
    width: 100%;
    height: 400px;
    background-image: url('./images/training.jpg');
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
    background-color: #11abd690;
    box-shadow: 1px 1px 10px #11abd6;
  }
  .stack__title {
    ${({ theme }) => theme.reset()};
    color: ${({ theme }) => theme.white};
    text-shadow: 1px 1px 10px #000000;
    text-transform: uppercase;
  }
  .technical {
    padding: 3em 0;
    width: 100%;
    ${({ theme }) => theme.row('space-evenly', 'flex-start')};
    @media (max-width: 700px) {
      ${({ theme }) => theme.column("flex-start", "center")};
    }
  }
  .technical__title {
    margin: 0;
    color: #666666;
  }
  .technical__paragraph {
    margin: 0;
    color: #555555;
  }
`;


const Banner = styled.div`
   position: relative;
    width: 100%;
    text-align: left;
    background-color: #fefdf9;
    .main__image {
    max-width: 70%;
    height: auto;
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
