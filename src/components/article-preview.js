import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className="card-article">
    <Link to={`/blog/${article.slug}`}>
      <Img
        fadeIn={false}
        alt={article.title}
        fluid={article.blogPostPreviewImage.fluid}
      />
    </Link>
    <div className="card-article-desc">
      <Link to={`/blog/${article.slug}`}>
        <h2>{article.title}</h2>
      </Link>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </div>
  </div>
)
