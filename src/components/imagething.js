import React, { Component } from 'react'
import windowSize from 'react-window-size'
import Img from 'gatsby-image'

class ScreenSizeImage extends React.Component {
  render() {
    return (
      <Img
        style={{
          position: `absolute`,
          top: 0,
          left: 0,
          right: 0,
          zIndex: -1,
          height: this.props.windowHeight,
          width: this.props.windowWidth,
        }}
        {...this.props.attributes}
      />
    )
  }
}
export default windowSize(ScreenSizeImage)
