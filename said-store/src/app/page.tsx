
import styles from "./page.module.css";

export default function Home() {
  console.log('Hola mundo pagina de incio');
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hola mundo </h1>
      </main>

    </div>
  );
}
