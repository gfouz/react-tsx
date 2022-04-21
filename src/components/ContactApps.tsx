import * as React from "react";
import styled from "styled-components";
import SvgWhatsapp from "../icons/Whatsapp";
import SvgEnvelope from "../icons/Envelope";
import SvgTelegram from "../icons/Telegram";
import SvgGitAlt from "../icons/GitAlt";

const whatsappUrl: string = "http://https://api.whatsapp.com/send?phone=+5354278815";
const emailUrl: string = "mailto:gfouz1975@gmail.com";
const githubUrl: string = "https://github.com/gfouz";

interface Props {
  size: string,
  color: string
}

const props: Props = {
   size: "30px",
   color: "#0066ff"
}

function ContactApps() {
  return (
    <>
      <StyledMedia>
        <ul className="media-list">
          <li className="media-list__item">
            <a href={whatsappUrl}>
              <SvgWhatsapp {...props}/>
            </a>
          </li>
          <li className="media-list__item">
            <a href={whatsappUrl}>
              <SvgTelegram {...props} />
            </a>
          </li>
          <li className="media-list__item">
            <a href={githubUrl}>
              <SvgGitAlt {...props} />
            </a>
          </li>
          <li className="media-list__item">
            <a href={emailUrl}>
              <SvgEnvelope {...props} />
            </a>
          </li>
        </ul>
      </StyledMedia>
    </>
  );
}
export default ContactApps;

const StyledMedia = styled.div`
  .media-list {
    padding: 0;
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .media-list__item {
    list-style-type: none;
  }
`;
