const Services = () => {
  const services = [
    {
      title: "Consultancy",
      items: [
        "Project co-creation: Concept development, research",
        "Campaign strategy: Social and behavioral change communication, advocacy, awareness raising",
        "Project management: Coordination, strategy execution, impact assessment",
      ],
    },
    {
      title: "Training & Development",
      items: [
        "Training: Behavioral change, advocacy, awareness raising",
        "Media engagement: Branding, media training (online, print, radio, TV)",
        "Research: Action based, academic, quantitative, qualitative",
      ],
    },
    {
      title: "Digital Solutions",
      items: [
        "Digital marketing: Social media engagement, online outreach, online promotions",
        "ICT solutions: Websites, knowledge platforms, mobile apps, e-commerce, content management",
        "Graphic design: Project branding, production, printing, creative presentation",
      ],
    },
    {
      title: "Creative Services",
      items: [
        "Films and animations: Promotional films, documentaries, animations, tv-commercials",
        "Content development: Online content, social media content, booklets, brochures",
        "Event management: Press conferences, seminars, project launch, fairs",
      ],
    },
  ];

  return (
    <div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-4 fw-bold mb-3" style={{ color: "#d94625" }}>
              OUR SERVICES
            </h2>
            <div
              className="mx-auto mb-4"
              style={{
                width: "60px",
                height: "4px",
                backgroundColor: "#d94625",
                borderRadius: "2px",
              }}
            ></div>
            <p className="lead text-muted mb-0 col-lg-8 mx-auto">
              Comprehensive solutions for your project needs, from concept to
              execution
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-12">
              <div
                className="card h-100 shadow-sm border-0 position-relative overflow-hidden"
                style={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(217, 70, 37, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 10px rgba(0,0,0,0.1)";
                }}
              >
                {/* Card Header */}
                <div
                  className="card-header border-0 text-white text-center py-4"
                  style={{ backgroundColor: "#d94625" }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    <div
                      className="rounded-circle"
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "white",
                        boxShadow:
                          "0 0 0 4px rgba(255,255,255,0.3), 0 0 0 8px rgba(255,255,255,0.2)",
                      }}
                    ></div>
                  </div>
                  <h4 className="mb-0 fw-bold">{service.title}</h4>
                </div>

                {/* Card Body */}
                <div className="card-body p-4">
                  <ul className="list-unstyled mb-0">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="mb-3 d-flex align-items-start"
                      >
                        <div
                          className="flex-shrink-0 me-3 mt-1"
                          style={{
                            width: "6px",
                            height: "6px",
                            backgroundColor: "#d94625",
                            borderRadius: "50%",
                          }}
                        ></div>
                        <span className="text-muted small lh-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle accent line at bottom */}
                <div
                  style={{
                    height: "3px",
                    backgroundColor: "#d94625",
                    opacity: "0.1",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
