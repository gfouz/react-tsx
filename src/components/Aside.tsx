import * as React from 'react' 
import styled from 'styled-components'

interface Props {
	children?: React.ReactNode
	textAlign?: string
	maxWidth?: string
	margin?: string
	padding?: string
	textPadding?: string
	titleColor?: string
  fontSize?: string
	breakpoint?: string
	imageSize?: string
	imagePadding?: string
	imageMargin?: string
  contentSize?: string
}

function Aside (props: Props) {

	return (
        <>
          <StyledAside {...props}>{props.children}</StyledAside>
        </>

		);
}

export default Aside;

const StyledAside = styled.aside`
  position: relative;
  display: flex;
  text-align: ${(props: Props)=> props.textAlign || "center"};
  max-width: ${(props: Props)=> props.maxWidth || "400px"};
  margin: ${(props: Props)=> props.margin || "0"};
  padding: ${(props: Props)=> props.padding || "0"};
  @media (max-width: ${(props: Props) => props.breakpoint || "700px"}) {
         max-width: 600px;
  }
  p, h1, h2, h3, h4, h5, h5 {
    padding: ${(props: Props)=> props.textPadding || "0"};
    font-size: ${(props: Props)=> props.fontSize };
    text-align: left;
  }
  h1, h2, h3, h4, h5, h5 {
     color: ${(props: Props)=> props.titleColor || "#666666"};
  }
  p {
  	color: #777777;
  }
  img {
    max-width: ${(props: Props)=> props.imageSize || "100%"};
    padding: ${(props: Props) => props.imagePadding || "0"};
    margin: ${(props: Props)=> props.imageMargin || "0"};
    object-fit: cover;
    height: auto;
    }
  div {
  	width: ${(props: Props)=> props.contentSize || "50%"};
  } 
`;
