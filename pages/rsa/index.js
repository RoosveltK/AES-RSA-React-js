import React from "react";
import Head from "next/head";
import Link from "next/link";
import Modalchiffrement from "../../components/rsa/Modalchiffrement";
import Modaldechiffrer from "../../components/rsa/Modaldechiffrer";
import dynamic from "next/dynamic";

const  JSEncrypt  = dynamic(() => import("jsencrypt"), { ssr: false });

export default class RSA extends React.Component {
  state = {
    messageChiffrer: null,
    privateKey: null,
    publicKey: null,
    isLoading: false,
    jsEncrypt: null,
  };

  getMessage = (msg) => {
    this.setState({ messageChiffrer: msg });
  };

  componentDidMount() {
    var crypt = new JSEncrypt();
    const publicKey = crypt.getPublicKey();
    this.setState({ publicKey: publicKey, jsEncrypt: crypt });
  }

  render() {
    return (
      <div className="cardTocrypt">
        <Head>
          <title>RSA</title>
        </Head>
        <div
          class="card text-white  newPrimary"
          style={{ "max-width": "50rem" }}
        >
          <div class="card-header">RSA CHIFFREMENT</div>
          <div class="card-body">
            {this.state.messageChiffrer != null ? (
              <React.Fragment>
                <h4 class="card-title">
                  Le message est :{" "}
                  <div
                    className="text-success text-wrap"
                    style={{ width: "6rem;" }}
                  >
                    {this.state.messageChiffrer}
                  </div>
                  La cle publique est :{" "}
                  <div
                    className="text-success text-wrap"
                    style={{ width: "6rem;" }}
                  >
                    {this.state.publicKey}
                  </div>
                </h4>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h4 class="card-title">
                  Pour Chiffrer une clef publique vous sera générée pour chaque
                  session
                </h4>
              </React.Fragment>
            )}
            <p class="card-text">Que voulez-vous faire ?</p>

            <div>
              <Modalchiffrement
                recup={this.getMessage}
                jsEncrypt={this.state.jsEncrypt}
              />
              <Modaldechiffrer
                jsEncrypt={this.state.jsEncrypt}
                recup={this.getMessage}
              />
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
