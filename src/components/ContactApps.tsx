import * as React from "react";
import styled from "styled-components";
import SvgWhatsapp from "../icons/Whatsapp";
import SvgEnvelope from "../icons/Envelope";
import SvgTelegram from "../icons/Telegram";
import SvgGitAlt from "../icons/GitAlt";

const whatsappUrl: string =
  "http://https://api.whatsapp.com/send?phone=+5354278815";
const emailUrl: string = "mailto:gfouz1975@gmail.com";
const githubUrl: string = "https://github.com/gfouz";

interface Props {
  size?: string;
  height?: string;
  svgColor?: string;
}
interface Svg {
  size?: string;
  color?: string;
}

function ContactApps(props: Props) {
  const svg: Svg = {
    size: props.size || "30px",
    color: props.svgColor || "#ffffff",
  };
  return (
    <>
      <StyledMedia {...props}>
        <ul className="media-list">
          <li className="media-list__item">
            <a href={whatsappUrl}>
              <SvgWhatsapp {...svg} />
            </a>
          </li>
          <li className="media-list__item">
            <a href={whatsappUrl}>
              <SvgTelegram {...svg} />
            </a>
          </li>
          <li className="media-list__item">
            <a href={githubUrl}>
              <SvgGitAlt {...svg} />
            </a>
          </li>
          <li className="media-list__item">
            <a href={emailUrl}>
              <SvgEnvelope {...svg} />
            </a>
          </li>
        </ul>
      </StyledMedia>
    </>
  );
}
export default ContactApps;

const StyledMedia = styled.nav`
  .media-list {
    padding: 0;
    width: 100%;
    height: ${(props: Props) => props.height || "auto"};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .media-list__item {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
