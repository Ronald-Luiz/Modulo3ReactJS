import React, { useState } from 'react';
import {Outlet} from 'react-router-dom';
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
import { className } from 'postcss-selector-parser';

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
          width: 40,
        }}/>
        
          Nome do projeto</NavbarBrand>
          
          <NavbarText>Venha fazer parte do nosso time!</NavbarText>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Produtos">Produtos</NavLink>
            </NavItem>




            <NavItem>
              <NavLink href="/Servicos">Serviços</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Contatos">Contato</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Configurações
              </DropdownToggle>

        
              <DropdownMenu right>
              
                <DropdownItem href="/read">Estoque</DropdownItem>
                <DropdownItem href="/create">Criar</DropdownItem>
                
                <DropdownItem/>
              </DropdownMenu>
  


            </UncontrolledDropdown>
          </Nav>
          
        </Collapse>
       
      </Navbar>

      <Outlet />
    </div>
  );
}

export default Example;
