import React from "react";
import { render } from "react-dom"
// import ReactDOM from "react-dom";
// import "./styles.css";

import { Panel, PanelGroup, Placeholder, Drawer } from "rsuite";


export const DataView = (data) => (
  
  let config = { 
    group: {
      accordion: true, 
      defaultActiveKey:1, 
      bordered: true 

    }
  }
  
  if(!data) {
    
    console.log("no data loaded")
    return "<div>data?</div>" 
  }
else if(data) {
  data.map(i => <div>{i}</div>)
  return <><div id="data"> Data: {data}</div></>
           
}

);

let mountNode = document.getElementById("root")
render(<DataView />, mountNode);
