import { Hero } from "./components/home/hero";
import { MainProducts } from "./components/home/mainProducts";
import { Description } from "./components/home/description";
export default function Home() {
  
  return (
      <main>
        <Hero />
        <Description />
        <MainProducts />
      </main>
  );
}
