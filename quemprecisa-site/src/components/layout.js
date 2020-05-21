/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { navigateTo } from "gatsby"
import t, { getLang, getCookie } from "../utils/getLang"

import Header from "./Header"
import "./layout.scss"
import "./style.scss"

const Layout = ({ children }) => {
  const [lang, setLang] = useState("pt")
  useEffect(() => {
    let langCookie
    if (getCookie("langCookie") !== "") {
      langCookie = getCookie("langCookie")
    } else {
      langCookie = getLang()
      document.cookie = `langCookie=${langCookie}`
    }

    setLang(langCookie)

    if (langCookie !== "pt" && window.location.pathname !== "/en") {
      navigateTo("/en")
    }
  }, [])

  function changeLang() {
    let langCookie =
      getCookie("langCookie") !== "" ? getCookie("langCookie") : getLang()
    // let newLang = lang === "pt" ? "en" : "pt"
    if (langCookie === "pt") {
      setLang("en")
      document.cookie = `langCookie=en`
    } else {
      setLang("pt")
      document.cookie = `langCookie=pt`
      navigateTo("/")
    }
  }

  const heroText = t(
    "Um prato de comida para quem precisa",
    "A plate of food for the needy."
  )

  return (
    <>
      <Header
        changeLang={() => {
          changeLang()
        }}
        lang={lang}
        siteTitle={heroText}
      />

      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
