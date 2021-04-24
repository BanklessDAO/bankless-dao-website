import { GetStaticProps } from 'next'
import { PageMetaProps } from '../components/global/Head'

import HeroSection from 'src/components/pages/Home/Hero'
import AboutDAOSection from 'src/components/pages/Home/AboutDAO'
import AboutBANKSection from 'src/components/pages/Home/AboutBANK'
import ClaimSection from 'src/components/pages/Home/Claim'
import React from 'react'

const pageMeta: PageMetaProps = {
  title: 'Homepage',
  description: 'This is the homepage',
  url: 'https://www.bankless.community/',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Page = (): JSX.Element => {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutDAOSection />
      <AboutBANKSection />
      <ClaimSection />
    </React.Fragment>
  )
}

export default Page
