import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const projects = [
  {
    href: "work",
    image: "/img/please_project_pic/Please_Thumbnail-1.jpeg",
    title: "Please Project",
    subtitle: "Conceptualization & Project Design",
  },
  {
    href: "work",
    image: "/img/banner/dsip_project_pic.jpeg",
    title: "DSIP",
    subtitle: "Implementation & Coordination Support",
  },
  {
    href: "work",
    image: "https://html.bslthemes.com/moork/img/home-1/6.png",
    title: "Luminar Tower",
    subtitle: "Iconic Skyscrapers",
  },
  {
    href: "work",
    image: "https://html.bslthemes.com/moork/img/projects/1.jpg",
    title: "Luminar Tower",
    subtitle: "Iconic Skyscrapers",
  },
  {
    href: "work",
    image: "https://html.bslthemes.com/moork/img/projects/2.png",
    title: "Luminar Tower",
    subtitle: "Iconic Skyscrapers",
  },
];

const OurProjects = () => {
  return (
    <div className="mil-bg-soft mil-p-200-200">
      <div className="container mil-relative">
        {/* Section Header */}
        <div className="row">
          <div className="col-lg-6">
            <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
              OUR MOST RECENT PROJECTS
            </div>
            <h2 className="mil-mb-30 mil-up">Explore Our Projects</h2>
            <p className="mil-mb-100 mil-up">
              From striking skyscrapers to captivating interior spaces, each
              project reflects our dedication to innovation and creativity.
            </p>
          </div>
        </div>

        {/* Projects Slider */}
        <div className="row">
          <div className="col-lg-7">
            <Swiper
              {...sliderProps.milProjects1}
              className="swiper-container mil-projects-1"
            >
              {projects.map((project, index) => (
                <SwiperSlide
                  key={index}
                  className="swiper-slide"
                  data-swiper-parallax-scale="0.15"
                >
                  <Link
                    href={project.href}
                    className="mil-project-card mil-land"
                  >
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src={project.image}
                          alt={project.title}
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div
                      className="mil-descr mil-p-0"
                      data-swiper-parallax={-100}
                      data-swiper-parallax-opacity={0}
                    >
                      <h4 className="mil-mb-10">{project.title}</h4>
                      <p className="mil-mb-20">{project.subtitle}</p>
                      <span className="mil-btn mil-btn-sm">View Project</span>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="mil-slider-nav mil-position-1 mil-up">
          <div className="mil-nav-btn mil-prev mil-prev-1">
            <i className="fas fa-arrow-left" />
          </div>
          <div className="mil-nav-btn mil-next mil-next-1">
            <i className="fas fa-arrow-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
