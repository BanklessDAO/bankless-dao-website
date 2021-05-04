import NextHead from 'next/head'

export interface PageMetaProps {
  title: string
  description: string
  url: string
}

const Head = ({ title = '', description = '' }: PageMetaProps) => {
  // TODO social images
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
    </NextHead>
  )
}

export default Head
