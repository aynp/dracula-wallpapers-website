import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import data from "../walls.json";
import styled from "styled-components";

export default function Nav() {
  return (
    <NavContainer>
      <Logo>
        <span>
          <Link to="/">
            <h2>DW</h2>
          </Link>
        </span>
        <span>
          <a href="https://github.com/aynp/dracula-wallpapers-website">
            <img
              src={process.env.PUBLIC_URL + "/github-logo.png"}
              alt="Github"
            />
          </a>
        </span>
      </Logo>
      <NavMenu>
        {data.map((item, index) => (
          <NavEle key={item.name}>
            <NavLink to={`/${index + 1}`}>
              {({ isActive }) => (
                <span className={isActive ? "active-style" : ""}>
                  {item.name}
                </span>
              )}
            </NavLink>
          </NavEle>
        ))}
      </NavMenu>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #282a36;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  width: 4rem;
  align-items: center;
  justify-items: space-between;
  padding: 0 10px;
  span {
    a {
      text-decoration: none;
    }
    h2 {
      color: #f8f8f2;
      font-size: 1.5rem;
      margin-right: 5px;
    }
    img {
      width: 24px;
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const NavEle = styled.div`
  margin-left: 30px;
  a {
    text-decoration: none;
    color: #f8f8f2;
    font-size: 1.15rem;
    position: relative;
    &:after {
      content: "";
      height: 2px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -3px;
      background: #f8f8f2;
      opacity: 0;
      transform: scaleX(0);
      transition: 0.25s;
      transform-origin: left center;
    }
    &:hover {
      &:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;
