import { Link } from "gatsby"
import React, { useState} from "react"
import pic1 from "../images/pic01.jpg"
import pic2 from "../images/pic02.jpg"
import pic3 from "../images/pic03.jpg"
import { Sidebar } from "../components/sidebar"
// Hello world
import "../assets/css/font-awesome.min.css"
import "../assets/css/main.css"
import "../assets/css/noscript.css"


const Home = () => {    
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
          <Sidebar></Sidebar>
        {/* Intro */}
        <div id="intro">
          <h1>My Portfolio</h1>
          <p>A showcase of my projects and my abilities.</p>
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
                <a href="index.html">This is Massively</a>
              </li>
            </ul>
            <ul className="icons">
              <li>
                <a href="#" className="icon fa-linkedin">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
            </ul>
          </nav>
        {/* Main */}
        <div id="main">
          {/* Featured Post */}
          <article className="post featured">
            <header className="major">
              <h2>
                <a href="#">My Name is Joshua Fluke</a>
              </h2>
              <p>
                I'm a passionate developer but more importantly I'm passionate
                about technology.
              </p>
            </header>
            <a href="#" className="image main">
              <img src={pic1} alt="" />
            </a>
            <ul className="actions special">
              <li>
                <a href="#" className="button large">
                  Check it out
                </a>
              </li>
            </ul>
          </article>
          {/* Posts */}
          <section className="posts">
            <article>
              <header>
                <h2>
                  <a href="#">
                    Project 1<br />
                    ipsum faucibus
                  </a>
                </h2>
              </header>
              <a href="#" className="image fit">
                <img src={pic2} alt="" />
              </a>
              <p>
                Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis magna etiam.
              </p>
              <ul className="actions special">
                <li>
                  <a href="#" className="button">
                    Full Story
                  </a>
                </li>
              </ul>
            </article>
            <article>
              <header>
                <h2>
                  <a href="#">
                    Project 2<br />
                    imperdiet lorem
                  </a>
                </h2>
              </header>
              <a href="#" className="image fit">
                <img src={pic3} alt="" />
              </a>
              <p>
                Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis magna etiam.
              </p>
              <ul className="actions special">
                <li>
                  <a href="#" className="button">
                    Full Story
                  </a>
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
                <a href="#">info@untitled.tld</a>
              </p>
            </section>
            <section>
              <h3>Social</h3>
              <ul className="icons alt">
                <li>
                  <a href="#" className="icon alt fa-twitter">
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon alt fa-facebook">
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon alt fa-instagram">
                    <span className="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon alt fa-github">
                    <span className="label">GitHub</span>
                  </a>
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
              Design: <a href="https://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home