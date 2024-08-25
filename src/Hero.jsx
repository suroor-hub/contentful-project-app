import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            To reduce CMS development risks, time, and costs, we suggest
            applying an iterative approach to development and introducing CI/CD
            pipelines. Thus, a new CMS iteration is delivered every 2–3 weeks.
            The approach actively engages stakeholders early on to guarantee
            better user satisfaction and control over the delivery results.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
