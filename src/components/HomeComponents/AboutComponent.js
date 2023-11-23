import { BsPersonCircle } from "react-icons/bs";
const AboutComponent = () => {
  return (
    <div id="about">
      {/*  body button */}
      <div className="middle-body-buton mt-28">
        <BsPersonCircle />
        <h4>ABOUT</h4>
      </div>

      {/*   title of the div */}
      <div className="mt-16">
        <h3 className="middle-body-title">
          Unlocking Digital{" "}
          <span className="text-primary_colour"> Dreams 🚀</span> | Crafting
          Code
          <span className="text-primary_colour"> Magic ✨</span> | Let`s Make
          Your Ideas <span className="text-primary_colour"> Soar 🚀</span>
        </h3>
        <p className="text-text_colour font-sans text-base mt-4 lg:pr-60 cs-screen:pr-0 pr-0 text-justify">
          I specialize in creating tailored web applications using TypeScript,
          React js, Next js, Node js, Express js,MongoDB, and postgreSQL. My
          focus is understanding client`s unique requirement and collaborating
          closely to ensure quality and meet their specifications.My forte lies
          in crafting, securing, and optimizing websites to deliver stunning
          visuals, quick loading times.I take pride in my work, striving to
          exceed expectations. Committed to top-quality service, I ensure
          client`s complete satisfaction.
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;
