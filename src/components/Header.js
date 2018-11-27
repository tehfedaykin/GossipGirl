import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image";

class Header extends React.Component {


  render() {
    console.log('img', this.props.data);
    return (
      <div>

      </div>
    )
  }
}

export default Header

export const pageQuery = graphql`
  query {
    logoImage: imageSharp(original: {src: { regex: "/logo/" }} ) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
