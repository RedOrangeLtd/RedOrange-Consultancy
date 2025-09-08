import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [
  {
    name: "Arnob Chakrabarty",
    role: "Managing Director",
    image: "/img/ROTEAM/arnobweb-300x270.jpg",
    link: "/about",
  },
  {
    name: "Jannatul Munia",
    role: "Director Strategy",
    image: "/img/ROTEAM/Jannat.jpeg",
    link: "/about",
  },
  {
    name: "Mahmud Haider",
    role: "Creative Director",
    image: "/img/ROTEAM/haiderweb.jpg",
    link: "/about",
  },
  {
    name: "Mazharul Islam Rupok",
    role: "General Manager",
    image: "/img/ROTEAM/Rupok-300x270.png",
    link: "/about",
  },
  {
    name: "Samiul Islam",
    role: "Deputy Director Operations",
    image: "/img/ROTEAM/samiul-300x270.jpg",
    link: "/about",
  },
  {
    name: "Faizunnesa Shabnaz",
    role: "Management Coordinator",
    image: "/img/ROTEAM/shabnz.jpg",
    link: "/about",
  },
  {
    name: "Shamima Nasrin",
    role: "Manager, Finance and Accounts",
    image: "/img/ROTEAM/shamima_nasrin-233x300.jpeg",
    link: "/about",
  },
  {
    name: "Sheikh Reshad Karim",
    role: "Senior Officer, Finance & Accounts",
    image: "/img/ROTEAM/Sheikh-Reshad-Karim.jpg",
    link: "/about",
  },
  {
    name: "Jibon Kumar Das",
    role: "Senior Animation Artist",
    image: "/img/ROTEAM/jibonweb1.jpg",
    link: "/about",
  },
  {
    name: "Sajedul Karim",
    role: "Senior Copywriter",
    image: "/img/ROTEAM/sajedul_karim_bw.jpg",
    link: "/about",
  },
  {
    name: "Sabuj Miah",
    role: "Assistant Creative Director",
    image: "/img/ROTEAM/sabujweb.jpg",
    link: "/about",
  },
  {
    name: "Oindrila Chakraborty",
    role: "Manager, Operations",
    image: "/img/ROTEAM/Oindrila-Chakraborty.jpg",
    link: "/about",
  },
  {
    name: "Abdullah Al Kafi",
    role: "Senior Communication Executive",
    image: "/img/ROTEAM/Kafi.jpg",
    link: "/about",
  },
  {
    name: "Banapriya Chakma",
    role: "Senior Video Editor",
    image: "/img/ROTEAM/banapriya-300x270.jpg",
    link: "/about",
  },
  {
    name: "Zilani Choudhury",
    role: "Senior Officer, Planning & Coordination",
    image: "/img/ROTEAM/Zilani-Choudhuri-300x270.jpg",
    link: "/about",
  },
  {
    name: "Ruhul Amin",
    role: "Junior Officer, Admin",
    image: "/img/ROTEAM/ruhulweb-300x270.jpg",
    link: "/about",
  },
  {
    name: "Mamun Alam Hridoy",
    role: "Junior Officer, Admin",
    image: "/img/ROTEAM/hridoy-300x270.jpg",
    link: "/about",
  },
  {
    name: "Rajib Hossain",
    role: "Junior Officer, Admin",
    image: "/img/ROTEAM/rajib.jpeg",
    link: "/about",
  },
  {
    name: "Nishat Fawzia",
    role: "Copywriter",
    image: "/img/ROTEAM/nishat_fawzia.jpg",
    link: "/about",
  },
  {
    name: "Nishat Tasnim Suchita",
    role: "Officer, Strategy",
    image: "/img/ROTEAM/suchita.jpg",
    link: "/about",
  },
  {
    name: "Pinky Chiran",
    role: "Production Assistant",
    image: "/img/ROTEAM/pinky.jpg",
    link: "/about",
  },
  {
    name: "Alok Kumar Majumder",
    role: "Director, Programme and Operations",
    image: "/img/ROTEAM/alok.jpg",
    link: "/about",
  },
  {
    name: "Dr. Farhana Huq",
    role: "Director - Health Communications",
    image: "/img/ROTEAM/farhana.jpg",
    link: "/about",
  },
  {
    name: "Dr. Halida Hanum Akhter",
    role: "Senior Advisor for Gender and SRHR",
    image: "/img/ROTEAM/Halida.jpg",
    link: "/about",
  },
  {
    name: "Frans Jennekens",
    role: "Strategic Advisor",
    image: "/img/ROTEAM/fransweb.jpg",
    link: "/about",
  },
  {
    name: "Rutger-Jan Schoen",
    role: "Strategic Communications Advisor",
    image: "/img/ROTEAM/RJ.jpg",
    link: "/about",
  },
  {
    name: "Dirk Smits",
    role: "Senior Program Advisor",
    image: "/img/ROTEAM/dirk.jpg",
    link: "/about",
  },
  {
    name: "Ella de Voogd",
    role: "Senior Advisor",
    image: "/img/ROTEAM/ella-de-voogd-300x270.jpg",
    link: "/about",
  },
  {
    name: "Irene Bartelds",
    role: "Strategic Communications Advisor",
    image: "/img/ROTEAM/ireneweb-300x270.jpg",
    link: "/about",
  },
  {
    name: "Mahfuzul Hasib Auny",
    role: "Manager, Client Relations",
    image: "/img/ROTEAM/Auny.png",
    link: "/about",
  },
  {
    name: "Moinul Islam",
    role: "Junior Web Developer",
    image: "/img/ROTEAM/Moinul.png",
    link: "/about",
  },
  {
    name: "Sumaiya Jahan",
    role: "Project Coordinator, ICT",
    image: "/img/ROTEAM/Sumaiya.png",
    link: "/about",
  },
  {
    name: "Jabed Hossain",
    role: "Full Stack Web Developer",
    image: "/img/ROTEAM/Jabed.png",
    link: "/about",
  },
  {
    name: "Syeda Sharika Arafin",
    role: "Coordinator, Client Relations",
    image: "/img/ROTEAM/Sarika.jpg",
    link: "/about",
  },
  {
    name: "Mehedi Hasan Mouaz",
    role: "Senior Officer Strategy",
    image: "/img/ROTEAM/Muaz.jpeg",
    link: "/about",
  },
  {
    name: "Rifa Tamanna",
    role: "Share-Net Officer",
    image: "/img/ROTEAM/RIFA-TAMANNA.jpg",
    link: "/about",
  },
  {
    name: "Tahzin Munir",
    role: "Intern",
    image: "/img/ROTEAM/Tahzin-Munir-169x300.jpg",
    link: "/about",
  },
  {
    name: "Ishrat Jahan Shwapnil",
    role: "Graphic Designer",
    image: "/img/ROTEAM/Shawpnil.jpeg",
    link: "/about",
  },
];

