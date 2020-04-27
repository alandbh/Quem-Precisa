/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, navigateTo } from "gatsby"
import t, { getLang, getCookie } from "../utils/getLang"

import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => {
  const [lang, setLang] = useState("pt")
  useEffect(() => {
    let langCookie =
      getCookie("langCookie") !== "" ? getCookie("langCookie") : getLang()

    setLang(langCookie)

    document.cookie = `langCookie=${langCookie}`

    if (langCookie !== "pt" && window.location.pathname !== "/en") {
      navigateTo("/en")
    }
  })

  function changeLang() {
    let langCookie =
      getCookie("langCookie") !== "" ? getCookie("langCookie") : getLang()
    // let newLang = lang === "pt" ? "en" : "pt"
    if (langCookie == "pt") {
      setLang("en")
      document.cookie = `langCookie=en`
    } else {
      setLang("pt")
      document.cookie = `langCookie=pt`
      navigateTo("/")
    }
    // console.log(newLang)
    // setLang("en")
  }
  // setLang(getLang())
  // console.log("aasas")

  const heroText = t(
    "Um prato de comida para quem precisa",
    "A plate of food for the needy."
  )
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        changeLang={() => {
          changeLang()
        }}
        lang={lang}
        siteTitle={heroText}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
