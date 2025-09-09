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
                  Your Partner for Impact
                </h1>
                <Link href="works-1" className="mil-btn mil-btn-border">
                  Explore our projects
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="">
              <img
                loading="lazy"
                // src="/img/banner/white-vase-on-wooden-table-with-fancy-dining-room-2024-10-18-16-57-36-utc.jpg"
                src="/img/banner/banner-butterfly.svg"
                alt="image"
                style={{
                  width: "500px",
                  marginTop: "280px",
                  marginLeft: "130px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
