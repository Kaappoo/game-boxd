import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "../../styles/jogoPage.module.css";


export default function jogoItem({ info }) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.foto}>
          <img
            src={info.info.background_image_additional}
            className={styles.backgroundimage}
          />
        </div>
        <div className={styles.game}>
          <img src={info.info.background_image} className={styles.gameimage} />
          <h1>{info.info.name}</h1>
        </div>
        <div className={styles.conteudo}>
          <div className={styles.rate}>
            <span>De sua nota!</span>
            <input type="text" />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/jogo/${context.params.id}`
  );
  const json = await res.json();

  return {
    props: {
      info: json,
    },
  };
}
