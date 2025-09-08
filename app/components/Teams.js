import Link from "next/link";

const teamMembers = [
  {
    name: "Eddy Smith",
    role: "Creative Director",
    image: "https://html.bslthemes.com/moork/img/about/team-1/1.png",
    link: "/about",
  },
  {
    name: "Maria Rodriguez",
    role: "Principal Architect",
    image: "https://html.bslthemes.com/moork/img/about/team-1/2.png",
    link: "/about",
  },
  {
    name: "David Chen",
    role: "Urban Design Specialist",
    image: "https://html.bslthemes.com/moork/img/about/team-1/3.png",
    link: "/about",
  },
  {
    name: "Lisa Walker",
    role: "Interior Architect",
    image: "https://html.bslthemes.com/moork/img/about/team-1/4.png",
    link: "/about",
  },
];

const TeamCard = ({ member }) => (
  <div className="col-sm-6 col-lg-3 mil-mb-30">
    <Link href={member.link} className="mil-team-card mil-long">
      <div className="mil-cover-frame mil-up">
        <div className="mil-hover-frame">
          <img
            loading="lazy"
            src={member.image}
            alt={member.name}
            data-value-1={1}
            data-value-2="1.1"
            className="mil-scale-img"
          />
        </div>
      </div>
      <div className="mil-descr mil-up">
        <h6 className="mil-mb-10">{member.name}</h6>
        <p>{member.role}</p>
      </div>
    </Link>
  </div>
);

const Teams = () => {
  return (
    <div className="mil-p-200-170 mil-bg-soft">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 mil-text-center">
            <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
              OUR PROJECTS
            </div>
            <h2 className="mil-mb-30 mil-up">Innovation in Action</h2>
            <p className="mil-mb-100 mil-up">
              Our passion for architecture and urban design is reflected in the
              projects we have carried out over the years.
            </p>
          </div>
        </div>

        {/* Team Cards */}
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
