import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './siteNavbar.css';

export default function SiteNavbar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          jz-web-app
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/about-me/">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog/">Blog Page</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/justin-zhu1018/jz-web-app">
                Visit my GitHub!
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
