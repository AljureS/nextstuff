import { Hero } from "app/components/home/hero";
import { MainProducts } from "app/components/home/mainProducts";
import { Description } from "app/components/home/description";
export default function Home() {
  
  return (
      <main>
        <Hero />
        <Description />
        <MainProducts />
      </main>
  );
}
