import React from "react"

import Layout from "../components/layout"
import Image08 from "../components/image08"
import Image07 from "../components/image07"
import Image06 from "../components/image06"
import Image04 from "../components/image04"
import Pagamentos from "../components/pagamentos"
import Diego from "../components/fotoDiego"
import Alan from "../components/fotoAlan"
import LogoToca from "../components/logoToca"
import Bigode from "../components/fotoBigode"
import IconInstagram from "../images/icon-instagram.svg"
import IconGlobe from "../images/icon-globe.svg"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="call">
      <p className="txt-grey">
        Nessa pandemia, muitas pessoas precisam da nossa ajuda para ter o que
        comer. Então, que tal <b>doar um prato de comida para quem precisa?</b>
      </p>
    </section>
    <section className="grid-2 right">
      <figure>
        <Image08 />
      </figure>
      <div>
        <h2>A fome só piora as coisas</h2>
        <p>
          Todos nós estamos passando por um momento muito difícil. Mas, para
          algumas pessoas, a fome pode ser tão fatal quanto o COVID-19.
        </p>
        <p>
          Pensando nisso, resolvi me juntar ao meu amigo{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/umbilhetepradidi/"
          >
            Diego Soares
          </a>{" "}
          e estou aqui arrecadando uma grana ao longo dessa semana para a doação
          de marmitas aos moradores de rua da região leste de Belo Horizonte.
        </p>
        <p>
          Cada marmita custa <b>R$12,00</b> e serão preparadas pelo restaurante{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/cantina_bigode/"
          >
            Cantina Do Bigode
          </a>
        </p>

        <a className="btn" href="#donate">
          Doar agora
        </a>
      </div>
    </section>

    <section className="grid-2 left">
      <div>
        <h2>Sua doação em boas mãos</h2>
        <p>
          A cada semana, escolhemos um restaurante diferente. Dessa forma, além
          de dar comida a quem passa fome, você ainda ajuda um pequeno
          comerciante.
        </p>
        <p>
          Ao final da semana, as Irmãs de caridade da Associação{" "}
          <a href="https://tocadeassisirmas.org.br/">
            "Filhas da Pobreza do Santíssimo Sacramento"
          </a>{" "}
          farão as entregas das marmitas aos moradores de rua. :)
        </p>
        <p></p>
        <a className="btn" href="#donate">
          Doar agora
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
        <h2>Mais de 250 marmitas já foram entregues</h2>
        <p>
          Uma ação que começou de um jeito bem informal, já arrecadou{" "}
          <b>R$3.4446,00</b>, alimentando mais de <b>250 pessoas</b> e ainda
          ajudou 2 pequenos restaurantes da região.
        </p>
        <p>Mas a campanha continua a todo vapor!</p>

        <a className="btn" href="#donate">
          Doar agora
        </a>
      </div>
    </section>

    <section id="donate" className="grid-2 left">
      <div>
        <h1>Quero doar, como faço?</h1>
        <p>É bem simples!</p>
        <p>
          Você pode enviar sua doação via boleto, cartão de crédito ou mesmo via
          transferência bancária.
        </p>
        <p>
          Par doar via cartão ou boleto, basta clicar em um dos botões abaixo e
          preencher alguns dados. É bem rápido!
        </p>

        <a
          mp-mode="dftl"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=113001714-a8dbfc80-c536-4056-8b6a-8846dbf7cad9"
          name="MP-payButton"
          className="btn-pay"
        >
          <span>
            Doar R$12,00<small> (uma marmita)</small>
          </span>
          {/* <Pagamentos /> */}
        </a>
        <a
          mp-mode="dftl"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=113001714-bd29502f-f9f1-4a21-86fd-68fce7291658"
          name="MP-payButton"
          className="btn-pay"
        >
          <span>
            Doar R$24,00 <small>(duas marmitas)</small>
          </span>
          {/* <Pagamentos /> */}
        </a>
        <a
          mp-mode="dftl"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=113001714-cd2803b7-0d0c-49b3-8aa7-185a61f2d7b0"
          name="MP-payButton"
          className="btn-pay"
        >
          <span>
            Doar R$36,00 <small>(três marmitas)</small>
          </span>
        </a>
        <div className="pay-methods">
          <Pagamentos />
        </div>
      </div>
      <figure>
        <Image04 />
      </figure>
    </section>

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
              <p>Só ajudando a campanha que o Diego começou</p>
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
              <p>São as Irmãs que fazem as entregas das marmitas</p>
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
              <p>É o restaurante que vai preparar a comida nesta semana</p>
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

export default IndexPage
