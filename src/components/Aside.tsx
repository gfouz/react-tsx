import * as React from "react";
import styled, { css } from "styled-components";

interface Props {
  children?: React.ReactNode;
  textAlign?: string;
  maxWidth?: string;
  margin?: string;
  padding?: string;
  textColor?: string;
  textPadding?: string;
  textMargin?: string;
  titleColor?: string;
  fontSize?: string;
  fontFamily?: string;
  breakpoint?: string;
  imageSize?: string;
  imagePadding?: string;
  imageMargin?: string;
  boxSize?: string;
  column?: string;
  row?: string;
}

function Aside(props: Props) {
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
  text-align: ${(props: Props) => props.textAlign || "center"};
  max-width: ${(props: Props) => props.maxWidth || "400px"};
  margin: ${(props: Props) => props.margin || "0"};
  padding: ${(props: Props) => props.padding || "0"};
  @media (max-width: ${(props: Props) => props.breakpoint || "700px"}) {
    max-width: 600px;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h5 {
    padding: ${(props: Props) => props.textPadding || "0"};
    margin: ${(props: Props) => props.textMargin || "0"};
    font-size: ${(props: Props) => props.fontSize};
    text-align: left;
    font-family: ${(props: Props) => props.fontFamily || "calibri"};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h5 {
    color: ${(props: Props) => props.titleColor || "#777777"};
  }
  p {
    color: ${(props: Props) => props.textColor || "#888888"};
  }
  img {
    max-width: ${(props: Props) => props.imageSize || "100%"};
    padding: ${(props: Props) => props.imagePadding || "0"};
    margin: ${(props: Props) => props.imageMargin || "0"};
    object-fit: cover;
    height: 100%;
  }

  div {
    width: ${(props: Props) => props.boxSize || "50%"};
  }
  ${(props: Props) =>
    props.column &&
    css`
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    `};

  ${(props: Props) =>
    props.row &&
    css`
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    `};
`;
