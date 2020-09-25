import React, { MouseEvent, ChangeEvent } from 'react';
import { Accordion, Alert, Button, Card, Form } from "react-bootstrap";
import { parse } from "@prantlf/jsonlint";
import { Schedule } from "./schedule";

interface SchedulesEditorProps {
  onChange: Function,
  value: string
}

function SchedulesEditorComponent(props: SchedulesEditorProps) {
  let scheduleError = "";

  let currentSchedules: Schedule[] = [];
  try {
    currentSchedules = parse(props.value) as Schedule[];
  } catch(err) {
    scheduleError = err.toString();
  }

  function addNewSchedule(event: MouseEvent) {

  }

  function setSchedule(key: number, schedule: Schedule) {
    currentSchedules[key] = schedule;
    props.onChange(JSON.stringify(currentSchedules, null, 4));
  }

  return (
    <>
      <h3>Edit your Schedules here.</h3>
      {scheduleError ? (
        <>
          <Alert variant="danger">
            <p>Sorry, your schedule could not be parsed. Please fix the JSON on the left to continue.</p>
            <p className="mb-0"><b>Error Message:</b></p>
            <pre>{scheduleError}</pre>
          </Alert>
        </>
      ) : (
        <>
          <p><Button variant="primary" onClick={addNewSchedule}>+ Add New Schedule</Button></p>
          <Accordion defaultActiveKey="0">
            {currentSchedules.map((schedule, i) => (<ScheduleEditorComponent schedule={schedule} setSchedule={(s: Schedule) => setSchedule(i, s)} key={i} index={i}></ScheduleEditorComponent>))}
          </Accordion>
        </>
      )}
    </>
  );
}

interface ScheduleEditorProps {
    schedule: Schedule,
    setSchedule: Function,
    index: number
}

function ScheduleEditorComponent(props: ScheduleEditorProps) {
  const scheduleTitle = props.schedule.name ? props.schedule.name : "Untitled";

  function onScheduleNameChange(event: ChangeEvent<HTMLInputElement>) {
    props.schedule.name = event.target.value;
    props.setSchedule(props.schedule);
  }

  return (
    <>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={props.index.toString()}>
            #{props.index}: {scheduleTitle}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={props.index.toString()}>
          <Card.Body>
            <Form>
              <Form.Group controlId={`name-${props.index}`}>
                <Form.Label>Schedule Name</Form.Label>
                <Form.Control type="text" placeholder="Enter a name" value={props.schedule.name} onChange={onScheduleNameChange}></Form.Control>
              </Form.Group>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
}

export default SchedulesEditorComponent;