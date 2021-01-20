import React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

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
      const newValue = event.target.valueAsDate.toLocaleDateString("en-US", { timeZone: "UTC" });
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
        <Alert variant="secondary">On the default schedule, dates override schedules that apply on a certain day of the week.</Alert>
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

export default DateArrayComponent;
