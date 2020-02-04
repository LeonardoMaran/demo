import React from 'react'
import { useDeck } from 'mdx-deck'
import { css } from '@emotion/core'

import Logo from './Logo'

const header = css`
  -webkit-backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  padding: 16px;
  position: fixed;
  top: 0;
  width: calc(100% - 48px);
  z-index: 1;
`

const ctaContainer = css`
  align-items: center;
  display: flex;
  justify-content: center;
`

const cta = css`
  background-image: linear-gradient(rgb(5, 197, 204), rgb(19, 183, 209));
  border: 0;
  border-radius: 36px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  color: white;
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  transition: all 0.1s cubic-bezier(0, 0, 1, 2);
`

export default ({ children }) => {
  const { index } = useDeck()
  return (
    <>
      <header css={header}>
        {index > 0 &&
          <>
            <Logo />
            <div css={ctaContainer}>
              <a css={cta} href="https://dashboard.featurepeek.com/login" target="_blank">Create account</a>
            </div>
          </>
        }
      </header>
      <div>{children}</div>
      <style global jsx>
        {`
          body {
            overflow: auto !important;
          }
          #gatsby-focus-wrapper > div > div > div {
            height: initial !important;
          }
          .dot {
            transition: transform 3s ease, background-color 3s ease;
          }
        `}
      </style>
    </>
  )
}
  
