 
import "./Projects.css";
import Nexcent from '../../assets/nexcent.png'
import Notapark from '../../assets/notapark.png'


const projects=[{
  img:Nexcent,
  title: "Nexcent",
  subtitle:"Responsive Landing Page",
  description:"Responsive Landing Page Design | Website Home Page Design | Agency Website UI Design",
  link:"https://nexcent-pi.vercel.app/",
},
{
  img:Notapark,
  title: "Notapark",
  subtitle:"Hoodies Landing Page",
  description:"Responsive Landing Page Design | Website Home Page Design | Agency Website UI Design",
  link:"https://notapark.vercel.app/",
},]


const Projects = () => {


  return (
    <div className="lg:py-[10%] bg-gradient-to-b from-amber-300 via-amber-400 to-yellow-400 container mx-auto pt-20 flex items-center justify-center flex-col min-w-full">
      <h1 className="xs:text-[50px] sm:text-[60px] md:text-[66px]">Projects</h1>
      <div className="mt-4 line-height-18 word-spacing-4px px-[12%] align-center justify-center text-center" id="te">
        
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
      <div>
        <div className="grid md:grid-cols-2 xl:gap-20 gap-20 md:gap-10 md:m-16 p-8 lg:m-24 m-8 ">
          {projects.map(project =>(
            <div className="flex flex-col px-4 md:px-10 py-3 rounded-xl shadow-2xl items-center gap-5 hover:bg-yellow-400 cursor-pointer">
              <div>
                <img src={project.img} alt="" />
              </div>
              <div className="text-center flex flex-col justify-center lg:px-14 items-center h-full gap-2 te">
                <h1 className="text-2xl font-semibold">{project.title}</h1>
                <h2 className="text-xl ">{project.subtitle}</h2>
                <p className="text-sm opacity-80 ">{project.description}</p>
                <a className="px-2 py-3 bg-gray-400 rounded w-max hover:bg-gray-500 " href={project.link}>Live preview</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