const TeamCard = ({ member }) => (
  <div className="mil-team-slide">
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

        {/* Team Slider */}
        <div className="mil-team-slider-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".mil-slider-prev",
              nextEl: ".mil-slider-next",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="mil-team-swiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <TeamCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="mil-slider-navigation">
            <button
              className="mil-slider-btn mil-slider-prev"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="mil-slider-btn mil-slider-next"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mil-team-slider-wrapper {
          position: relative;
        }

        .mil-team-swiper {
          padding-bottom: 80px;
        }

        .mil-team-slide {
          height: auto;
        }

        .mil-slider-navigation {
          display: flex;
          justify-content: flex-start;
          gap: 16px;
          margin-top: 40px;
        }

        .mil-slider-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border: 2px solid #e5e7eb;
          border-radius: 50%;
          background: #ffffff;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .mil-slider-btn:hover {
          border-color: #d94625;
          color: #d94625;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(217, 70, 37, 0.2);
        }

        .mil-slider-btn:active {
          transform: translateY(0);
        }

        .mil-slider-btn:before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.5s;
        }

        .mil-slider-btn:hover:before {
          left: 100%;
        }

        .mil-slider-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .mil-slider-btn:disabled:hover {
          border-color: #e5e7eb;
          color: #6b7280;
          transform: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .mil-slider-btn {
            width: 48px;
            height: 48px;
          }

          .mil-slider-navigation {
            gap: 12px;
            margin-top: 30px;
          }
        }

        /* Custom swiper overrides */
        .mil-team-swiper .swiper-slide {
          height: auto;
        }

        /* Accessibility improvements */
        .mil-slider-btn:focus {
          outline: 2px solid #d94625;
          outline-offset: 2px;
        }

        .mil-slider-btn:focus:not(:focus-visible) {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Teams;
