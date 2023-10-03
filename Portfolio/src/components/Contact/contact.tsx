 
import "./contact.css";

const contact = () => {
  const email = "WebMorphers@gmail.com";

  return (
    <div className="contt bg-gradient-to-b from-yellow-400 via-red-400 to-red-500">
      <h1 className="pconty xs:text-[50px] sm:text-[60px] md:text-[66px]">CONTACT</h1>
      <p className="pcont xs:text-[18px] sm:text-[20px] md:text-[20px] ">
        We are always on the lookout for new challenges and opportunities to
        learn and grow as a team. If you have a project or idea that you think
        our team could help with, we would love to hear from you. Please feel
        free to get in touch via the contact button below or through any of our
        social media links.
      </p>
      <a className="pt-7" href={`mailto:${email}`}>
      <button className="bg-rose-950  text-rose-400 border border-rose-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className="bg-rose-400 shadow-rose-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Contact
</button>
      </a>
    </div>
  );
};

export default contact;