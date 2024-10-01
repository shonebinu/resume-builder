import Icon from "@mdi/react";
import { mdiBriefcase } from "@mdi/js";
import EditorCard from "./EditorCard";
import EntryCard from "./EntryCard";
import AddEntryButton from "./AddEntryButton";

function ExperienceEditor({ experienceDetails, setExperienceDetails }) {
  const fields = [
    { label: "Company", type: "text", key: "company" },
    { label: "Position", type: "text", key: "position" },
    { label: "Timeline", type: "text", key: "timeline" },
    { label: "Description", type: "text", key: "description" },
  ];

  const handleChange = (id, key, value) => {
    const updatedExperienceDetails = experienceDetails.map((experience) =>
      experience.id === id ? { ...experience, [key]: value } : { ...experience }
    );
    setExperienceDetails(updatedExperienceDetails);
  };

  const handleDelete = (id) => {
    const updatedExperienceDetails = experienceDetails
      .filter((experience) => experience.id !== id)
      .map((experience) => ({ ...experience }));
    setExperienceDetails(updatedExperienceDetails);
  };

  const handleAdd = () => {
    const updatedExperienceDetails = experienceDetails.map((experience) => ({
      ...experience,
    }));

    updatedExperienceDetails.push({
      id: crypto.randomUUID(),
      company: "New Position",
      position: "",
      timeline: "",
      description: "",
    });

    setExperienceDetails(updatedExperienceDetails);
  };

  return (
    <EditorCard
      title="Experience Details"
      icon={<Icon path={mdiBriefcase} size={1} />}
    >
      {experienceDetails.map((experience) => (
        <EntryCard
          key={experience.id}
          title={experience.company}
          entry={experience}
          fields={fields}
          onChange={handleChange}
          onDelete={handleDelete}
        />
      ))}
      <AddEntryButton handleAdd={handleAdd} />
    </EditorCard>
  );
}

export default ExperienceEditor;
