import { useState } from "react";

function InputField({ label, type, value, onChange }) {
  return (
    <label className="flex flex-col">
      <p>{label}</p>
      <input
        type={type}
        className="rounded-md border-2 text-sm p-1 pl-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

function PersonalEditor() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "Shawn Cena",
    email: "shawn@gmail.com",
    phone: "+44 1009 5578 29",
    address: "London, UK",
  });

  const fields = [
    { label: "Full name", type: "text", key: "name" },
    { label: "Email", type: "email", key: "email" },
    { label: "Phone", type: "tel", key: "phone" },
    { label: "Address", type: "text", key: "address" },
  ];

  return (
    <div className="flex flex-col p-6 rounded-md gap-3 bg-neutral-50">
      <h2 className="text-2xl font-semibold">Personal Details</h2>
      {fields.map(({ label, type, key }) => (
        <InputField
          key={key}
          label={label}
          type={type}
          value={personalDetails[key]}
          onChange={(value) =>
            setPersonalDetails({ ...personalDetails, [key]: value })
          }
        />
      ))}
    </div>
  );
}

export default PersonalEditor;
