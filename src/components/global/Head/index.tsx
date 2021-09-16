import NextHead from 'next/head'

export interface PageMetaProps {
  title: string
  description: string
  url: string
  image?: string
}

const Head = ({ title = '', description = '', image }: PageMetaProps) => {
  // TODO social images
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      {image ? (
        <>
          <meta property="og:image" content={image} />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="330" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
        </>
      ) : null}
    </NextHead>
  )
}

export default Head
