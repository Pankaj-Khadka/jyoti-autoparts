import companyConfig from "../config/companyConfig";

function Brands() {
  const brands = companyConfig.brands || [];

  return (
    <section className="brands" id="brands">
      <div className="brands-container">

        <div className="section-heading">
          <span className="section-label">OUR BRANDS</span>

          <h2>
            Brands You Can
            <br />
            <span>Trust</span>
          </h2>

          <p>
            We deal in trusted automotive brands that focus on quality,
            reliability and dependable performance.
          </p>
        </div>

        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div className="brand-card" key={index}>
              <div className="brand-logo">
                <span>{brand}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Brands;