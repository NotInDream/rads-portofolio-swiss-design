function Hero() {
  return (
    <section className="hero">
      <div className="hero-year">&copy; 2026</div>
      <div className="grid">
        <h1 className="hero-title display">
          Full
          <br />
          Stack
          <br />
          &amp; AI
        </h1>
        <div className="hero-meta">
          <p>
            Building intelligent systems at the intersection of robust backend
            engineering and machine learning — from secure APIs to computer
            vision pipelines.
          </p>
          <span className="mono">Raden Ananta Mahardika</span>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="line"></div>
        <span
          className="mono"
          style={{ fontSize: "0.55rem", color: "var(--grey)" }}>
          Scroll
        </span>
      </div>
    </section>
  );
}

export default Hero;
