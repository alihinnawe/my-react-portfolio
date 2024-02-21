import React, { useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "../src/styles.css";

function Header() {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <>
      <Link
        to="/"
        onClick={() => {
          let home = document.getElementById("home");
          home && home.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        Home
      </Link>

      <Link
        to="/"
        onClick={() => {
          let resume = document.getElementById("resume");
          resume &&
            resume.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        Resume
      </Link>
      <Link
        to="/about"
        onClick={() => {
          let about = document.getElementById("about");
          about && about.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        About
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          let contact = document.getElementById("contact");
          contact &&
            contact.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        Contact
      </Link>
    </>
  );
}

function Home() {
  return (
    <section id="home">
      <div className="Hometitle">
        <h1>Home Section</h1>
      </div>
      <div className="card">
        <div className="content">
          <div className="content-image"></div>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="overlay">
      <h1>Resume Section</h1>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="overlay">
      <h1>About Section</h1>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="overlay">
      <h1>Contact Section</h1>
    </section>
  );
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
        <Resume />
        <About />
        <Contact />
      </BrowserRouter>
    </div>
  );
}
