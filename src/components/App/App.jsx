import { Section } from "@/components/Section/Section.jsx";

// import { Balisong } from '@/components/Balisong/Balisong.jsx';

import { BalisongList } from '@/components/BalisongList/BalisongList.jsx';

import balisong from '@/json/balisong.json';

import css from './App.module.css'

export function App() {
  return (
    <div className={css.section}>
      <Section title="Колекція балісонгів">
        <div className={css.list}>
        {/* {balisong.map((knife, index) => (
          <Balisong key={index} {...knife} />
        ))} */}
        </div>
        <BalisongList items={balisong} />
      </Section>
    </div>
  );
}