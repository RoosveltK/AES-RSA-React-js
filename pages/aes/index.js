import React from "react";
import Head from "next/head";
import Link from "next/link";
import Modalchiffrement from "../../components/aes/Modalchiffrement";
import Modaldechiffrer from "../../components/aes/Modaldechiffrer";

export default class AES extends React.Component {
  state = {
    messageChiffrer: null,
  };

  getMessage = (msg) => {
    this.setState({ messageChiffrer: msg });
  };

  render() {
    return (
      <div className="cardTocrypt">
        <Head>
          <title>AES</title>
        </Head>
        <div
          class="card text-white  newPrimary"
          style={{ "max-width": "50rem" }}
        >
          <div class="card-header">AES CHIFFREMENT</div>
          <div class="card-body">
            {this.state.messageChiffrer != null ? (
              <React.Fragment>
                <h4 class="card-title">
                  Le message est :{" "}
                  <span className="text-success">
                    {this.state.messageChiffrer}
                  </span>
                </h4>
              </React.Fragment>
            ) : (
              <h4 class="card-title">
                AES est un chiffrement symétrique dont vous entrerez une cle
                pour chiffrer et dechiffrer les messages
              </h4>
            )}
            <p class="card-text">Que voulez-vous faire ?</p>

            <div>
              <Modalchiffrement recup={this.getMessage} />
              <Modaldechiffrer recup={this.getMessage} />
            </div>
            <Link href="/">
              <a>Retour a l'acceuill</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
