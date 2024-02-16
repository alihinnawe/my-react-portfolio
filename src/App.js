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

function Resume() {
  return (
    <section id="resume">
      <h1>Resume Section</h1>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <h1>About Section</h1>
      <></>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h1>Contact Section</h1>
    </section>
  );
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Resume />
        <About />
        <Contact />
      </BrowserRouter>
    </div>
  );
}
