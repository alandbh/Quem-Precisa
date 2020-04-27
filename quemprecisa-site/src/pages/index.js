import React from "react"

import Layout from "../components/layout"
import Image04 from "../components/image04"
import Image02 from "../components/image02"
import Image03 from "../components/image03"
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
        <Image04 />
      </figure>
      <div>
        <h2>A fome só piora as coisas</h2>
        <p>
          Todos nós estamos passando por um momento muito difícil. Mas, para
          algumas pessoas, a fome pode ser tão fatal quanto o COVID-19.
        </p>
        <p>
          Por isso, estou arrecadando doações para a doação de marmitas para os
          moradores de rua da região leste de Belo Horizonte.
        </p>
        <p>
          Cada marmita custa <b>R$12,00</b> e serão preparadas pelo Restaurante{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/cantina_bigode/"
          >
            Cantina Do Bigode
          </a>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=113001714-a8dbfc80-c536-4056-8b6a-8846dbf7cad9"
        >
          Doar agora
        </a>
      </div>
    </section>

    <section className="grid-2 left">
      <div>
        <h2>Sua doação em boas mãos</h2>
        <p>
          Todo valor arrecadado aqui será transferido para as Irmãs de caridade
          da Associação{" "}
          <a href="https://tocadeassisirmas.org.br/">
            "Filhas da Pobreza do Santíssimo Sacramento"
          </a>
          . São elas que fazem as entregas das marmitas aos moradores de rua. :)
        </p>
        <a
          target="_blank"
          className="btn"
          rel="noopener noreferrer"
          href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=113001714-a8dbfc80-c536-4056-8b6a-8846dbf7cad9"
        >
          Doar agora
        </a>
      </div>
      <figure>
        <Image03 />
      </figure>
    </section>
  </Layout>
)

export default IndexPage
