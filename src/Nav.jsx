import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="cabecalho">



      <Navbar {...args}
      color="dark"
      dark
      >


        <NavbarBrand href="/">
        <img
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        style={{
          height: 40,
          width: 40
        }}/>
        
          Nome do projeto</NavbarBrand>
          
          <NavbarText>Venha fazer parte do nosso time!</NavbarText>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Início</NavLink>
            </NavItem>
          
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Serviços
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contato
              </DropdownToggle>

            

        
              <DropdownMenu right>
              
                <DropdownItem  href="https://github.com/reactstrap/reactstrap">Github</DropdownItem>
                <DropdownItem>Linkedin</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
  


            </UncontrolledDropdown>
          </Nav>
          
        </Collapse>
       
      </Navbar>
    </div>
  );
}

export default Example;