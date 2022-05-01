import { theme } from "../theme";
import styled, { ThemeProvider } from "styled-components";
interface Props {
  margin?: string;
  padding?: string;
  breakpoint?: string;
  textColor?: string;
  textMargin?: string;
  children?: React.ReactNode;
}
const Article = (props: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledArticle {...props}>{props.children}</StyledArticle>
      </ThemeProvider>
    </>
  );
};

export default Article;
const StyledArticle = styled.article`
  margin: ${(props: Props) => props.margin || "0"};
  ${({ theme }) => theme.article("400px")};    
  @media (max-width: ${(props: Props) => props.breakpoint || "700px"}) {
  ${({ theme }) => theme.article("600px")};  
  }
  p, h1,h2,h3,h4,h5,h5 {
    padding: ${(props: Props) => props.padding || "0"};
    margin: ${(props: Props) => props.textMargin || "0"};
    color: ${(props: Props) => props.textColor};
  }
`;

