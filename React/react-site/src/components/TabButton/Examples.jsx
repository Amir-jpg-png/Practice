import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../../data.js";
import Section from "../Section/Section.jsx";
import Tabs from "../Tabs/Tabs.jsx";

export default function Examples() {

  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);

  }

  return (
    <Section id="examples" title="Examples">
        <Tabs buttons={
        <>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
        </>}
        >
        {!selectedTopic && <p>Please select a topic</p>}
        {selectedTopic &&           
        <div id="tab-content">
          <h3>
            {EXAMPLES[selectedTopic].title}
          </h3>
          <p>
            {EXAMPLES[selectedTopic].description}
          </p>
          <pre>
            {EXAMPLES[selectedTopic].code}
          </pre>
        </div> 
        }
        </Tabs>
    </Section>
    );
};