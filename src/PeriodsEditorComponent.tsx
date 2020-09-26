import React from "react";
import { Period } from "./schedule";

interface PeriodsEditorComponentProps {
  onChange: Function,
  value: Period[]
}

function PeriodsEditorComponent(props: PeriodsEditorComponentProps) {
  
  return (
    <>
      <h3>Periods:</h3>
    </>
  )
}

export default PeriodsEditorComponent;