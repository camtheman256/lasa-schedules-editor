import React, { MouseEvent, useState } from 'react';
import { Button, ButtonGroup, Container, Nav, Navbar, ToggleButton } from "react-bootstrap";
import AceEditor from "react-ace";
import SchedulesEditorComponent from "./SchedulesEditorComponent";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import "ace-builds/src-min-noconflict/mode-json";
import "ace-builds/src-min-noconflict/theme-github";

function App() {
  const [scheduleString, setSchedule] = useState("[]");
  const schedulesEndpoint = "https://schedules-data.lasa2019.com";
  const [codeVisible, setCodeVisibility] = useState(0);

  // FIXME: eventually remove this when adding Router
  window.addEventListener("beforeunload", (e: Event) => {
    e.preventDefault();
    e.returnValue = true;
  });
  
  function onScheduleJSONChange(newJSONString: string) {
    setSchedule(newJSONString);
  }

  function downloadSchedule() {
    fetch(schedulesEndpoint + "/schedule.json")
      .then(res => res.text())
      .then(text => setSchedule(text));
  }

  function changeView(viewNumber: number) {
    setCodeVisibility(viewNumber);
  }

  const viewElements = [
    <EditorComponent onChange={onScheduleJSONChange} value={scheduleString} downloadSchedule={downloadSchedule}></EditorComponent>,
    <SchedulesEditorComponent onChange={onScheduleJSONChange} value={scheduleString}></SchedulesEditorComponent>
  ];

  return (
    <>
      <NavComponent></NavComponent>
      <Container className="mt-3">
        <ViewPicker changeView={changeView} visiblePane={codeVisible}></ViewPicker>
        <hr />
        {viewElements[codeVisible]}
      </Container>
    </>
  );
}

function NavComponent() {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Navbar.Brand>LASA Schedules Editor</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ml-auto">
            <Nav.Link href="https://github.com/camtheman256/lasa-schedules-data/blob/master/README.md" target="_blank">↗ Schedules Documentation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

interface ViewPickerProps {
  changeView: Function,
  visiblePane: number
}

function ViewPicker(props: ViewPickerProps) {
  
  const views = [
    { name: 'JSON Code', value: 0 },
    { name: 'Graphical Editor', value: 1 }
  ];

  return (
    <>
      <div>
        <h3 style={{display: "inline"}}>Pick a view to edit your schedules:</h3>
        <ButtonGroup toggle className="ml-3">
          {views.map((view, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="primary"
              checked={props.visiblePane === view.value}
              value={view.value}
              onChange={() => props.changeView(view.value)}
            >
              {view.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </>
  );
}

interface EditorProps {
  onChange: Function,
  value: string,
  downloadSchedule: Function
}

function EditorComponent(props: EditorProps) {
  
  function editorChange(value: string, event: Event) {
    props.onChange(value);
  }

  function downloadSchedule(event: MouseEvent) {
    props.downloadSchedule();
  }

  return (
    <>
      <h3>Paste your schedules JSON here.</h3>
      <p><Button variant="link" onClick={downloadSchedule}>Or, download the live schedules from the LASA Schedules API.</Button></p>
      <AceEditor
        mode="json"
        theme="github"
        value={props.value}
        onChange={editorChange}
        width="auto"
        height="750px"
        fontSize={14}
      ></AceEditor>
    </>
  );
}


export default App;
