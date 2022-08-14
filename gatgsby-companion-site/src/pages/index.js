import { Link } from "gatsby"
import styled, {createGlobalStyle} from "styled-components"
import React, { useState} from "react"
import pic1 from "../images/pic01.jpg"
import pic2 from "../images/pic02.jpg"
import pic3 from "../images/pic03.jpg"

import "../assets/css/font-awesome.min.css"
import "../assets/css/main.css"
import "../assets/css/noscript.css"

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
  z-index: 5;

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
  width: 20%;
  position: absolute;
  transition: 300ms;
  background-color: black;
  top: 0;
  right: 0;
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

const Home = () => {
  const [nav, showNav] = useState(false)
    
  return (
    <>
      {/*
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/}
      <title>Massively by HTML5 UP</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      {/* Wrapper */}
      <div id="wrapper" className="fade-in">
        {/* sidebar */}
        {/* TODO: Pass sidebar component to index */}
        {/* Pass nav bar links into sidebar */}      
          <Global />
          <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
            <div/>
            <div/>
            <div/>
          </MenuIcon>
 
          <Menulinks nav={nav}>
          <nav>
            <ul>
              <Link to="#">Blog</Link>
            </ul>
            <ul>
              <Link to="#">home</Link>
            </ul>
          </nav>
          </Menulinks>
          
        {/* Intro */}
        <div id="intro">
          <h1>My Portfolio</h1>
          <p>Link showcase of my projects and my abilities.</p>
          <ul className="actions">
            <li>
              <Link
                to="#header"
                className="button icon solo fa-arrow-down scrolly"
              >
                Continue
              </Link>
            </li>
          </ul>
        </div>
        {/* Header */}
        <header id="header">
          <Link to="index.html" className="logo">
            Massively
          </Link>
        </header>
        {/* Nav */}
          <nav id="nav">
            <ul className="links">
              <li className="active">
                <Link to="index.html">This is Massively</Link>
              </li>
            </ul>
            <ul className="icons">
              <li>
                <Link to="#" className="icon fa-linkedin">
                  <span className="label">Instagram</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="icon fa-github">
                  <span className="label">GitHub</span>
                </Link>
              </li>
            </ul>
          </nav>
        {/* Main */}
        <div id="main">
          {/* Featured Post */}
          <article className="post featured">
            <header className="major">
              <h2>
                <Link to="#">My Name is Joshua Fluke</Link>
              </h2>
              <p>
                I'm Link passionate developer but more importantly I'm passionate
                about technology.
              </p>
            </header>
            <Link to="#" className="image main">
              <img src={pic1} alt="" />
            </Link>
            <ul className="actions special">
              <li>
                <Link to="#" className="button large">
                  Check it out
                </Link>
              </li>
            </ul>
          </article>
          {/* Posts */}
          <section className="posts">
            <article>
              <header>
                <h2>
                  <Link to="#">
                    Project 1<br />
                    ipsum faucibus
                  </Link>
                </h2>
              </header>
              <Link to="#" className="image fit">
                <img src={pic2} alt="" />
              </Link>
              <p>
                Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis magna etiam.
              </p>
              <ul className="actions special">
                <li>
                  <Link to="#" className="button">
                    Full Story
                  </Link>
                </li>
              </ul>
            </article>
            <article>
              <header>
                <h2>
                  <Link to="#">
                    Project 2<br />
                    imperdiet lorem
                  </Link>
                </h2>
              </header>
              <Link to="#" className="image fit">
                <img src={pic3} alt="" />
              </Link>
              <p>
                Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis magna etiam.
              </p>
              <ul className="actions special">
                <li>
                  <Link to="#" className="button">
                    Full Story
                  </Link>
                </li>
              </ul>
            </article>
          </section>
          {/* Footer */}
        </div>
        {/* Footer */}
        <footer id="footer">
          <section className="split contact">
            <section className="alt">
              <h3>Address</h3>
              <p>
                1234 Somewhere Road #87257
                <br />
                Nashville, TN 00000-0000
              </p>
            </section>
            <section>
              <h3>Phone</h3>
              <p>
                <Link to="#">(000) 000-0000</Link>
              </p>
            </section>
            <section>
              <h3>Email</h3>
              <p>
                <Link to="#">info@untitled.tld</Link>
              </p>
            </section>
            <section>
              <h3>Social</h3>
              <ul className="icons alt">
                <li>
                  <Link to="#" className="icon alt fa-twitter">
                    <span className="label">Twitter</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="icon alt fa-facebook">
                    <span className="label">Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="icon alt fa-instagram">
                    <span className="label">Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="icon alt fa-github">
                    <span className="label">GitHub</span>
                  </Link>
                </li>
              </ul>
            </section>
          </section>
        </footer>
        {/* Copyright */}
        <div id="copyright">
          <ul>
            <li>© Untitled</li>
            <li>
              Design: <Link to="https://html5up.net">HTML5 UP</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home