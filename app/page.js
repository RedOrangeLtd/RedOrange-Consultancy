"use client";
import MoorkLayout from "@/layout/MoorkLayout";
import Link from "next/link";
import Banner from "./components/Banner";
import OurPartner from "./components/OurPartner";
import OurProjects from "./components/OurProjects";
import Teams from "./components/Teams";
import WhatWeDO from "./components/WhatWeDO";
const page = () => {
  return (
    <MoorkLayout header={1}>
      {/* banner */}
      <Banner />
      {/* banner end */}

      {/* about */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                About us
              </div>
              <h2 className="mil-mb-30 mil-up">
                Shaping the architectural future
              </h2>
              <p className="mil-mb-50 mil-up">
                Welcome to Møork, where architectural innovation meets a legacy
                of excellence. Founded in 2010, we have been at the forefront of
                redefining urban landscapes, combining creativity and addressing
                the changing needs of contemporary living.
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
                      src="https://html.bslthemes.com/moork/img/home-1/2.png"
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
                      src="https://html.bslthemes.com/moork/img/home-1/3.png"
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
      {/* about end */}

      {/* projects */}
      <OurProjects />
      {/* projects end */}

      {/* counters */}
      <div className="mil-bg-soft mil-p-0-150">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 mil-mb-50">
              <h3 className="mil-accent mil-mb-10">
                +{" "}
                <span className="mil-counter" data-number={10}>
                  10
                </span>
              </h3>
              <p className="mil-dark mil-mb-15">Years of Excellence</p>
              <p>
                More than a decade shaping the architectural future since our
                creation in 2010.
              </p>
            </div>
            <div className="col-lg-3 mil-mb-50">
              <h3 className="mil-accent mil-mb-10">
                <span className="mil-counter" data-number={10}>
                  99
                </span>{" "}
                %
              </h3>
              <p className="mil-dark mil-mb-15">Gender equality rate</p>
              <p>
                Emphasizes our commitment to a diverse and inclusive work
                environment.
              </p>
            </div>
            <div className="col-lg-3 mil-mb-50">
              <h3 className="mil-accent mil-mb-10">
                +
                <span className="mil-counter" data-number={10}>
                  60
                </span>{" "}
                Pro
              </h3>
              <p className="mil-dark mil-mb-15">Team Diversity</p>
              <p>
                More than a decade shaping the architectural future since our
                creation in 2010.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* counters end */}

      {/* projects */}
      <WhatWeDO />
      {/* projects end */}

      {/* team */}
      <Teams />
      {/* team end */}

      {/* brands */}
      <OurPartner />
      {/* brands end */}

      {/* about */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                ENVIRONMENTAL RESPONSIBILITY
              </div>
              <h2 className="mil-mb-30 mil-up">
                Sustainable Architecture, Lasting Impact
              </h2>
              <p className="mil-mb-50 mil-up">
                Explore our dedication to green architecture, where innovation
                meets environmental stewardship, creating spaces that stand the
                test of time while preserving the planet.
              </p>
              <div className="mil-up">
                <Link href="about" className="mil-btn mil-btn-sm">
                  Know us more
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-100">
              <div className="mil-illustration-5">
                <div className="mil-image-position mil-up">
                  <div className="mil-image-frame">
                    <img
                      loading="lazy"
                      // src="img/home-1/10.png"
                      src="https://html.bslthemes.com/moork/img/home-1/10.png"
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
                      // src="img/home-1/11.png"
                      src="https://html.bslthemes.com/moork/img/home-1/11.png"
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
      {/* about end */}

      {/* call to action */}
      <div className="mil-p-200-200 mil-bg-accent">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="mil-suptitle mil-sm mil-light mil-mb-30 mil-up">
                TAKE A LOOK AT
              </div>
              <h2 className="mil-h1 mil-light mil-mb-30 mil-up">
                Сontact us to discuss the details
              </h2>
              <p className="mil-light mil-mb-50 mil-up">
                Contact us today to embark on a journey of collaborative design
                and architectural brilliance.
              </p>
              <div className="mil-up">
                <Link
                  href="contact"
                  className="mil-btn mil-btn-border mil-light"
                >
                  Discover more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
    </MoorkLayout>
  );
};
export default page;
