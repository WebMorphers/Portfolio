 
import "./Projects.css";
import Card from "./card"; 
import img1 from "../../assets/qsdz.png";
import img2 from "../../assets/adaqsd.png";

const Projects = () => {
  const live1 = "https://nexcent-pi.vercel.app";
  const live2 = "https://notapark.vercel.app/";

  return (
    <div className="lg:py-[10%] bg-gradient-to-b from-amber-300 via-amber-400 to-yellow-400 container mx-auto pt-20 flex items-center justify-center flex-col min-w-full">
      <h1 className="xs:text-[50px] sm:text-[60px] md:text-[66px]">Projects</h1>
      <div className="mt-4" id="te">
        <div className="flex flex-row justify-center   max-md:flex-col ">
          <Card
            title="Responsive Landing Page"
            description="Responsive Landing Page Design | Website Home Page Design | Agency Website UI Design"
            imgSrc={img1}
            link={live1}
          />
          {/* <Card
            title="NotAPark"
            description="Responsive Landing Page Design | Website Home Page Design | Agency Website UI Design"
            imgSrc={img2}
            link={live2}
          /> */}
        </div>
        <p className="xs:text-[18px] sm:text-[20px] md:text-[20px]">
        With a wealth of experience in web development, we are a team of
          dedicated creators driven by innovation and technical excellence. Our
          diverse portfolio includes successful collaborations with a wide range
          of clients, from startups to large enterprises. We are committed to
          crafting tailor-made websites that combine aesthetics, functionality,
          and performance. Our cutting-edge technical expertise enables us to
          embrace the latest technologies to meet each client's unique needs. We
          take pride in continuously pushing the boundaries of creativity to
          deliver exceptional online experiences.
        </p>
      </div>
    </div>
  );
};

export default Projects;
