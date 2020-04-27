import React from "react"

import Layout from "../components/layout"
import Image08 from "../components/image08"
import Image07 from "../components/image07"
import Image06 from "../components/image06"
import Image05 from "../components/image05"
import Image04 from "../components/image04"
import Image02 from "../components/image02"
import Image01 from "../components/image01"
import Image03 from "../components/image03"
import Pagamentos from "../components/Pagamentos"

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
          <b>R$3.4446,00</b>, alimenou mais de <b>250 pessoas</b> e ainda ajudou
          2 pequenos restaurantes da região.
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
          Par doar via cartão ou boleto, basta clicar no botão abaixo e
          preencher alguns dados. É bem rápido!
        </p>

        <a
          mp-mode="dftl"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=113001714-a8dbfc80-c536-4056-8b6a-8846dbf7cad9"
          name="MP-payButton"
          class="btn-pay"
        >
          <span>Doar via cartão ou boleto</span>
          <Pagamentos />
        </a>

        <p>
          Se preferir, você também pode fazer uma transferência direto para
          minha conta. <br />
          Anote os dados aí:
        </p>
        <p className="account">
          Banco: Nu Pagamentos S.A (código 260) <br />
          Tipo: Conta de pagamento
          <br />
          Agência: 0001
          <br />
          Conta: 7496032-0 <br />
          CPF: 000.055.596-77 <br />
          Alan Vasconcelos Alves
        </p>
      </div>
      <figure>
        <Image04 />
      </figure>
    </section>
  </Layout>
)

export default IndexPage
