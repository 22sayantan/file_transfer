import React from 'react';

// Header component
function Header() {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// About component
function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at tortor nec leo fermentum malesuada. </p>
    </section>
  );
}

// Projects component
function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of project 1</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Description of project 2</p>
      </div>
    </section>
  );
}

// Contact component
function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

// Main App component
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
