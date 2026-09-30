function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-small">
          HELLO, I'M
        </p>

        <h1>
          Paindla <span>Narendar Reddy</span>
        </h1>

        <h2>
          Senior Technical Trainer
          <br />
          & Full Stack Developer
        </h2>

        <p className="hero-description">
          I train aspiring developers in modern software development
          while building practical, scalable applications using
          modern technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View My Work
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://paindlanarendar.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </a>
        </div>

      </div>

      <div className="hero-card">

        <div className="profile-circle">
          PNR
        </div>

        <div className="floating-card card-one">
          <strong>1+</strong>
          <span>Year at ByteXL</span>
        </div>

        <div className="floating-card card-two">
          <strong>10+</strong>
          <span>Projects</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;