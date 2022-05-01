import * as React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a
                className="navbar__link"
                href="https://gfouz.github.io/react-workshop"
              >
                about
              </a>
            </li>
            <li className="navbar__item">
              <a
                className="navbar__link"
                href="https://gfouz.github.io/react-workshop"
              >
                work
              </a>
            </li>
            <li className="navbar__item">
              <a
                className="navbar__link"
                href="https://gfouz.github.io/react-workshop"
              >
                blog
              </a>
            </li>
          </ul>
        </nav>
      </StyledNavbar>
    </>
  );
};
export default Navbar;

const StyledNavbar = styled.nav`
  .navbar {
    width: 100%;
    height: 30px;
  }
  .navbar__list {
    height: 30px;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .navbar__item {
    &:hover {
      transform: scale(1.2);
    }
  }
  .navbar__link {
    transition: 0.3s all;
    color: #444444;
    text-decoration: none;
    font-weight: bolder;
    border-radius: 5px;
    padding: 0.1em 1em;
    text-transform: uppercase;
    &:hover {
      color: #ffffff;
      background-color: orange;
    }
  }
`;
