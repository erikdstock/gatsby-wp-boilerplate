import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { colors } from '../support/styles'
import styled from 'styled-components'
import Marquee from '../components/Marquee'

const PostLink = styled(Link)`
  text-decoration: none;
  color: ${colors.red};
  &:hover {
    border-bottom: 1px solid ${colors.black}
  }
  `

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Marquee>Posts 🌹 from 🎩 Wordpress 🐬</Marquee>
    {
      data.allWordpressPost.edges.map((post) => (
        <PostLink key={post.node.id} to={`/posts/${post.node.slug}`}>{post.node.title}</PostLink>
      ))
    }
  </div>
)

IndexPage.propTypes = {
  data: PropTypes.object
}

export default IndexPage

export const query = graphql`
  query PostList {
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          date
          modified
        }
      }
    }
  }
`
