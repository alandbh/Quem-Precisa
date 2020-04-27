import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
// let lang = getLang()

const Header = ({ siteTitle, changeLang, lang }) => (
  <header id="header" style={{}}>
    <button className="lang" onClick={() => changeLang()}>
      {lang === "pt" ? "English" : "Português"}
    </button>
    <h1 style={{ margin: 0 }}>{siteTitle}</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
