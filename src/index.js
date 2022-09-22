// import React from "react";
// import ReactDOM from "react-dom";
// import "./styles.css";

import { Panel, PanelGroup, Placeholder, InputPicker } from "rsuite";


const ViewPage = (content) => (
  
  let config = { 
  group: {
    accordion: true, 
    defaultActiveKey:1, 
    bordered: true 
  
  }
  }
  
  <PanelGroup {...group} >
    <Panel header="Title" eventKey={1} id="panel1">
      {content}
    </Panel>
  </PanelGroup>
);

//ReactDOM.render(<App />, document.getElementById("root"));
