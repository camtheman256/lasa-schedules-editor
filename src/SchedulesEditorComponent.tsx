import React, { MouseEvent, ChangeEvent } from 'react';
import { Accordion, Alert, Badge, Button, Card, Form } from "react-bootstrap";
import { parse } from "@prantlf/jsonlint";
import { Period, Schedule } from "./schedule";
import PeriodsEditorComponent from './PeriodsEditorComponent';

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
    currentSchedules.push({
      "name": "New Schedule",
      "combinedAB": false,
      "dates": [],
      "schedule": []
    });
    props.onChange(JSON.stringify(currentSchedules, null, 4));
  }

  function setSchedule(key: number, schedule: Schedule) {
    currentSchedules[key] = schedule;
    props.onChange(JSON.stringify(currentSchedules, null, 4));
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
            {currentSchedules.map((schedule, i) => (<ScheduleEditorComponent schedule={schedule} setSchedule={(s: Schedule) => setSchedule(i, s)} key={i} index={i}></ScheduleEditorComponent>))}
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
    index: number
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
    props.schedule.applyDay = event.target.checked ? 1 : undefined;
    props.setSchedule(props.schedule);
  }

  function setApplyDay(event: ChangeEvent<HTMLInputElement>) {
    props.schedule.applyDay = parseInt(event.target.value);
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
        </Card.Header>
        <Accordion.Collapse eventKey={props.index.toString()}>
          <Card.Body>
            {props.index === 0 ? (
              <Alert variant="info">This schedule is the default schedule, so it's always used when a special schedule is not in place.</Alert>
            ) : null}
            <Form>
              <Form.Group controlId={`name-${props.index}`}>
                <Form.Label>Schedule Name</Form.Label>
                <Form.Control type="text" placeholder="Enter a name" value={props.schedule.name} onChange={onScheduleNameChange}></Form.Control>
              </Form.Group>
              <Form.Check checked={props.schedule.combinedAB || false} label="Combined A/B Periods?" onChange={onScheduleABChange} type="checkbox"
                id={`combined-${props.index}`}
              ></Form.Check>
              <Form.Check checked={props.schedule.applyDay !== undefined} label="Apply schedule on a certain day of the week?" type="checkbox"
                id={`apply-on-${props.index}`} onChange={changeApplyDayVisibility}
              ></Form.Check>
              {props.schedule.applyDay !== undefined ? (
                <Form.Control as="select" value={props.schedule.applyDay} id={`apply-${props.index}`} onChange={setApplyDay}>
                  {daysOfWeek.map((d, i) => (<option value={(i+1).toString()} key={i}>{i+1} - {d}</option>))}
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

interface DateArrayComponentProps {
  onChange: Function,
  value?: string[],
  index: number
}

function DateArrayComponent(props: DateArrayComponentProps) {
  function toDateValue(valueString: string): string {
    const dateObject = new Date(valueString);
    return !isNaN(dateObject as any) ? dateObject.toISOString().split("T")[0] : "";
  }

  function onDateKeyEdit(indices: number[], event: any) {
    if(props.value) {
      const newValue = event.target.valueAsDate.toLocaleDateString(undefined, { timeZone: "UTC" });
      if(indices.length > 1) {
        // @ts-ignore
        props.value[indices[0]][indices[1]] = newValue;
      } else {
        props.value[indices[0]] = newValue;
      }
      props.onChange(props.value);
    }
  }

  function removeDateKey(index: number) {
    if(props.value) {
      props.value.splice(index, 1);
      props.onChange(props.value);
    }
  }

  function newDateRange() {
    if(props.value) {
      // @ts-ignore
      props.value.push(["", ""]);
    }
    props.onChange(props.value ?? [["", ""]]);
  }

  function newDate() {
    if(props.value) {
      props.value.push("");
    }
    props.onChange(props.value ?? [""]);
  }
  
  return (
    <>
      <h5>Dates:</h5>
      {props.index === 0 ? (
        <Alert variant="secondary">Dates have no effect on the default schedule. Feel free to ignore.</Alert>
      ) : null}
      {props.value ? props.value.map((v: string | string[], i) => (
        <div key={i} className="mb-2">
          {v instanceof Array ? (
            <>
              {toDateValue(v[1]) <= toDateValue(v[0]) ? (
                <Alert variant="warning">Your end date is before or on your start date.</Alert>
              ) : null}
              <Form.Control type="date" value={toDateValue(v[0])} className="inline-auto" onChange={(e) => onDateKeyEdit([i, 0], e)}></Form.Control> - <Form.Control type="date" value={toDateValue(v[1])} className="inline-auto" onChange={(e) => onDateKeyEdit([i, 1], e)}></Form.Control>
            </>
          ) : (
            <Form.Control type="date" value={toDateValue(v)} className="inline-auto" onChange={(e) => onDateKeyEdit([i], e)}></Form.Control>
          )}
          <Button variant="danger" className="ml-3" title="Remove" onClick={() => removeDateKey(i)}>&times;</Button>
        </div>
      )) : null}
      <Button variant="primary" onClick={() => newDate()}>+ Add new date</Button>
      <Button variant="primary" className="ml-3" onClick={() => newDateRange()}>+ Add new date range</Button>
    </>
  );
}

export default SchedulesEditorComponent;
