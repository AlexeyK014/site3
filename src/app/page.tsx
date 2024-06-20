import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Тест сайта</h1>
        <button>Кнопка</button>
      </div>
    </main>
  );
}
