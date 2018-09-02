import React from 'react'
import Vineandfork from '../components/vineandfork'
import ScrollAnimation from 'react-animate-on-scroll'
import FlexyImage from '../components/imagething'
import PaperSheet from '../components/papersheet'
import { Typography } from '@material-ui/core'

const OurWinesPage = ({ data }) => (
  <div>
    <Typography>
      <FlexyImage attributes={{ sizes: data.headerImage.sizes }} />
      
    </Typography>
  </div>
)

export default OurWinesPage

export const pageQuery = graphql`
  query OurWinesPage {
    headerImage: imageSharp(id: { regex: "/winecork/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`
