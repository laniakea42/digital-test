import { Container } from "../container";
import {
  Burger,
  HeaderTop,
  HeaderWrapper,
  Logo,
  MobileContainerTop,
  Nav,
  NavItem,
  NavItemMain,
  NavSublink,
  NavSubmenu,
  SearchBar,
  SearchButton,
  SearchForm,
  SearchInput,
} from "./styled";
import logo from "./img/logo.svg";
import chevron from "./img/chevron.svg";
import linkChevron from "./img/link-chevron.svg";
import cross from "./img/cross.svg";
import search from "./img/search.svg";
import NavLinks from "./nav-links";
import { useState, useEffect, useRef, FormEvent } from "react";
import cn from "classnames";
import { useClickOutside } from "./hook/use-click-outside";

interface Props {
  handleSearch: (value: string) => void;
}

function Header({ handleSearch }: Props) {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);

  const [isNavShown, setIsNavShown] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const [searchValue, setSearchValue] = useState("");

  const searchRef = useRef(null);

  useClickOutside(searchRef, () => {
    setIsSearchFormVisible(false);
  });

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleSearchSubmit = () => {
    handleSearch(searchValue.toLowerCase());
  };

  const handleInput = (e: any) => {
    setSearchValue(e.target.value);
    handleSearch(searchValue.toLowerCase());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollY > 200 && scrollY > prevScrollY) {
      setIsNavShown(false);
    } else if (scrollY < 200 || scrollY < prevScrollY) {
      setIsNavShown(true);
    }
    setPrevScrollY(scrollY);
  }, [scrollY]);

  return (
    <HeaderWrapper>
      <HeaderTop>
        <Container>
          <Burger
            onClick={() => {
              setIsMobileMenuVisible(true);
            }}
          />

          <Logo src={logo} alt="logotype" />

          <SearchBar ref={searchRef}>
            {isSearchFormVisible ? (
              <SearchForm>
                <SearchInput
                  placeholder="your request"
                  autoFocus
                  value={searchValue}
                  onInput={(e) => {
                    handleInput(e);
                  }}
                />
                <button onClick={handleSearchSubmit}>
                  <img src={search} alt="" />
                </button>
              </SearchForm>
            ) : (
              <SearchButton
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSearchFormVisible(true);
                }}
              >
                <img src={search} alt="" />
              </SearchButton>
            )}
          </SearchBar>
        </Container>
      </HeaderTop>
      <Nav
        className={cn({
          "nav--shown": isMobileMenuVisible,
          "nav--visible": isNavShown,
          "nav--hidden": !isNavShown,
        })}
      >
        <MobileContainerTop>
          <Logo src={logo} alt="logotype" />
          <button
            onClick={() => {
              setIsMobileMenuVisible(false);
            }}
          >
            <img src={cross} alt="" />
          </button>
        </MobileContainerTop>
        <Container>
          {NavLinks.map((item, key) => {
            return (
              <NavItem key={key}>
                <NavItemMain>
                  {item.name}
                  {item.sublinks && <img src={chevron} alt="" />}
                </NavItemMain>
                {item.sublinks && (
                  <NavSubmenu>
                    {item.sublinks.map((sublink) => {
                      return (
                        <NavSublink href={sublink.link}>
                          <span>{sublink.name}</span>
                          <img src={linkChevron} alt="" />
                        </NavSublink>
                      );
                    })}
                  </NavSubmenu>
                )}
              </NavItem>
            );
          })}
        </Container>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
