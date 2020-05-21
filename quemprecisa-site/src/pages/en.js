import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Image08 from "../components/image08"
import Image07 from "../components/image07"
import Image06 from "../components/image06"
import Image04 from "../components/image04"
import Diego from "../components/fotoDiego"
import Alan from "../components/fotoAlan"
import LogoToca from "../components/logoToca"
import Bigode from "../components/fotoBigode"
import IconInstagram from "../images/icon-instagram.svg"
import IconGlobe from "../images/icon-globe.svg"
const SecondPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="call">
      <p className="txt-grey">
        In this pandemic, many people need our help to have something to eat.
        So, how about <b>donating a plate of food to those in need?</b>
      </p>
    </section>
    <section className="grid-2 right">
      <figure>
        <Image08 />
      </figure>
      <div>
        <h2>Hunger only makes things worse</h2>
        <p>
          We are all going through a very difficult time. But for some people,
          hunger can be as fatal as COVID-19.
        </p>
        <p>
          Thinking about it, I decided to join my friend{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/umbilhetepradidi/"
          >
            Diego Soares
          </a>{" "}
          and now, here I am raising money throughout the week to donate
          lunchboxes to homeless people in my community.
        </p>
        <p>
          Each lunch box costs <b>$3</b> and will be prepared by the restaurant{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/cantina_bigode/"
          >
            Cantina Do Bigode
          </a>
        </p>

        <a className="btn" href="#donate">
          Donate
        </a>
      </div>
    </section>

    <section className="grid-2 left">
      <div>
        <h2>Your donation in good hands</h2>
        <p>
          Each week, we choose a different restaurant from the community. With
          your help, you not only give food to the hungry, you also help a small
          local market.
        </p>
        <p>
          At the end of the week, the Sisters of Charity of the{" "}
          <a href="https://tocadeassisirmas.org.br/">
            "Toca de Assis - Daughters of Poverty Association"
          </a>{" "}
          will deliver the lunch boxes to the homeless. :)
        </p>
        <p></p>
        <a className="btn" href="#donate">
          Donate
        </a>
      </div>
      <figure>
        <Image06 />
      </figure>
    </section>

    <section className="grid-2 right">
      <figure>
        <Image07 />
      </figure>
      <div>
        <h2>More than 250 lunch boxes have already been delivered</h2>
        <p>
          An action that started in a very informal way, has already raised{" "}
          <b>R$3.4446,00 (588,02 USD)</b>, fed more than <b>250 people</b> and
          helped 2 small restaurants in the region.
        </p>
        <p>But the campaign is still going on!</p>

        <a className="btn" href="#donate">
          Donate
        </a>
      </div>
    </section>

    <section id="donate" className="grid-2 left">
      <div>
        <h1>How to donate?</h1>
        <p>
          I am accepting donations via PayPal for now. To donate, just click the
          button below:
        </p>

        <a
          mp-mode="dftl"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=KZ35D3V4649HJ&item_name=Donate+a+plate+of+food&currency_code=USD&amount=3&source=url"
          name="MP-payButton"
          className="btn-pay"
        >
          <span>Donate $3 via PayPal</span>
        </a>
        <p>
          Want to donate another value?{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=KZ35D3V4649HJ&item_name=Donate+a+plate+of+food&currency_code=USD&source=url"
          >
            Click here
          </a>
        </p>
      </div>
      <figure>
        <Image04 />
      </figure>
    </section>

    <footer>
      <div className="container">
        <h1>Who we are</h1>
        <div className="grid-4">
          <div>
            <figure>
              <Diego />
            </figure>
            <div className="content">
              <h3>Diego Soares</h3>
              <p>He started it all</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/umbilhetepradidi/"
              >
                <img alt="" src={IconInstagram} />
              </a>
            </div>
          </div>
          <div>
            <figure>
              <Alan />
            </figure>
            <div className="content">
              <h3>Alan Vasconcelos (eu)</h3>
              <p>Just helping the campaign that Diego started</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/alandbh/"
              >
                <img alt="" src={IconInstagram} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.alanvasconcelos.com"
              >
                <img alt="" src={IconGlobe} />
              </a>
            </div>
          </div>
          <div>
            <figure>
              <LogoToca />
            </figure>
            <div className="content">
              <h3>Toca de Assis</h3>
              <p>It is the Sisters of Charity who deliver the lunch boxes</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/filhasdapobreza/"
              >
                <img alt="" src={IconInstagram} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://tocadeassisirmas.org.br/"
              >
                <img alt="" src={IconGlobe} />
              </a>
            </div>
          </div>
          <div>
            <figure>
              <Bigode />
            </figure>
            <div className="content">
              <h3>Cantina do Bigode</h3>
              <p>It's the restaurant that will prepare the food this week</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/cantina_bigode/"
              >
                <img alt="" src={IconInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </Layout>
)

export default SecondPage
