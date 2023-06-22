import styled, {createGlobalStyle} from "styled-components"
import React, { useState} from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Global = createGlobalStyle`
  body, html{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`
const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 999;

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: white;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child{
      transform: ${({nav}) => (nav ? 'rotate(45deg)': 'rotate(0)')}
    } 
    

    :nth-child(2){
      opacity: ${({nav}) => (nav ? "0" : "1")}
    } 
    
    :nth-child(3){
      transform: ${({nav}) => (nav ? 'rotate(-45deg)': 'rotate(0)')}
    }
  }  
`

const Menulinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 25%;
  position: fixed;
  transition: 300ms;
  background-color: black;
  top: 0;
  right: 0;
  z-index: 998;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};

  ul{
    list-style-type: none;
  }

  li{
    margin-top: 1rem
  }


   a{
     text-decoration: none; 
     color: white;
     font-size: 1.5rem;
     transition: color 300ms;
   }

  :hover {
    color: #6ab4ff    
  }
`

export const Sidebar =  () => {
  const [nav, showNav] = useState(false);
return(
<>
<Global />
          <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
            <div/>
            <div/>
            <div/>
          </MenuIcon>
          <Menulinks nav={nav}>
            <ul>
              <Link to="#">Blog</Link>
            </ul>
            <ul>
              <Link to="#">home</Link>
            </ul>
            <h3>Social</h3>
            <ul className="icons alt">
              <li><a href="#" class="icon alt fa-twitter"><span class="label">Twitter</span></a></li>
              <li><a href="#" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li>
              <li><a href="#" class="icon alt fa-instagram"><span class="label">Instagram</span></a></li>
              <li><a href="#" class="icon alt fa-github"><span class="label">GitHub</span></a></li>
            </ul>
          </Menulinks>
    </>
  );
}


