import React, { SyntheticEvent } from 'react';
import { Alert, Button } from "react-bootstrap";
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

  function addNewSchedule(event: SyntheticEvent) {

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
          {currentSchedules.map((schedule, i) => (<ScheduleEditorComponent schedule={schedule} key={i}></ScheduleEditorComponent>))}
        </>
      )}
    </>
  );
}

interface ScheduleEditorProps {
    schedule: Schedule
}

function ScheduleEditorComponent(props: ScheduleEditorProps) {
  return (
    <>
      <p>Schedule {props.schedule.name ? props.schedule.name : "Untitled"} is here.</p>
    </>
  );
}

export default SchedulesEditorComponent;