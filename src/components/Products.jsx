import companyConfig from "../config/companyConfig";

import pistonImage from "../assets/products/pistons.jpg";
import ringImage from "../assets/products/ring.webp";
import valveImage from "../assets/products/valve.webp";
import guideImage from "../assets/products/valve-guides.webp";
import gasketImage from "../assets/products/gasket.jpg";
import kineticRodImage from "../assets/products/kinetic-rod-kit.jpeg";
import blockImage from "../assets/products/block-piston-kit.webp";
import drumSleeveImage from "../assets/products/drum-sleeve.png";

function Products() {

  const productImages = {
    Piston: pistonImage,
    Ring: ringImage,
    Valve: valveImage,
    Guide: guideImage,
    Gasket: gasketImage,
    "Kinetic Rod": kineticRodImage,
    Block: blockImage,
    "Drum Sleeve": drumSleeveImage
  };


  const products = companyConfig.products || [];

  return (
    <section className="products" id="products">
      <div className="products-container">

        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-label">OUR PRODUCTS</span>

          <h2>
            Quality Auto Parts for
            <br />
            <span>Reliable Performance</span>
          </h2>

          <p>
            Explore our range of automotive components designed to meet
            your vehicle maintenance and performance needs.
          </p>
        </div>

        {/* Product Cards */}
        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>

              {/* <div className="product-image">
                <span>Auto Part</span>
              </div> */}
            
              <div className="product-image">
                <img
                  src={productImages[product]}
                  alt={`${product} - Jyoti Autoparts`}
                />
              </div>

              <div className="product-content">
                <h3>{product}</h3>

                <p>
                  Quality {product.toLowerCase()} for reliable
                  automotive performance.
                </p>

                <a href="#contact">
                  Enquire Now →
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Products;