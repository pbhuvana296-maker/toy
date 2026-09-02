import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            🧸 ToyVerse
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#toyNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="toyNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#categories">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#toys">Toys</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">
            Make Every Moment Playful 🧸
          </h1>

          <p className="lead">
            Discover fun, colourful and exciting toys for every little explorer.
          </p>

          <button className="btn btn-warning btn-lg fw-bold">
            Shop Toys
          </button>
        </div>
      </section>

      <section id="categories" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">
            Toy Categories
          </h2>

          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div className="category-card p-4 shadow">
                <div className="category-icon">🧸</div>
                <h5>Teddy Bears</h5>
                <p>Soft & Cute</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="category-card p-4 shadow">
                <div className="category-icon">🚗</div>
                <h5>Toy Cars</h5>
                <p>Fast & Fun</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="category-card p-4 shadow">
                <div className="category-icon">🧩</div>
                <h5>Puzzles</h5>
                <p>Learn & Play</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="category-card p-4 shadow">
                <div className="category-icon">🤖</div>
                <h5>Robots</h5>
                <p>Smart Toys</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="toys" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">
            Featured Toys 🎁
          </h2>

          <div className="row g-4">
            {[ 
              ["🧸", "Cute Teddy", "₹799"],
              ["🚗", "Racing Car", "₹599"],
              ["🤖", "Smart Robot", "₹999"],
              ["🧩", "Puzzle Game", "₹449"],
              ["🎨", "Art Kit", "₹699"],
              ["🦖", "Dinosaur Toy", "₹549"]
            ].map((toy, index) => (
              <div className="col-md-4" key={index}>
                <div className="card toy-card h-100 shadow-sm">
                  <div className="toy-image">
                    {toy[0]}
                  </div>

                  <div className="card-body text-center">
                    <h5 className="fw-bold">{toy[1]}</h5>
                    <p className="text-muted">{toy[2]}</p>
                    <button className="btn btn-warning">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose ToyVerse?</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <h3>🚚</h3>
              <h5>Fast Delivery</h5>
              <p>Quick and safe delivery to your doorstep.</p>
            </div>

            <div className="col-md-4">
              <h3>⭐</h3>
              <h5>Best Quality</h5>
              <p>Fun and quality toys for happy kids.</p>
            </div>

            <div className="col-md-4">
              <h3>💝</h3>
              <h5>Happy Shopping</h5>
              <p>Make every toy purchase special.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-section py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">🎉 Special Offer!</h2>
          <p className="lead">
            Get up to 30% OFF on selected toys.
          </p>
          <button className="btn btn-dark btn-lg">
            Grab The Deal
          </button>
        </div>
      </section>

      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">
            Contact Us
          </h2>

          <div className="col-md-7 mx-auto">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Name"
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Your Email"
            />

            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Your Message"
            ></textarea>

            <button className="btn btn-warning w-100 fw-bold">
              Send Message
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-4">
        <h5>🧸 ToyVerse</h5>
        <p className="mb-0">
          © 2026 ToyVerse. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;