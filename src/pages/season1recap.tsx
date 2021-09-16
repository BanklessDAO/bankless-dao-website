import { GetStaticProps } from 'next'
import { PageMetaProps } from '../components/global/Head'
import styled from 'styled-components'

declare global {
  interface Window {
    attachEvent: any
  }
}

const Container = styled.div`
  height: 100vh;
  max-height: 100vh;
  overflow-x: scroll;
  overflow-y: hidden;
`

const Intro = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`

const Scroll = styled.div`
  position: absolute;
  top: 0;
  left: 100vw;
  min-width: 100vw;
  height: 100vh;
  display: flex;
`

const Recap = styled.div`
  height: 100%;
  img {
    height: 100%;
    width: auto;
  }
`

const Season2 = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  text-align: center;
  h1,
  h2 {
    line-height: 1em;
    font-weight: bold;
  }
  h1 {
    font-size: 6em;
    @media (max-width: 800px) {
      font-size: 3em;
    }
    span {
      font-size: 1em;
      font-weight: bold;
      color: #cb2529;
    }
  }
  h2 {
    font-size: 3em;
    @media (max-width: 800px) {
      font-size: 2em;
    }
  }
  p {
    margin-top: 1em;
    font-size: 2em;
    @media (max-width: 800px) {
      font-size: 1em;
    }
    line-height: 1em;
  }
`

const pageMeta: PageMetaProps = {
  title: 'Season 1 Recap | Bankless DAO',
  description: 'Recap for Season 1 and intro to Season 2 🚀',
  image: '/images/Season1-Meta.jpg',
  url: 'https://www.bankless.community/season1recap',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Season1Recap = (): JSX.Element => {
  function scrollHorizontally(e) {
    e = window.event || e
    const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
    const scrollSpeed = 20
    document.documentElement.scrollLeft -= delta * scrollSpeed
    document.body.scrollLeft -= delta * scrollSpeed
  }

  if (typeof window !== 'undefined') {
    document.documentElement.scrollLeft = 0
    let scrollSpeed = 10
    window.setInterval(() => {
      const lastScrollLeft = document.documentElement.scrollLeft
      document.documentElement.scrollLeft += scrollSpeed
      if (lastScrollLeft === document.documentElement.scrollLeft)
        scrollSpeed = 0
    }, 10)
    if (window.addEventListener) {
      // IE9, Chrome, Safari, Opera
      window.addEventListener('mousewheel', scrollHorizontally, false)
      // Firefox
      window.addEventListener('DOMMouseScroll', scrollHorizontally, false)
    } else {
      // IE 6/7/8
      window.attachEvent('onmousewheel', scrollHorizontally)
    }
  }
  return (
    <Container>
      <Intro src="/images/Season1-Intro.jpg" />
      <Scroll>
        <Recap>
          <img src="/images/Season1-Recap.jpg" />
        </Recap>
        <Season2>
          <h2>Season 2</h2>
          <h1>
            Bankless
            <br />
            HQ <span>+</span> DAO
          </h1>
          <p>
            October 8, 2021
            <br />
            11 am EDT
            <br />
            <a href="https://twitter.com/BanklessHQ">@BanklessHQ Twitter</a>
          </p>
          <p>
            RSVP
            <br />
            <a href="https://www.bankless.comunity/season2">
              www.bankless.comunity/season2
            </a>
          </p>
        </Season2>
      </Scroll>
    </Container>
  )
}

export default Season1Recap
