import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const projects = [
  {
    href: "work",
    image: "/img/what_we_do/what_we_do_1.webp",
    title: "Conceptualization & Project Design",
    subtitle: "Shaping ideas into impactful solutions",
  },
  {
    href: "work",
    image: "/img/what_we_do/what_we_do_2.webp",
    title: "Pre-Feasibility, Feasibility & Planning Support",
    subtitle: "Laying the foundation for success",
  },
  {
    href: "work",
    image: "/img/what_we_do/what_we_do_3.webp",
    title: "Implementation & Coordination Support",
    subtitle: "Turning plans into real-world action",
  },
  {
    href: "work",
    image: "/img/what_we_do/what_we_do_4.webp",
    title: "Research, Monitoring, Evaluation & Learning (MEL)",
    subtitle: "Driving impact through knowledge",
  },
  {
    href: "work",
    image: "/img/what_we_do/what_we_do_5.webp",
    title: "Policy Engagement & Sustainability",
    subtitle: "Building pathways for long-term change",
  },
  {
    href: "work",
    image: "/img/what_we_do/what_we_do_6.webp",
    title: "Creating Business Opportunities",
    subtitle: "Empowering growth and innovation",
  },
];

// Reusable card
const ProjectCard = ({ href, image, title, subtitle }) => (
  <Link href={href} className="mil-project-card mil-land">
    <div className="mil-cover-frame mil-up">
      <div className="mil-hover-frame">
        <img
          loading="lazy"
          src={image}
          alt={title}
          data-value-1={1}
          data-value-2="1.1"
          className="mil-scale-img"
        />
      </div>
    </div>
    <div className="mil-descr mil-with-bg mil-inner mil-hover">
      <h4 className="mil-mb-10">{title}</h4>
      <p>{subtitle}</p>
    </div>
  </Link>
);

const WhatWeDO = () => {
  return (
    <div className="mil-p-200-200">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-lg-6 mil-text-center">
            <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
              INNOVATION AND INSPIRATION
            </div>
            <h2 className="mil-mb-30 mil-up">What We Do</h2>
            <p className="mil-mb-100 mil-up">
              Our work is about people. We listen, we understand, and we turn
              challenges into meaningful communication that inspires change and
              builds stronger connections.
            </p>
          </div>
        </div>

        {/* Projects Slider */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Swiper
              {...sliderProps.milProjects2}
              className="swiper-container mil-projects-2"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <ProjectCard {...project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDO;
