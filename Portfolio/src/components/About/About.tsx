import "./about.css"; // Make sure to import your CSS file if needed
import logo from "../../assets/nobg_logo.png";

const About = () => {
  return (
    <div className="container mx-auto py-[11%] min-w-full bg-gradient-to-b from-[#F4E869] to-[#3085C3]">
      <div className="flex md:flex-row md:items-center md:justify-center md:space-x-3   xs:flex-col sm:flex-col">
        <div className="md:w-1/2 ">
          <h1 className="text-3xl font-bold text-center mb-6" id="h1p">
            About Web Morphers
          </h1>
          <div id="text" className=" text-center text-lg font-serif leading-7 space-y-4">
            <p>
              <span className="font-bold text-orange-500">Web Morphers</span>, a
              budding team of{" "}
              <span className="font-bold text-orange-500">ReactJS experts</span>
              , is redefining web development. Despite our newcomer status,
              we're driven by{" "}
              <span className="font-bold text-orange-500">passion</span> and{" "}
              <span className="font-bold text-orange-500">determination</span>.
              Our mission: to create captivating, interactive web experiences
              that shape the digital landscape.
            </p>
            <p>
              We embrace{" "}
              <span className="font-bold text-orange-500">innovation</span>,
              constantly evolving to stay at the forefront of{" "}
              <span className="font-bold text-orange-500">
                technology trends
              </span>
              . Our <span className="font-bold text-orange-500">agility</span>{" "}
              and{" "}
              <span className="font-bold text-orange-500">adaptability</span>{" "}
              enable us to exceed expectations and turn ambitious concepts into
              reality. Join us on this dynamic journey, as we reshape the future
              of the web.
            </p>
          </div>
        </div>
        <div className="md:w-[30%] md">
          <div className="flex items-center justify-center ">
            <img src={logo} alt="" className="max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
