import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="mil-p-200-100">
      <div className="container">
        <div className="row flex-sm-row-reverse justify-content-between align-items-center">
          <div className="col-lg-5 mil-mb-100">
            <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
              About us
            </div>
            <h2 className="mil-mb-30 mil-up">
              Shaping problems into real progress
            </h2>
            <p className="mil-mb-50 mil-up">
              RedOrange Consultancy, a wing of RedOrange, provides expert
              services in project design, management, and implementation across
              infrastructure and social sectors. It combines grassroots insight
              with global expertise to deliver context-specific, impact-driven
              solutions.
            </p>
            <div className="mil-up">
              <Link href="about" className="mil-btn mil-btn-sm">
                Know us more
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mil-mb-100">
            <div className="mil-illustration-1">
              <div className="mil-image-position mil-up">
                <div className="mil-image-frame">
                  <img
                    loading="lazy"
                    // src="img/home-1/2.png"
                    src="/img/about/business-team-meeting-and-presenting-business-resu-2025-03-07-21-45-26-utc.jpg"
                    alt="img"
                    data-value-1={1}
                    data-value-2="1.1"
                    className="mil-scale-img"
                  />
                </div>
              </div>
              <div className="mil-image-position mil-up">
                <div className="mil-image-frame">
                  <img
                    loading="lazy"
                    // src="img/home-1/3.png"
                    src="/img/about/financial-report-2025-03-16-03-18-02-utc.jpg"
                    alt="img"
                    data-value-1={1}
                    data-value-2="1.1"
                    className="mil-scale-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
