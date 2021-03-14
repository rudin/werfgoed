import { format } from 'date-fns'
import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import PortableText from './portableText'

import styles from './blog-post-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function BlogPostPreview(props) {
  const noSlug = !props.slug
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={(props.slug && props.slug.current) || "#"}
      style={{ ...noSlug && { pointerEvents: "none", marginBottom: "6rem", direction: "rtl", gridTemplateColumns: "1fr 1fr" } }}
    >
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <div className={noSlug ? styles.leadMediaThumbIntro : styles.leadMediaThumb}>
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                // .height(Math.floor((9 / 16) * 600))
                .auto('format')
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </div>
      </div>
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
      </div>
    </Link>
  )
}

export default BlogPostPreview
