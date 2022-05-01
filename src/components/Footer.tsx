import * as React from "react";
import styled, { css } from "styled-components";

interface Props {
  children?: React.ReactNode;
  textAlign?: string;
  top?: string;
  left?: string;
  display?: string;
  background?: string;
  textShadow?: string;
  textPadding?: string;
  textMargin?: string;
  imageSize?: string;
  imageMargin?: string;
  imagePadding?: string;
  titleColor?: string;
  titlePosition?: string;
  titleLeft?: string;
  titleTop?: string;
  titleMargin?: string;
  titlePadding?: string;
  boxBg?: string;
  boxPadding?: string;
  lighttext?: any;
  centered?: any;
  justify?: any;
}

function Footer(props: Props) {
  return (
    <>
      <StyledFooter {...props}>{props.children}</StyledFooter>
    </>
  );
}
export default Footer;

const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  display: ${(props: Props) => props.display};
  text-align: ${(props: Props) => props.textAlign};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: ${(props: Props) => props.titlePosition};
    left: ${(props: Props) => props.titleLeft};
    top: ${(props: Props) => props.titleTop};
    padding: ${(props: Props) => props.titlePadding || "0"};
    margin: ${(props: Props) => props.titleMargin || "0"};
    color: ${(props: Props) => props.titleColor};
  }
  div {
    text-align: center;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: ${(props: Props) => props.textPadding || "0"};
    margin: ${(props: Props) => props.textMargin || "0"};
    top: ${(props: Props) => props.top || "0"};
    left: ${(props: Props) => props.left || "0"};
    text-shadow: ${(props: Props) => props.textShadow};
    background-color: ${(props: Props) => props.background};
  }
  img {
    max-width: ${(props: Props) => props.imageSize || "100%"};
    padding: ${(props: Props) => props.imagePadding || "0"};
    margin: ${(props: Props) => props.imageMargin || "0"};
    object-fit: cover;
    height: 100%;
  }

  ${(props: Props) =>
    props.centered &&
    css`
      justify-content: center;
      align-items: center;
    `};
  ${(props: Props) =>
    props.justify &&
    css`
      justify-content: space-evenly;
      align-items: center;
    `};
  ${(props: Props) =>
    props.lighttext &&
    css`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        color: #ffffff;
      }
      div {
        background-color: ${(props: Props) => props.boxBg || "#22222240"};
        box-shadow: 1px 1px 10px #222222;
        border-radius: 5px;
        padding: ${(props: Props) => props.boxPadding || "0"};
      }
    `};
`;
