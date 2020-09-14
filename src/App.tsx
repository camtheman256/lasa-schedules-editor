import React, { SyntheticEvent, useState } from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import AceEditor from "react-ace";
import SchedulesEditorComponent from "./SchedulesEditorComponent";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import "ace-builds/src-min-noconflict/mode-json";
import "ace-builds/src-min-noconflict/theme-github";

function App() {
  const [scheduleString, setSchedule] = useState("[]");
  const schedulesEndpoint = "https://schedules-data.lasa2019.com";
  
  function onScheduleJSONChange(newJSONString: string) {
    setSchedule(newJSONString);
  }

  function downloadSchedule() {
    fetch(schedulesEndpoint + "/schedule.json")
      .then(res => res.text())
      .then(text => setSchedule(text));
  }

  return (
    <>
      <NavComponent></NavComponent>
      <Container className="mt-3" fluid>
        <Row>
          <Col md="6">
            <EditorComponent onChange={onScheduleJSONChange} value={scheduleString} downloadSchedule={downloadSchedule}></EditorComponent>
          </Col>
          <Col md="6">
            <SchedulesEditorComponent onChange={onScheduleJSONChange} value={scheduleString}></SchedulesEditorComponent>
          </Col>
        </Row>
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

interface EditorProps {
  onChange: Function,
  value: string,
  downloadSchedule: Function
}

function EditorComponent(props: EditorProps) {
  
  function editorChange(value: string, event: Event) {
    props.onChange(value);
  }

  function downloadSchedule(event: SyntheticEvent) {
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
