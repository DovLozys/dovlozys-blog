import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>Dov's tests</h1>
      <h4>{ data.allMarkdownRemark.totalCount }</h4>
      {data.allMarkdownRemark.edges.map(({node}) => {
        return (
          <div key={node.id}>
            <span>{node.frontmatter.title}</span>
            <p>{node.excerpt}</p>
          </div>
        )
      })}
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
          html
        }
      }
    }
  }
  
`
