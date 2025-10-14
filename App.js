import React from "react";
import Form from "@rjsf/core";
import schema from "./schema/awsAthenaSchema.json";
import uiSchema from "./schema/awsAthenaUiSchema.json";
import formData from "./schema/awsAthenaFormData.json";

function App() {
  const onSubmit = ({ formData }) => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully! Check the console for details.");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Amazon Athena Configuration Form</h2>
      <p>Recreated using React JSON Schema Form</p>
      <Form schema={schema} uiSchema={uiSchema} formData={formData} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
