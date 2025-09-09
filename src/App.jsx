import { Hero } from "./components/hero/Hero";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";
import { Contact } from "./components/contacts/Contact";

const App = () => {
  return (
    <div className="container">
      <section id="home">
        <Hero />
      </section>
      <section id="portfolio">
        <Services />
      </section>
      <section id="services">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
