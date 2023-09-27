 
import "./contact.css";

const contact = () => {
  const email = "WebMorphers@gmail.com";

  return (
    <div className="contt">
      <h1 className="pconty">CONTACT</h1>
      <p className="pcont">
        We are always on the lookout for new challenges and opportunities to
        learn and grow as a team. If you have a project or idea that you think
        our team could help with, we would love to hear from you. Please feel
        free to get in touch via the contact button below or through any of our
        social media links.
      </p>
      <a href={`mailto:${email}`}>
        <button>Contact</button>
      </a>
    </div>
  );
};

export default contact;