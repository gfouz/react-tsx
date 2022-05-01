import { theme } from "../theme";
import styled, { ThemeProvider } from "styled-components";
interface Props {
  bg?: string;
  padding?: string;
  margin?: string;
  breakpoint?: string;
  children?: React.ReactNode;
}
const Section = (props: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledSection {...props}>{props.children}</StyledSection>
      </ThemeProvider>
    </>
  );
};

export default Section;
const StyledSection = styled.section`
  width: 100%;
  margin: ${(props: Props) => props.margin || "0"};
  padding: ${(props: Props) => props.padding || "0"};
  background-color: ${(props: Props) => props.bg || "transparent"};
  ${({ theme }) => theme.row("space-evenly", "flex-start")};
  @media (max-width: ${(props: Props) => props.breakpoint || "700px"}) {
    ${({ theme }) => theme.column("flex-start", "center")};
  }
`;
//parameters order: theme.column(justify-content, align-items);
//parameters order: theme.row(justify-content, align-items);
