import React, { MouseEvent, ChangeEvent } from 'react';
import { Accordion, Alert, Badge, Button, Card, Form } from "react-bootstrap";
import { parse } from "@prantlf/jsonlint";
import { Period, Schedule } from "./schedule";
import PeriodsEditorComponent from './PeriodsEditorComponent';
import DateArrayComponent from "./DateArrayComponent";
import { v4 as newId } from "uuid";

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

  function formatSchedules(schedules: Schedule[]) {
    return JSON.stringify(schedules, null, 4);
  }

  function addNewSchedule(event: MouseEvent) {
    currentSchedules.push({
      "name": "New Schedule",
      "combinedAB": false,
      "dates": [],
      "schedule": []
    });
    props.onChange(formatSchedules(currentSchedules));
  }

  function setSchedule(key: number, schedule: Schedule) {
    currentSchedules[key] = schedule;
    props.onChange(formatSchedules(currentSchedules));
  }

  function removeSchedule(index: number) {
    currentSchedules.splice(index, 1);
    props.onChange(formatSchedules(currentSchedules));
  }

  return (
    <>
      <h3>Edit your schedules here.</h3>
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
          <Accordion defaultActiveKey="0" className="mb-3">
            {currentSchedules.map((schedule, i) => (<ScheduleEditorComponent schedule={schedule} setSchedule={(s: Schedule) => setSchedule(i, s)} key={i} index={i} removeSchedule={() => removeSchedule(i)}></ScheduleEditorComponent>))}
          </Accordion>
          <p>Once you're done editing your schedules here, head back over to the JSON Code tab and copy and paste your newly-created schedules into the <a href="https://github.com/camtheman256/lasa-schedules-data">LASA Schedules Data repository</a>.</p>
        </>
      )}
    </>
  );
}

interface ScheduleEditorProps {
    schedule: Schedule,
    setSchedule: Function,
    index: number,
    removeSchedule: Function
}

function ScheduleEditorComponent(props: ScheduleEditorProps) {
  const scheduleTitle = props.schedule.name ? props.schedule.name : "Untitled";

  function onScheduleNameChange(event: ChangeEvent<HTMLInputElement>) {
    props.schedule.name = event.target.value;
    props.setSchedule(props.schedule);
  }

  function onScheduleABChange(event: ChangeEvent<HTMLInputElement>) {
    props.schedule.combinedAB = event.target.checked;
    props.setSchedule(props.schedule);
  }

  function onScheduleDatesChange(newDates: string[]) {
    props.schedule.dates = newDates;
    props.setSchedule(props.schedule);
  }

  function changeApplyDayVisibility(event: ChangeEvent<HTMLInputElement>) {
    props.schedule.applyDay = event.target.checked ? [1] : undefined;
    props.setSchedule(props.schedule);
  }

  function setApplyDay(event: ChangeEvent<HTMLSelectElement>) {
    props.schedule.applyDay = Array.from(event.target.selectedOptions, opt => parseInt(opt.value));
    props.setSchedule(props.schedule);
  }

  function onPeriodsChange(newPeriods: Period[]) {
    props.schedule.schedule = newPeriods;
    props.setSchedule(props.schedule);
  }

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={props.index.toString()}>
            #{props.index}: {scheduleTitle}
            {props.index === 0 ? (<Badge variant="primary" className="ml-2">Default</Badge>) : null}
          </Accordion.Toggle>
          <Button className="float-right" variant="danger" onClick={() => props.removeSchedule()}>&times;</Button>
        </Card.Header>
        <Accordion.Collapse eventKey={props.index.toString()}>
          <Card.Body>
            {props.index === 0 ? (
              <Alert variant="info">This schedule is the default schedule, so it's always used when a special schedule is not in place.</Alert>
            ) : null}
            <Form>
              <Form.Group controlId={newId()}>
                <Form.Label>Schedule Name</Form.Label>
                <Form.Control type="text" placeholder="Enter a name" value={props.schedule.name} onChange={onScheduleNameChange}></Form.Control>
              </Form.Group>
              <Form.Check checked={props.schedule.combinedAB || false} label="Combined A/B Period Names?" onChange={onScheduleABChange} type="checkbox"
                id={newId()}
              ></Form.Check>
              <Form.Check checked={props.schedule.applyDay !== undefined} label="Apply schedule on a certain day(s) of the week?" type="checkbox"
                id={newId()} onChange={changeApplyDayVisibility}
              ></Form.Check>
              {props.schedule.applyDay !== undefined ? (
                <Form.Control as="select" multiple id={newId()} onChange={setApplyDay}>
                  {daysOfWeek.map((d, i) => (<option value={(i+1).toString()} key={i} selected={props.schedule.applyDay && props.schedule.applyDay.includes(i+1)}>{i+1} - {d}</option>))}
                </Form.Control>
              ) : null}
              <hr />
              <DateArrayComponent onChange={onScheduleDatesChange} value={props.schedule.dates} index={props.index}></DateArrayComponent>
            </Form>
            <hr />
            <PeriodsEditorComponent onChange={onPeriodsChange} value={props.schedule.schedule}></PeriodsEditorComponent>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
}

export default SchedulesEditorComponent;
