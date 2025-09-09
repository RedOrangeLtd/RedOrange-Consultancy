const countersData = [
  {
    number: 60,
    suffix: "+",
    title: "Projects Completed",
    description:
      "Successfully delivered impactful projects across various sectors, demonstrating expertise and commitment to excellence.",
  },

  {
    number: 10,
    prefix: "+",
    title: "Years of Excellence",
    description:
      "More than a decade shaping the architectural future since our creation in 2014.",
  },
  {
    number: 60,
    prefix: "+",
    suffix: " Pro",
    title: "Team Diversity",
    description:
      "More than a decade shaping the architectural future since our creation in 2010.",
  },
];

const CounterItem = ({ prefix, number, suffix, title, description }) => (
  <div className="col-lg-3 mil-mb-50">
    <h3 className="mil-accent mil-mb-10">
      {prefix && prefix}{" "}
      <span className="mil-counter" data-number={number}>
        {number}
      </span>{" "}
      {suffix && suffix}
    </h3>
    <p className="mil-dark mil-mb-15">{title}</p>
    <p>{description}</p>
  </div>
);

const Counter = () => {
  return (
    <div className="mil-bg-soft mil-p-0-150">
      <div className="container">
        <div className="row justify-content-between">
          {countersData.map((counter, index) => (
            <CounterItem key={index} {...counter} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
