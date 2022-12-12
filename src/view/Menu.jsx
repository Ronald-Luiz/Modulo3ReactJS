import { useRef } from "react";
import {Outlet} from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo-nav.png"
import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,  
  } from 'reactstrap';
import "./css/Menu.css";

function Barra() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
    <div>
		<header>
			<img src={logo} alt="logo" />
			<div>
			<nav ref={navRef}>
				<a href="/">INICIO</a>
				<a href="/produtos">PRODUTOS</a>
				<a href="/contatos">CONTATOS</a>
				<UncontrolledDropdown
				inNavbar
				nav
				>
              <DropdownToggle nav caret className="ConfBtn">
                CONFIGURAÇÕES
              </DropdownToggle>

        
              <DropdownMenu className="ConfOpen" left>
                <DropdownItem href="/read">Estoque</DropdownItem>
                <DropdownItem href="/create">Criar</DropdownItem>
              </DropdownMenu>
  


            </UncontrolledDropdown>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</div>
    </header>
    <Outlet />
    </div>
	);
}

export default Barra;
