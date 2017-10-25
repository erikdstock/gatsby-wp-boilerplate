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

const IndexPage = ({data}) => {
  const posts = data.allWordpressPost.edges.map((post) => post.node)
  return <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Marquee>Posts from Wordpress:</Marquee>
    { posts.length === 0
      ? "No Posts 😔"
      : (
        <ul> {
          posts.map((post) => (
            <li> <PostLink key={post.id} to={`/posts/${post.slug}`}>{post.title}</PostLink> </li>
          ))
        }</ul>
      )
    }
  </div>
  }

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
