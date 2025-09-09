const Footer = () => {
  return (
    <footer>
      <div className="container mil-p-200-100">
        <div className="row">
          <div className="col-xl-3 mil-mb-100">
            <div className="mil-footer-logo mil-up">
              <img
                loading="lazy"
                src="img/RedOrange_White_Logo.png"
                alt="red_orange_black_white"
              />
            </div>
          </div>
          <div className="col-xl-3 mil-mb-100">
            <h6 className="mil-soft mil-mb-30 mil-up">NETHERLANDS OFFICE</h6>
            <p className="mil-soft-2 mil-mb-20 mil-up">
              Red Orange Holdings B.V.
              <br /> Stevinweg 58
              <br /> 1221 AE Hilversum
            </p>
            <div className="mil-up">
              <a href={+31636392} className="mil-light">
                Phone: +31636392
              </a>
            </div>
          </div>
          <div className="col-xl-3 mil-mb-100">
            <h6 className="mil-soft mil-mb-30 mil-up">BANGLADESH OFFICE</h6>
            <p className="mil-soft-2 mil-mb-20 mil-up">
              Red Orange Limited <br />
              House 102 Block F, Road 3 <br /> Banani, Dhaka 1213
            </p>
            <div className="mil-up">
              <a href={+8801714080469} className="mil-light">
                Phone: +8801714-080469
              </a>
            </div>
          </div>
          <div className="col-xl-3 mil-mb-100">
            <h6 className="mil-soft mil-mb-30 mil-up">General Inquiries</h6>
            <p className="mil-soft-2 mil-mb-20 mil-up">
              Have questions or need <br />
              assistance?
            </p>
            <div className="mil-up">
              <a href="mailto:info@redorangecom.com" className="mil-light">
                info@redorangecom.com
              </a>
            </div>
          </div>
          <div className="col-xl-3 mil-mb-100">
            <h6 className="mil-soft mil-mb-30 mil-up">Stay Connected</h6>
            <ul
              style={{ display: "flex", justifyContent: "start", gap: "30px" }}
              className=" mil-footer-list"
            >
              <li className="mil-up ">
                <a
                  target="blank"
                  href="https://www.facebook.com/redorangecom"
                  className="mil-light"
                >
                  Facebook
                </a>
              </li>
              <li className="mil-up ">
                <a
                  target="blank"
                  href="https://twitter.com/"
                  className="mil-light"
                >
                  X.com
                </a>
              </li>
              <li className="mil-up">
                <a
                  target="blank"
                  href="https://www.linkedin.com/company/redorange-comms/"
                  className="mil-light"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mil-p-0-200">
        <div className="mil-footer-bottom mil-up">
          <p className="mil-text-14 mil-up">© 2024 RedOrange Consultancy</p>
          <p className="mil-text-14 mil-up">Developed by RedOrange ICT</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
