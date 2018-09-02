import React, { Fragment } from 'react'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => {
  return (
    <Fragment>
      {console.log(data)}

      <header className="masthead">
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
          sizes={data.mainImage.sizes}
        />
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mx-auto">
                <h1 className="brand-heading">vine and fork</h1>
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
        <div style={{ backgroundColor: 'black', paddingTop: '1rem' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>About vine and fork</h2>
                <p>
                  A quick note about my company. I am a trained Chef and
                  certified Sommelier. I select wines from around the world (and
                  here too) and import for direct to the consumer purposes. That
                  can be for events, personal use, cellar service etc.
                </p>
                <p>
                  My goal is not only to remove one stop for the wines- which
                  lowers the price, but more importantly deliver a service to my
                  clients so that they understand and better enjoy what they are
                  getting; and even access wines that would be difficult to find
                  otherwise.
                </p>
                <p>
                  I hand deliver as many or as few cases as you like and you can
                  always shoot me a text when you need or want more.
                </p>
                <p>
                  I do wine education, work with office events, charity events,
                  art and music events, weddings, schools, and even people that
                  are just too busy to buy their own wine! 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="download"
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
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Contact Start Bootstrap</h2>
              <p>
                Feel free to leave us a comment on the
                <a href="http://startbootstrap.com/template-overviews/grayscale/">
                  Grayscale template overview page
                </a>
                on Start Bootstrap to give some feedback about this theme!
              </p>
              <ul className="list-inline banner-social-buttons">
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/SBootstrap"
                    className="btn btn-default btn-lg"
                  >
                    <i className="fa fa-twitter fa-fw" />
                    <span className="network-name">Twitter</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/BlackrockDigital/startbootstrap"
                    className="btn btn-default btn-lg"
                  >
                    <i className="fa fa-github fa-fw" />
                    <span className="network-name">Github</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://plus.google.com/+Startbootstrap/posts"
                    className="btn btn-default btn-lg"
                  >
                    <i className="fa fa-google-plus fa-fw" />
                    <span className="network-name">Google+</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="col-lg-8 mx-auto">
            <h2>Download Grayscale</h2>
            <p>
              You can download Grayscale for free on the preview page at Start
              Bootstrap.
            </p>
            <a
              href="http://startbootstrap.com/template-overviews/grayscale/"
              className="btn btn-default btn-lg"
            >
              Visit Download Page
            </a>
          </div>
        </div> */}
      </section>

      {/* <section id="contact" className="content-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Contact Start Bootstrap</h2>
              <p>
                Feel free to leave us a comment on the
                <a href="http://startbootstrap.com/template-overviews/grayscale/">
                  Grayscale template overview page
                </a>
                on Start Bootstrap to give some feedback about this theme!
              </p>
              <ul className="list-inline banner-social-buttons">
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/SBootstrap"
                    className="btn btn-default btn-lg"
                  >
                    <i className="fa fa-twitter fa-fw" />
                    <span className="network-name">Twitter</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/BlackrockDigital/startbootstrap"
                    className="btn btn-default btn-lg"
                  >
                    <i className="fa fa-github fa-fw" />
                    <span className="network-name">Github</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://plus.google.com/+Startbootstrap/posts"
                    className="btn btn-default btn-lg"
                  >
                    <i className="fa fa-google-plus fa-fw" />
                    <span className="network-name">Google+</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
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
    secondaryImage: imageSharp(id: { regex: "/table/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`
