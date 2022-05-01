import * as React from 'react';
import styled from 'styled-components'
import { about, technologies } from './content';



function Contact() {
  return (
    <>
      <StyledContact>
       <img src="./images/face2.jpg"  alt="face" />
       <a href="/"><h1>Home</h1></a>
      </StyledContact> 
    </>
  	);  
}
export default Contact;

const StyledContact = styled.div`
  min-height: 100vh;
  width: 100%;
  text-align: center;
  background-color: #000000;
`;

