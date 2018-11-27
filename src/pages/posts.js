import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import RightNav from '../components/RightNav'
import PostSnippet from '../components/PostSnippet'

import Img from "gatsby-image";

class Posts extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
      <main>
        <div className="container">
          <div className="header">
            <Img
               title="Gossip Girl"
               alt="Gossip Girl"
               sizes={this.props.data.logoImage.sizes}
             />
          </div>
          <div className="row">
            <div className="col-9">
              <h1>Posts</h1>
              {posts.map(({ node }) => {
                const image = require('../assets/img/' + node.frontmatter.image);
                return (
                  <PostSnippet key={node.fields.slug}
                    image={image}
                    location={node.frontmatter.location}
                    date={node.frontmatter.date}
                    person={node.frontmatter.person}
                    slug={node.fields.slug}
                    text={node.excerpt}/>
                )
              })}
            </div>
            <div className="col">
              <RightNav />
            </div>
          </div>
        </div>
      </main>
      <div>

      </div>
      </Layout>
    )
  }
}

export default Posts

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    logoImage: imageSharp(original: {src: { regex: "/logo/" }} ) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image
            person
            location
          }
        }
      }
    }
  }
`
