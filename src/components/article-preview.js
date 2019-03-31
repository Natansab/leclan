import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.card_article}>
    <Link to={`/blog/${article.slug}`}>
      <img
        src={article.blogPostPreviewImage.fluid.src}
      />
      {/* <Img
        // as='img'
        fadeIn={false}
        alt={article.title}
        fluid={article.blogPostPreviewImage.fluid}
      /> */}
    </Link>
    <div className={styles.card_article_desc}>
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
