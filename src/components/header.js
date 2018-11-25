import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
})

class SimpleTabs extends React.Component {
  state = {
    value: null,
  }

  componentDidMount() {
    // this.setState({
    //   value: window.location.pathname,
    // })
  }

  handleChange = (event, value) => {
    navigateTo(value)
    // this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a
            className="navbar-brand js-scroll-trigger"
            href="#page-top"
            aria-label="Page Top"
          >
            {/* Start Bootstrap */}
          </a>

          <div className="" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#wines">
                  wines
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#reviews">
                  Reviews
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default SimpleTabs
