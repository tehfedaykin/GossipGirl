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
    const cast = get(this, 'props.data.allCastJson.edges')
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
      <main style={{position: 'relative'}}>
        <Img
           title="New York background"
           alt="New York background"
           sizes={this.props.data.bgImage.sizes}
           style={{width: '100%', position: 'absolute', top: '0', left: '0'}}
         />
        <div className="container" style={{position: 'relative'}}>
          <div className="header">
            <Link style={{ boxShadow: 'none' }} to="/">
              <Img
                 title="Gossip Girl"
                 alt="Gossip Girl"
                 sizes={this.props.data.logoImage.sizes}
               />
            </Link>
          </div>
          <div className="row">
            <div className="col-9">
              <h1>The Cast</h1>
              {cast.map(({ node }) => {
                return (
                  <div key={node.character} style={{display:'block', margin: '3em 0'}}>
                    <Img
                       title={node.character}
                       alt={node.character}
                       sizes={node.characterPhoto.image.sizes}
                       style={{width: '200px'}}
                     />
                    <h2>{node.character}</h2>
                    <hr style={{border: 'none', borderTop: 'dotted 5px'}} />
                    <div style={{textAlign: 'right'}}>
                      <h3 style={{display: 'inline-block', lineHeight: '100px', margin: '0px 20px', verticalAlign:'top'}}>
                        played by
                        <a target="_blank" href={"https://twitter.com/" + node.twitter}> {node.player}</a></h3>
                      <Img
                         title={node.player}
                         alt={node.player}
                         sizes={node.playerPhoto.image.sizes}

                         style={{width: '100px', display: 'inline-block'}}
                       />
                    </div>

                  </div>
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
    bgImage: imageSharp(original: {src: { regex: "/background/" }} ) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    allCastJson {
      edges {
        node {
          character
          characterPhoto {
            image:childImageSharp {
              sizes(maxWidth: 480 ) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          player
          twitter
          playerPhoto {
            image:childImageSharp {
              sizes(maxWidth: 480 ) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
