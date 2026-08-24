import companyConfig from "../config/companyConfig";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">
          <span className="hero-badge">
            QUALITY AUTO PARTS • SINCE 2014
          </span>

          <h1>
            Reliable Parts.
            <br />
            <span>Trusted Performance.</span>
          </h1>

          <p className="hero-description">
            Jyoti Autoparts provides quality auto parts designed for
            reliable performance, durability and long-lasting value.
          </p>

          {/* <p className="hero-products">
            Piston <span>•</span> Ring <span>•</span> Valve <span>•</span>{" "}
            Guide <span>•</span> Gasket <span>•</span> Kinetic Rod{" "}
            <span>•</span> Block
          </p> */}

            <p className="hero-products">
            {companyConfig.products.map((product, index) => (
                <span key={product}>
                {product}
                {index < companyConfig.products.length - 1 && (
                    <span> • </span>
                )}
                </span>
            ))}
            </p>

          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">
              View Products
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="hero-image-placeholder">
            <div className="hero-image-content">
              <span>JYOTI</span>
              <strong>AUTOPARTS</strong>
              <small>QUALITY • RELIABILITY • TRUST</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;