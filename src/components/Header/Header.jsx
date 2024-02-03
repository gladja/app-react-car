import { Logo, Nav, NavLinkStyled, Wrap, LogoColor } from './Header.styled';
import { Button } from 'antd';

export const Header = () => {
  return (
    <>
      <Wrap>
        <div>
          <NavLinkStyled to="/">
            <Logo>
              Rent<LogoColor>Car</LogoColor>
            </Logo>
          </NavLinkStyled>
        </div>
        <Nav>
          <Button
            size="large"
            style={{
              padding: '0 44px',
              borderRadius: '12px',
            }}
          >
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </Button>
          <Button
            size="large"
            style={{
              padding: '0 44px',
              borderRadius: '12px',
            }}
          >
            <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
          </Button>
          <Button
            size="large"
            style={{
              padding: '0 44px',
              borderRadius: '12px',
            }}
          >
            <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
          </Button>
        </Nav>
      </Wrap>
    </>
  );
};
