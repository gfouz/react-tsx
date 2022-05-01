import * as React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  padding?: string;
  margin?: string;
  maxWidth?: string;
  textAlign?: string;
  fontFamily?: string;
  fontSize?: string;
  titleColor?: string;
  titlePadding?: string;
  titleMargin?: string;
  textColor?: string;
  textPadding?: string;
  textMargin?: string;
}

function Paragraph(props: Props) {
  return <StyledParagraph {...props}>{props.children}</StyledParagraph>;
}
export default Paragraph;

const StyledParagraph = styled.article`
  padding: ${(props: Props) => props.padding || "0"};
  margin: ${(props: Props) => props.margin || "0"};
  max-width: ${(props: Props) => props.maxWidth || "400px"};
  text-align: ${(props: Props) => props.textAlign || "left"};
  font-family: ${(props: Props) => props.fontFamily || "calibri"};
  font-size: ${(props: Props) => props.fontSize};
  p {
    color: ${(props: Props) => props.textColor || "#888888"};
    padding: ${(props: Props) => props.textPadding || "0"};
    margin: ${(props: Props) => props.textMargin || "0"};
  }
  @media (max-width: 700px) {
    max-width: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props: Props) => props.titleColor || "#777777"};
    padding: ${(props: Props) => props.titlePadding || "0"};
    margin: ${(props: Props) => props.titleMargin || "0"};
  }
`;
