const partners = [
  {
    id: 1,
    src: "/img/Partners_Logo/amplify_change.png",
    alt: "Amplify Change",
  },
  {
    id: 2,
    src: "/img/Partners_Logo/a2i-bangladesh-logo-png_seeklogo-320312.png",
    alt: "a2i Bangladesh",
  },
  { id: 3, src: "/img/Partners_Logo/brac-logo-big.png", alt: "BRAC" },
  {
    id: 4,
    src: "/img/Partners_Logo/csm_Gavi_logo_original_resolution_-_Chun_Yuen_Wong_086362983b.webp",
    alt: "Gavi",
  },
  { id: 5, src: "/img/Partners_Logo/Friendship-Logo.webp", alt: "Friendship" },
  { id: 6, src: "/img/Partners_Logo/GIZ.png", alt: "GIZ" },
  {
    id: 7,
    src: "/img/Partners_Logo/Government_Seal_of_Bangladesh.svg.png",
    alt: "Government of Bangladesh",
  },
  {
    id: 8,
    src: "/img/Partners_Logo/icddrb-Logo-Vector.svg-.png",
    alt: "icddr,b",
  },
  { id: 9, src: "/img/Partners_Logo/KIT.png", alt: "KIT" },
  {
    id: 10,
    src: "/img/Partners_Logo/Logo_SavetheChildren.png",
    alt: "Save the Children",
  },
  {
    id: 11,
    src: "/img/Partners_Logo/logo-netherlands-embassy.png",
    alt: "Netherlands Embassy",
  },
  {
    id: 12,
    src: "/img/Partners_Logo/MAX.FOUN_Logo_CMYK_2014_2-003.png",
    alt: "Max Foundation",
  },
  { id: 13, src: "/img/Partners_Logo/nuffic-logo1.png", alt: "Nuffic" },
  {
    id: 14,
    src: "/img/Partners_Logo/png-clipart-deltares-logo-delft-brand-font-blue-text.png",
    alt: "Deltares",
  },
  {
    id: 15,
    src: "/img/Partners_Logo/png-transparent-background-green-oxfam-logo-organization-social-inequality-confederation-oxfam-in-bangladesh-job.png",
    alt: "Oxfam",
  },
  {
    id: 16,
    src: "/img/Partners_Logo/SNV_Development_Organisation_logo.svg.png",
    alt: "SNV",
  },
  { id: 17, src: "/img/Partners_Logo/TNO.png", alt: "TNO" },
  { id: 18, src: "/img/Partners_Logo/UNICEF-Logo.png", alt: "UNICEF" },
  {
    id: 19,
    src: "/img/Partners_Logo/vrije-universiteit-amsterdam-logo-png_seeklogo-504772.png",
    alt: "Vrije Universiteit Amsterdam",
  },
  {
    id: 20,
    src: "/img/Partners_Logo/World_Bank-Logo.wine.svg",
    alt: "World Bank",
  },
  {
    id: 21,
    src: "/img/Partners_Logo/Actionaid_logo.svg",
    alt: "Actionaid",
  },
];

const OurPartner = () => {
  return (
    <div className="mil-bg-soft mil-p-0-170">
      <div className="container">
        <p className="mil-mb-100 mil-dark mil-up">
          Building Futures Together with Our Esteemed Partners
        </p>
        <div className="row">
          {partners.map((partner) => (
            <div key={partner.id} className="col-6 col-xl-3 mil-mb-30">
              <div className="mil-brand-frame mil-up">
                <img
                  loading="lazy"
                  src={partner.src}
                  alt={partner.alt}
                  style={
                    partner.id === 2
                      ? { width: "50%", margin: "0 auto", display: "block" }
                      : partner.id === 7
                      ? { width: "45%", margin: "0 auto", display: "block" }
                      : {}
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
