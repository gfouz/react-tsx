import { theme } from "../theme";
import styled, { ThemeProvider } from "styled-components";
interface Props {
  margin?: string
  padding?: string
  maxwidth?: string
  imagePercentage?: string
  breakpoint?: string
  children: React.ReactNode
}
const Figure = (props: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledFigure {...props}>{props.children}</StyledFigure>
      </ThemeProvider>
    </>
  );
};

export default Figure;
const StyledFigure = styled.figure`
    position: relative;
    text-align: center;
    color:#444444;
    max-width: ${(props: Props)=> props.maxwidth || "400px"}
    margin: ${(props: Props) => props.margin || "0"};
    @media (max-width: ${(props: Props) => props.breakpoint || "700px"}) {
    max-width: ${(props)=> props.maxwidth || "500px"};
    img {
    max-width: "100%";
    height: auto;
    }
    }
    img {
    max-width: ${(props: Props)=> props.imagePercentage || "100%"};
    height: auto;
    padding: ${(props: Props) => props.padding || "0"}
    }
`;

