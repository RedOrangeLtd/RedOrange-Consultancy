import Link from "next/link";

const Banner = () => {
  return (
    <div className="mil-banner mil-banner-1 mil-bg-soft">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="mil-banner-text-frame">
              <div className="mil-banner-text">
                <div className="mil-suptitle mil-mb-30">CONSULTANCY</div>
                <h1 className="mil-display-2 mil-mb-60">
                  Making challenges into strong solutions
                </h1>
                <Link href="works-1" className="mil-btn mil-btn-border">
                  Explore our projects
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mil-banner-image-frame">
              <img
                loading="lazy"
                src="https://html.bslthemes.com/moork/img/home-1/1.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
