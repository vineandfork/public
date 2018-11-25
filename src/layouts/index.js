import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './main.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'vine & fork a wine concierge service',
        },
        {
          name: 'keywords',
          content: 'wine, concierge, service, vine & fork, vine, fork',
        },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
