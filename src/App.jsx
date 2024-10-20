
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton';

function handleSelect() {
  console.log("hello word")
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id= "core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>Jsx</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;