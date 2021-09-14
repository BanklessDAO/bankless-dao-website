import { useState } from 'react'
import Router from 'next/router'

// this is a hackery to provide a easy url for season 2 notion page. next.config.js would be better for this but it doesn't exist here so this trick is used//
const Season2 = (): any => {
  useState(() => {
    const { pathname } = Router
    if (pathname == '/season2') {
      Router.push(
        'https://www.notion.so/bankless/Season-2-Launch-7d06aaf56df444d48cd0d551edadebdc'
      )
    }
  })

  return null
}

export default Season2
