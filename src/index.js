import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { Panel, PanelGroup, Placeholder, InputPicker } from "rsuite";

const App = () => (
  <PanelGroup accordion defaultActiveKey={1} bordered>
    <Panel header="Производитель" eventKey={1} id="panel1">
      <Placeholder.Paragraph />
      <InputPicker />
    </Panel>
    <Panel header="Panel 2" eventKey={2} id="panel2">
      <Placeholder.Paragraph />
    </Panel>
    <Panel header="Panel 3" eventKey={3} id="panel3">
      <Placeholder.Paragraph />
    </Panel>
  </PanelGroup>
);

ReactDOM.render(<App />, document.getElementById("root"));
