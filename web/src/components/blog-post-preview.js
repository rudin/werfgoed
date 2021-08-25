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
    <>
      <Link
        className={props.isInList ? styles.inList : styles.inGrid}
        to={(props.slug && props.slug.current) || "#"}
        style={{ ...noSlug && { pointerEvents: "none", marginBottom: "6rem", direction: "rtl", gridTemplateColumns: "1fr 1fr" } }}
      >
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <div className={noSlug ? styles.leadMediaThumbIntro : styles.leadMediaThumb}>
            {noSlug && <div style={{ position: "relative", paddingBottom: `${100 / 16 * 9}%`, height: 0 }}><iframe src="https://player.vimeo.com/video/498264717?title=0&amp;byline=0&amp;portrait=0&amp;playsinline=0&amp;autopause=0&amp;app_id=122963&amp;h=8391841398" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="Van de Werfklas naar het Werfgoed" style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}></iframe></div>}
            {!noSlug && props.mainImage && props.mainImage.asset && (
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
      {noSlug && <div style={{ minHeight: 200, background: "red" }} >

        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(1280)
              // .height(Math.floor((9 / 16) * 600))
              .auto('format')
              .url()}
            alt={props.mainImage.alt}
            style={{ display: "block", width: "100%", marginTop: -100 }}
          />
        )}
      </div>}

    </>
  )
}

export default BlogPostPreview
