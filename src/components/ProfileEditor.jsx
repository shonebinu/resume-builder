import Icon from "@mdi/react";
import { mdiAccountTie } from "@mdi/js";
import EditorCard from "./EditorCard";
import EditorInputField from "./EditorInputField";

function ProfileEditor({ personalDetails, setPersonalDetails }) {
  const fields = [
    { label: "Full name", type: "text", key: "name" },
    { label: "Email", type: "email", key: "email" },
    { label: "Phone", type: "tel", key: "phone" },
    { label: "Address", type: "text", key: "address" },
  ];

  return (
    <EditorCard
      title="Personal Details"
      icon={<Icon path={mdiAccountTie} size={1} />}
    >
      {fields.map(({ label, type, key }) => (
        <EditorInputField
          key={key}
          label={label}
          type={type}
          value={personalDetails[key]}
          onChange={(e) =>
            setPersonalDetails({ ...personalDetails, [key]: e.target.value })
          }
        />
      ))}
    </EditorCard>
  );
}

export default ProfileEditor;
