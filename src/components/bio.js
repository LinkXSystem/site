/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="https://avatars.githubusercontent.com/u/26039188?v=4"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <div>
        {
          author?.summary && (
            <p>{author?.summary}</p>
          )
        }
        {
          author?.name && (
            <p>撰写人 <strong>{author.name}</strong></p>
          )
        }
      </div>
    </div>
  )
}

export default Bio;
