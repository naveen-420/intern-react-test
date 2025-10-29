# 🧩 Assessment – React JSON Schema Form: Amazon Athena

## 🎯 Objective
Recreate the **Amazon Athena form** from the AWS Pricing Calculator using **React JSON Schema Form**.

🔗 **Reference Form:** [AWS Calculator – Athena](https://calculator.aws/#/createCalculator/Athena)  
📘 **React JSON Schema Form Docs:** [RJSF Documentation](https://rjsf-team.github.io/react-jsonschema-form/docs/)

Your goal is to build **all form fields** with validations using JSON Schema and UI Schema.

---

## 📘 What You Need to Do

1. Open the AWS Athena Calculator form and note down all fields.
2. Create the following files inside `src/schema/`:
   - `awsAthenaSchema.json`
   - `awsAthenaUiSchema.json`
   - `awsAthenaFormData.json`
3. Use **@rjsf/core** to render your form in `App.js`.
4. Make sure **all fields and validations** are recreated as in AWS form.

---

## 🧱 Example Folder Structure
```
yourname-react-test/
│
├── src/
│   ├── App.js
│   └── schema/
│       ├── awsAthenaSchema.json
│       ├── awsAthenaUiSchema.json
│       └── awsAthenaFormData.json
│
└── README.md
```

---

## 🚀 Run Instructions

```bash
npm install
npm install @rjsf/core
npm start
```

Open **http://localhost:3000** in your browser to test your form.

---

## ✅ Deliverables

1. A working React JSON Schema Form showing all fields from AWS Athena Calculator.
2. Add random default values.
3. Push everything to a **public GitHub repository** named `yourname-react-test` in your github account.
4. Share the GitHub repository link, once completed.

---

## 💡 Tips for Freshers

- Start with 2–3 fields first, test in the RJSF Playground:  
  https://rjsf-team.github.io/react-jsonschema-form/
- Use `"ui:widget": "select"` or `"ui:widget": "radio"` for dropdowns/radios.
- Make sure required fields have `"required"` in schema.
- Add `"default"` values for demo purposes.

---

Good luck! 🚀

Note: UI look and feel of the form doesn't considered for evaluation. So you can conencrate on functionality.
