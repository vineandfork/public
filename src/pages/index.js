import React, { Fragment } from 'react'
import Img from 'gatsby-image'
// import Expando from '../components/expando'

// {
/* <section id="wines" className="content-section text-center bg-light">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 style={{ color: 'black' }}>wines</h2>
                <div className="row">
                  <div className="col-md-4 col-sm-6 portfolio-item">
                    <a
                      className="portfolio-link"
                      data-toggle="modal"
                      href="#portfolioModal1"
                    >
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fas fa-plus fa-3x" />
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="img/portfolio/01-thumbnail.jpg"
                        alt
                      />
                    </a>

                    <div className="portfolio-caption">
                      <Expando clicker={<h4>Threads</h4>}>
                        <p className="text-muted">Illustration</p>
                      </Expando>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 portfolio-item">
                    <a
                      className="portfolio-link"
                      data-toggle="modal"
                      href="#portfolioModal2"
                    >
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fas fa-plus fa-3x" />
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="img/portfolio/02-thumbnail.jpg"
                        alt
                      />
                    </a>
                    <div className="portfolio-caption">
                      <h4>Explore</h4>
                      <p className="text-muted">Graphic Design</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 portfolio-item">
                    <a
                      className="portfolio-link"
                      data-toggle="modal"
                      href="#portfolioModal3"
                    >
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fas fa-plus fa-3x" />
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="img/portfolio/03-thumbnail.jpg"
                        alt
                      />
                    </a>
                    <div className="portfolio-caption">
                      <h4>Finish</h4>
                      <p className="text-muted">Identity</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 portfolio-item">
                    <a
                      className="portfolio-link"
                      data-toggle="modal"
                      href="#portfolioModal4"
                    >
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fas fa-plus fa-3x" />
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="img/portfolio/04-thumbnail.jpg"
                        alt
                      />
                    </a>
                    <div className="portfolio-caption">
                      <h4>Lines</h4>
                      <p className="text-muted">Branding</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 portfolio-item">
                    <a
                      className="portfolio-link"
                      data-toggle="modal"
                      href="#portfolioModal5"
                    >
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fas fa-plus fa-3x" />
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="img/portfolio/05-thumbnail.jpg"
                        alt
                      />
                    </a>
                    <div className="portfolio-caption">
                      <h4>Southwest</h4>
                      <p className="text-muted">Website Design</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 portfolio-item">
                    <a
                      className="portfolio-link"
                      data-toggle="modal"
                      href="#portfolioModal6"
                    >
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fas fa-plus fa-3x" />
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="img/portfolio/06-thumbnail.jpg"
                        alt
                      />
                    </a>
                    <div className="portfolio-caption">
                      <h4>Window</h4>
                      <p className="text-muted">Photography</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-lowercase">reviews</h2>
              <h3 className="section-subheading text-muted">
                What our customers have to say about us.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/1.jpg"
                      alt
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Alix Kram</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                        temporibus qui quibusdam, recusandae sit vero unde, sed,
                        incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/2.jpg"
                      alt
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Gregg</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                        temporibus qui quibusdam, recusandae sit vero unde, sed,
                        incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/3.jpg"
                      alt
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Mindy</h4>
                      <h4 className="subheading">Transition to Full Service</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                        temporibus qui quibusdam, recusandae sit vero unde, sed,
                        incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/4.jpg"
                      alt
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>July 2014</h4>
                      <h4 className="subheading">Phase Two Expansion</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                        temporibus qui quibusdam, recusandae sit vero unde, sed,
                        incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>
                      Be Part
                      <br />Of Our
                      <br />Story!
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */
// }
// {/* <section id="contact" className="content-section text-center">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 mx-auto">
//               <h2>Contact Start Bootstrap</h2>
//               <p>
//                 Feel free to leave us a comment on the
//                 <a href="http://startbootstrap.com/template-overviews/grayscale/">
//                   Grayscale template overview page
//                 </a>
//                 on Start Bootstrap to give some feedback about this theme!
//               </p>
//               <ul className="list-inline banner-social-buttons">
//                 <li className="list-inline-item">
//                   <a
//                     href="https://twitter.com/SBootstrap"
//                     className="btn btn-default btn-lg"
//                   >
//                     <i className="fa fa-twitter fa-fw" />
//                     <span className="network-name">Twitter</span>
//                   </a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a
//                     href="https://github.com/BlackrockDigital/startbootstrap"
//                     className="btn btn-default btn-lg"
//                   >
//                     <i className="fa fa-github fa-fw" />
//                     <span className="network-name">Github</span>
//                   </a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a
//                     href="https://plus.google.com/+Startbootstrap/posts"
//                     className="btn btn-default btn-lg"
//                   >
//                     <i className="fa fa-google-plus fa-fw" />
//                     <span className="network-name">Google+</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section> */}

const IndexPage = ({ data }) => {
  return (
    <Fragment>
      <header className="masthead">
        <Img
          style={{
            position: `absolute`,
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,
            height: '100%',
          }}
          sizes={data.mainImage.sizes}
        />

        <div className="intro-body">
          <div className="container">
            <Img
              style={{
                position: `absolute`,
                top: 0,
                left: 0,
                right: 0,
                zIndex: -1,
                width: 200,
                height: 200,
                margin: '110px auto',
              }}
              sizes={data.logo.sizes}
            />
            <div className="row">
              <div className="col-lg-4 col-xl-7 mx-auto">
                <h1 className="brand-heading mt-9">vine &amp; fork</h1>
                <p className="intro-text">wine concierge service</p>
                <a href="#about" className="btn btn-circle js-scroll-trigger">
                  <i className="fa fa-angle-double-down animated" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="about" className="content-section text-center">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 style={{ color: 'black' }}>about</h2>

                <p>
                  At vine &amp; fork we bring Sommelier selected wines directly
                  to the hands of the consumer. Our goal is to bring boutique
                  not commercially distributed wines to meet the everyday
                  consumers need whether it’s for personal use or a large event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="download-section content-section text-center"
        style={{ position: 'relative', backgroundColor: null }}
      >
        <Img
          style={{
            position: `absolute`,
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,
            height: '100%',
            // width: this.props.windowWidth,
          }}
          sizes={data.secondaryImage.sizes}
        />
        <div
          className="container"
          style={{
            textShadow:
              '-1px 0 #00000061, 0 1px #00000061, 1px 0 #00000061, 0 -1px #00000061',
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>contact</h2>
              <p>Follow us on instagram or reach out by email</p>
              <ul className="list-inline banner-social-buttons">
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/vineandfork/"
                    className="btn btn-default btn-lg"
                  >
                    <i className="fa fa-instagram fa-fw" />
                    <span className="network-name">Instagram</span>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a
                    href="mailto:angelina@vineandfork.com"
                    className="btn btn-default btn-lg"
                  >
                    <i className="fa fa-envelope fa-fw" />
                    <span className="network-name">Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query indexPage {
    mainImage: imageSharp(id: { regex: "/rolling/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    secondaryImage: imageSharp(id: { regex: "/contact/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    logo: imageSharp(id: { regex: "/logo/" }) {
      sizes(maxWidth: 441) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`
