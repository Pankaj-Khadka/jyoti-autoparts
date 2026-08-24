import companyConfig from "../config/companyConfig";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>Jyoti Autoparts</h2>
          <p>
            Quality auto parts for reliable performance and long-lasting
            vehicle maintenance.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        {/* <div className="footer-section">
          <h3>Our Products</h3>
          <p>Piston</p>
          <p>Ring</p>
          <p>Valve</p>
          <p>Guide</p>
          <p>Gasket</p>
          <p>Kinetic Rod</p>
          <p>Block</p>
        </div> */}

        <div className="footer-section">
          <h3>Our Products</h3>

          {companyConfig.products.map((product) => (
            <p key={product}>{product}</p>
          ))}
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📞 {companyConfig.phone}</p>
          <p>✉️ {companyConfig.email}</p>
          <p>📍{companyConfig.address}</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Jyoti Autoparts. All Rights Reserved.
        <br /><span>Trusted for Quality Auto Parts Since 2014 | Developed by Pankaj Khadka</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;