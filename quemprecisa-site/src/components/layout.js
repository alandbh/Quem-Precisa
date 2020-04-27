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

import Diego from "../components/fotoDiego"
import Alan from "../components/fotoAlan"
import LogoToca from "../components/LogoToca"
import Bigode from "../components/fotoBigode"
import IconInstagram from "../images/icon-instagram.svg"
import IconGlobe from "../images/icon-globe.svg"
import Header from "./Header"
import "./layout.scss"
import "./style.scss"

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

      <main>{children}</main>
      <footer>
        <div className="container">
          <h1>Saiba quem somos nós</h1>
          <div className="grid-4">
            <div>
              <figure>
                <Diego />
              </figure>
              <div className="content">
                <h3>Diego Soares</h3>
                <p>Foi ele quem começou tudo</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/umbilhetepradidi/"
                >
                  <img src={IconInstagram} />
                </a>
              </div>
            </div>
            <div>
              <figure>
                <Alan />
              </figure>
              <div className="content">
                <h3>Alan Vasconcelos (eu)</h3>
                <p>Só ajudando a campanha que o Diego começou</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/alandbh/"
                >
                  <img src={IconInstagram} />
                </a>
              </div>
            </div>
            <div>
              <figure>
                <LogoToca />
              </figure>
              <div className="content">
                <h3>Toca de Assis</h3>
                <p>São as Irmãs que fazem as entregas das marmitas</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/filhasdapobreza/"
                >
                  <img src={IconInstagram} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tocadeassisirmas.org.br/"
                >
                  <img src={IconGlobe} />
                </a>
              </div>
            </div>
            <div>
              <figure>
                <Bigode />
              </figure>
              <div className="content">
                <h3>Cantina do Bigode</h3>
                <p>É o restaurante que vai preparar a comida nesta semana</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/cantina_bigode/"
                >
                  <img src={IconInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
