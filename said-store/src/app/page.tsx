
import styles from "./page.module.css";
import { Description } from "./components/home/description";
import { Hero } from "./components/home/hero";
import { MainProducts } from "./components/home/mainProducts";
export default function Home() {


  return (

    <main >
      <Hero />
      <Description />
      <MainProducts />
    </main>

  );
}
