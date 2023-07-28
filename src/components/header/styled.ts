import styled from "styled-components";
import { Container } from "../container";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 99;
  ${Container} {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 2rem;
    padding-bottom: 1.6rem;
  }
  & + div {
    padding-top: 82px;
  }
  @media (min-width: 768px) {
    & + div {
      padding-top: 146px;
    }
  }
`;

export const HeaderTop = styled.div`
  background: #fff;
  border-bottom: 1px solid #e9e9e9;
  position: relative;
  z-index: 2;
`;

export const Logo = styled.img`
  width: 10.18rem;
  height: 1.5rem;
  object-fit: contain;
  object-position: center;
  @media (min-width: 768px) {
    width: 11.3rem;
    height: 1.7rem;
  }
`;

export const SearchBar = styled.div`
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
`;

export const SearchButton = styled.button`
  img {
    vertical-align: middle;
  }
`;

export const Burger = styled.button`
  width: 1.56rem;
  height: 1.15rem;
  position: absolute;
  left: 1.25rem;
  background-image: url("data:image/svg+xml,%3Csvg width='27' height='19' viewBox='0 0 27 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 0C0.89543 0 0 0.895431 0 2H2V0ZM25 0H2V2H25V0ZM27 2C27 0.89543 26.1046 0 25 0V2H27ZM25 4C26.1046 4 27 3.10457 27 2H25V2V4ZM2 4H25V2H2V4ZM0 2C0 3.10457 0.895431 4 2 4V2V2H0ZM2 7.38462C0.89543 7.38462 0 8.28005 0 9.38461H2V7.38462ZM25 7.38462H2V9.38461H25V7.38462ZM27 9.38461C27 8.28005 26.1046 7.38462 25 7.38462V9.38461H27ZM25 11.3846C26.1046 11.3846 27 10.4892 27 9.38461H25V11.3846ZM2 11.3846H25V9.38461H2V11.3846ZM0 9.38461C0 10.4892 0.895431 11.3846 2 11.3846V9.38461H0ZM2 16.7692V14.7692C0.895431 14.7692 0 15.6647 0 16.7692H2ZM2 16.7692V16.7692H0C0 17.8738 0.895431 18.7692 2 18.7692V16.7692ZM25 16.7692H2V18.7692H25V16.7692ZM25 16.7692V16.7692V18.7692C26.1046 18.7692 27 17.8738 27 16.7692H25ZM25 16.7692H27C27 15.6647 26.1046 14.7692 25 14.7692V16.7692ZM2 16.7692H25V14.7692H2V16.7692Z' fill='black'/%3E%3C/svg%3E%0A");
  background-size: contain;
  background-position: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    width: 320px;
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    height: 100dvh;
    background: #fff;
    border-right: 1px solid #e9e9e9;
    transform: translateX(-100%);
    transition: 300ms ease-out;
    visibility: hidden;
    z-index: 4;
    ${Container} {
      padding-top: 0.8rem;
      flex-direction: column;
      align-items: flex-start;
    }
    &::before {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100%;
      z-index: -1;
      opacity: 0.6;
      background: #fff;
    }
    &.nav--shown {
      visibility: visible;
      transform: translateX(0%);
    }
  }
  @media (min-width: 768px) {
    display: block;
    border-bottom: 1px solid #e9e9e9;
    transition: 400ms ease-out;
    z-index: 1;
    position: relative;
    &.nav--hidden {
      margin-top: -60px;
    }
    &.nav--visible {
      margin-top: 0;
    }
    ${Container} {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding-top: 0;
      padding-bottom: 0;
      gap: 32px;
    }
  }
`;

export const NavItemMain = styled.div`
  cursor: pointer;
  font-weight: 500;
  font-variation-settings: "wght" 500;
  display: flex;
  align-items: center;
  gap: 4px;
  img {
    transform: translateY(2px);
  }
`;

export const NavSubmenu = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  border: 1px solid #e9e9e9;
  background: #fff;
  padding: 1.25rem;
  opacity: 0;
  overflow: hidden;
  height: 0;
  transition: 300ms ease-out;
  @media (max-width: 768px) {
    position: static;
    padding: 0;
    transform: translateY(0);
    border: 0;
  }
`;

export const NavItem = styled.div`
  position: relative;
  padding-top: 1.25rem;
  padding-bottom: 1.15rem;
  &:hover {
    ${NavSubmenu} {
      opacity: 1;
      height: auto;
    }
  }
  @media (max-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    & + & {
      border-top: 1px solid #e9e9e9;
    }
    &:hover {
      ${NavSubmenu} {
        padding-top: 1rem;
      }
    }
  }
`;

export const NavSublink = styled.a`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  padding: 0.5rem;
  gap: 40px;
  & + & {
    border-top: 1px solid #e9e9e9;
  }
  span {
    color: #000;
    transition: 200ms ease-out;
  }
  &:hover span {
    color: #969696;
    transform: translateX(8px);
  }
`;

export const MobileContainerTop = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 2rem 1.25rem 1.6rem;
    border-bottom: 1px solid #e9e9e9;
  }
`;

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  position: absolute;
  left: -1rem;
  top: 50%;
  transform: translate(-100%, -50%);
  border: 1px solid #e9e9e9;
  padding: 0.7rem 1.2rem;
  background: #fff;
  width: calc(100vw - 100px);

  @media (min-width: 768px) {
    padding: 0.5rem 1rem;
    width: auto;
  }
`;

export const SearchInput = styled.input`
  border: 0;
  outline: 0;
  box-shadow: none;
  font-weight: 500;
  display: block;
  padding: 0;
  font-size: 1rem;
  background: transparent;
  &::placeholder {
    color: #d6d6d6;
  }
`;
