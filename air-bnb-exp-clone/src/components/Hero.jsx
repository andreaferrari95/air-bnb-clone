import heroImg from "../assets/images/photo-grid.png";

function Hero() {
  return (
    <section className="hero-container">
      <img src={heroImg} className="hero--img" alt="Hero Image" />
      <h1 className="hero--h1">Online Experiences</h1>
      <p className="hero--p">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
