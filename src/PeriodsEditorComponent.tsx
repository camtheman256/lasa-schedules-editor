import React, { ChangeEvent } from "react";
import { Alert, Button, Form, ListGroup } from "react-bootstrap";
import { Period } from "./schedule";
import { v4 as newId } from "uuid";
import { calculateRunTime } from "./utils";

interface PeriodsEditorComponentProps {
  onChange: Function,
  value: Period[]
}

function PeriodsEditorComponent(props: PeriodsEditorComponentProps) {

  function changePeriod(key: number, period: Period) {
    props.value[key] = period;
    props.onChange(props.value);
  }

  function removePeriod(key: number) {
    props.value.splice(key, 1);
    props.onChange(props.value);
  }

  function addNewPeriod() {
    props.value.push({
      name: "New Period",
      startTime: "",
      endTime: "",
      runTime: "0"
    });
    props.onChange(props.value);
  }
  
  return (
    <>
      <h3>Periods:</h3>
      <ListGroup className="mb-2">
        {props.value.map((p, i) => (
          <PeriodEditorComponent value={p} index={i} onChange={(p: Period) => changePeriod(i, p)} removePeriod={() => removePeriod(i)} key={i}></PeriodEditorComponent>
        ))}
      </ListGroup>
      <Button variant="primary" onClick={() => addNewPeriod()}>+ Add New Period</Button>
    </>
  );
}

interface PeriodEditorComponentProps {
  onChange: Function,
  value: Period,
  index: number,
  removePeriod: Function
}

function PeriodEditorComponent(props: PeriodEditorComponentProps) {

  function onNameChange(event: ChangeEvent<HTMLInputElement>) {
    props.value.name = event.target.value;
    props.onChange(props.value);
  }

  function onTimeChange(event: any, start: boolean = true) {
    if(start) {
      props.value.startTime = event.target.value;
    } else {
      props.value.endTime = event.target.value;
    }
    props.value.runTime =  calculateRunTime(props.value.endTime, props.value.startTime).toString();
    props.onChange(props.value);
  }

  return (
    <>
      <ListGroup.Item>
        <Form>
          <Form.Group controlId={newId()}>
            <Form.Label>Period Name</Form.Label>
            <Form.Control type="text" placeholder="Enter a name" value={props.value.name} onChange={onNameChange}></Form.Control>
          </Form.Group>
          {props.value.endTime <= props.value.startTime ? (
            <>
              <Alert variant="warning">Your end time is before or equal to your start time.</Alert>
            </>
          ) : null}
          <Form.Group>
            <Form.Label style={{display: "block"}}>Period Start - End</Form.Label>
            <Form.Control type="time" value={props.value.startTime} className="inline-auto time-width" onChange={(e) => onTimeChange(e, true)}></Form.Control> - <Form.Control type="time" value={props.value.endTime} className="inline-auto time-width" onChange={(e) => onTimeChange(e, false)}></Form.Control>
          </Form.Group>
          <p>Period Run Time: {props.value.runTime}</p>
        </Form>
        <Button variant="danger" size="sm" onClick={() => props.removePeriod()}>&times; Delete Period</Button>
      </ListGroup.Item>
    </>
  )
}

export default PeriodsEditorComponent;