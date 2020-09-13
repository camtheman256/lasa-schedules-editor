import React, { SyntheticEvent } from 'react';
import { Alert, Button } from "react-bootstrap";
import { Schedule, Period } from "./schedule";

interface SchedulesEditorProps {
  onChange: Function,
  value: string
}

function SchedulesEditorComponent(props: SchedulesEditorProps) {
  let scheduleError = "";

  let currentSchedules: Schedule[] = [];
  try {
    currentSchedules = JSON.parse(props.value);
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
            <p className="mb-0"><b>Error Message:</b> {scheduleError}</p>
          </Alert>
        </>
      ) : (
        <>
          <p><Button variant="primary" onClick={addNewSchedule}>+ Add New Schedule</Button></p>
          {currentSchedules.map(schedule => (<ScheduleEditorComponent schedule={schedule}></ScheduleEditorComponent>))}
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
      <p>Schedule here!</p>
    </>
  );
}

export default SchedulesEditorComponent;