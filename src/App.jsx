import Section from "./components/Section";

// import PaintingList from "./components/PaintingList";

// import paintings from './json/paintings.json'

import Balisong from './components/Balisong';

// import BalisongList from './components/BalisongList';

import balisong from './json/balisong.json';

// export default function App() {
//   return (
//     <div>
//       {/* //? Paintings */}
//       <Section title="Колекція картин">
//         <PaintingList items={paintings} />
//       </Section>
//     </div>
//   );
// }

export default function App() {
  return (
    <div className="section">
      {/* //? Paintings */}
      <Section title="Колекція балісонгів">
        <div className="list">
        {balisong.map((knife, index) => (
          <Balisong key={index} {...knife} />
        ))}
        </div>
        {/* <BalisongList items={balisong} /> */}
      </Section>
    </div>
  );
}