import Image from "next/image";
import {
  Hero,
  Introduction,
  Career,
  ToolsCarousel,
  Header,
  Projects,
  CssDrawings,
  Contact,
  Footer,
} from "./_sections";
import { LeftInfoBlock, PageLoader } from "./_components";
import RightInfoBlock from "./_components/RightInfoBlock";

export default function Home() {
  return (
    <main>
      <PageLoader>
        <Header />
        <Hero />
        <Introduction />
        <Career />
        <ToolsCarousel />
        <Projects />
        <CssDrawings />
        <Contact />
        <Footer />
        <LeftInfoBlock />
        <RightInfoBlock />
      </PageLoader>
    </main>
  );
}
