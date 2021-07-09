import React from "react";
import Router from "next/router";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Acceuil</title>
      </Head>
     
        <h1>
          BIENVENUE SUR LE MINI SYSTEME <br />
          DE CRYPTAGE <br />
          RSA/AES
        </h1>
        <div className="home">
          <p>Avec quel système voulez vous coder ?</p>
          <button className="btn btnAll" onClick={() => Router.push("/rsa")}>
            RSA
          </button>
          <button className="btn btnAll" onClick={() => Router.push("/aes")}>
            AES
          </button>
        </div>
    
    </>
  );
};

export default Index;
