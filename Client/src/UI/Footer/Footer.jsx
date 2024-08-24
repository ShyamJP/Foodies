import './footer.css'

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer  text-secondary mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <h5 className="text-secondary text-uppercase mb-4">FOODIES</h5>
            <p className="mb-4">Contact through below detail</p>
            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i> Rajkot , Gujarat , India</p>
            <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i> shyam.j.pankhaniya05@gmail.com</p>
            <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+91 9977999555</p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">Quick Order</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-secondary mb-2" href="/home"><i className="fa fa-angle-right mr-2"></i>Home</a>
                  <a className="text-secondary mb-2" href="/product"><i className="fa fa-angle-right mr-2"></i>Our Products</a>
                  <a className="text-secondary mb-2" href="/cart"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                  <a className="text-secondary mb-2" href="/order"><i className="fa fa-angle-right mr-2"></i>Your Orders</a>
                  <a className="text-secondary" href="/contact"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">Order Your Food</h5>
                <div className="d-flex flex-column justify-content-start">
                  <span><i className="fa fa-angle-right mr-2"></i>Gujarati</span>
                  <span><i className="fa fa-angle-right mr-2"></i>Panjabi</span>
                  <span><i className="fa fa-angle-right mr-2"></i>italian</span>
                  <span><i className="fa fa-angle-right mr-2"></i>Snacks</span>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                {/* <h5 className="text-secondary text-uppercase mb-4">Newsletter</h5> */}
                {/* <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p> */}
               
                <h6 className="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
                <div id="icon">
                  <a href=" https://www.linkedin.com/in/shyam-pankhaniya-3a80ab231/" title="linkedin">
                    <h2><i class="fa-brands fa-linkedin" title="Viite Linkedin Profile"></i></h2>
                  </a>
                  <a href="https://github.com/ShyamJP" title="github">
                    <h2><i class="fa-brands fa-github" style={{ "color": "#10f000" }} title="Viite Github Profile"></i></h2>
                  </a>
                  <a href="https://www.instagram.com/shyam_0665?igsh=czhlZ2w1dDU3aXh6" title="insta">
                    <h2><i class="fa-brands fa-instagram" style={{ "color": "#f000dc" }} title="Viite insta Profile"></i></h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row border-top mx-xl-5 py-4" style={{ "border-color": "rgba(256, 256, 256, .1) !important" }}>
          <div class="col-md-12  px-xl-0">
            <p class="mb-md-0 text-center text-md-left text-secondary w-100">
              &copy; <a className="text-primary" href="/">FOODIES</a>. All Rights Reserved. Designed by
              <a className="text-primary" href="https://htmlcodex.com">Shyam Pankhaniy</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;