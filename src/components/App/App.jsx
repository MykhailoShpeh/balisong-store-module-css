import { Section } from "@/components/Section/Section.jsx";

import { BalisongList } from '@/components/BalisongList/BalisongList.jsx';

import balisong from '@/json/balisong.json';

import css from './App.module.css'

export function App() {
  return (
    <div className={css.section}>
      <Section title="Колекція балісонгів">
        <BalisongList items={balisong} />
      </Section>
    </div>
  );
}