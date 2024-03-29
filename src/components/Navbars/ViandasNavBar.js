import React from "react";
import classnames from "classnames";
import { useAuth0 } from "../../contexts/auth0-context";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap";

import {FormattedHTMLMessage} from 'react-intl';

function ViandasNavBar(props) {
  const {isLoading, user, loginWithRedirect, logout} = useAuth0();

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const redirectBusiness = () => {
    props.history.push("/loadBusiness");
  };

  const redirectPedidos = () => {
    props.history.push("/client/1/history");
  };

  const redirectMenu = () => {
    props.history.push("/business/1");
  };

  const redirectIndx = () => {
    console.log(props);
    props.history.push("/index");
  };

  const [dropdownOpen, setOpen] = React.useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const [drpdwnOpen, setUp] = React.useState(false);

  const tggl = () => setUp(!drpdwnOpen);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top nav-front", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
            Viandas YA
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            
            <NavItem>

            
              <div className="navbar-end">
              {!isLoading && !user && (
                <Button className="btn btn-danger" onClick={loginWithRedirect}>
                  <FormattedHTMLMessage id="app.login"
                        defaultMessage="Ingresar"
                    />
                </Button>
              )}
              
              <ButtonDropdown isOpen={drpdwnOpen} toggle={tggl}>
                    <DropdownToggle  color="secondary">
                    <FormattedHTMLMessage id="app.language"
                        defaultMessage="Idioma"
                    />
                      
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={()=>{props.onChangeLanguage("en")}}> 
                      <FormattedHTMLMessage id="app.english"
                        defaultMessage="Ingles"
                      />
                       </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem onClick={()=>{props.onChangeLanguage("es")}}> 
                      <FormattedHTMLMessage id="app.spanish"
                        defaultMessage="Español"
                      />
                      </DropdownItem>
                    </DropdownMenu>
              </ButtonDropdown>
              {/* if there is a user. show user name and logout button */}
              {!isLoading && user && (
                <>
                  <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret color="primary">
                      {user.name}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={redirectBusiness}>
                      <FormattedHTMLMessage id="app.loadBusiness"
                        defaultMessage="Carga tu Negocio"
                    />
                       </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem onClick={redirectMenu}>
                      <FormattedHTMLMessage id="app.loadMenu"
                        defaultMessage="Carga tu Menu"
                    />
                        </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem onClick={redirectPedidos}>Historial pedidos</DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem onClick={redirectIndx}>
                      <FormattedHTMLMessage id="app.home"
                        defaultMessage="Inicio"
                    />
                       </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                  <Button
                    className="btn btn-danger"
                    onClick={() => logout({ returnTo: "http://localhost:3000/index" })}
                  >
                    <FormattedHTMLMessage id="app.logout"
                        defaultMessage="Salir"
                    />
                    
                  </Button>
                </>
              )}
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ViandasNavBar;
