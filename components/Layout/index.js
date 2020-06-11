import React from "react"
import Scroll from "components/Scroll"

// This `location` prop will serve as a callback on route change
const Layout = ({ children, location }) => {
  return (
    <>
      <Scroll callbacks={location} />

      <div
        id="container"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `120px 1.45rem 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://nextjs.org">Next.js</a>
        </footer>
      </div>
    </>
  )
}
export default Layout
