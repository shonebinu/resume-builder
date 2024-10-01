import { useState } from "react";
import ProfileEditor from "./components/ProfileEditor";
import EducationEditor from "./components/EducationEditor";
import ExperienceEditor from "./components/ExperienceEditor";
import ResumeSettings from "./components/ResumeSettings";
import ResumeView from "./components/ResumeView";

const DEFAULT_PROFILE_DATA = {
  name: "Shawn Cena",
  email: "shawn@gmail.com",
  phone: "+44 1009 5578 29",
  address: "London, UK",
};

const DEFAULT_EDUCATION_DATA = [
  {
    id: crypto.randomUUID(),
    study: "Bachelors in Computer Science",
    institute: "Stanford University",
    timeline: "05/2020 - present",
    score: "3.0 / 4.0 GPA",
  },
  {
    id: crypto.randomUUID(),
    study: "Bachelors in Mathematics",
    institute: "MIT",
    timeline: "03/2017 - 04/2020",
    score: "3.6 / 4.0 GPA",
  },
];

const DEFAULT_EXPERIENCE_DATA = [
  {
    id: crypto.randomUUID(),
    position: "Senior Software Engineer",
    company: "Apple Inc",
    timeline: "06/2020 - 05/2022",
    description: "Made Apple phone",
  },
];

const DEFAULT_RESUME_SETTINGS = {
  accentColor: "#0e374e",
  fontColor: "#fafafa",
  fontStyle: "sans",
};

function App() {
  const [personalDetails, setPersonalDetails] = useState(DEFAULT_PROFILE_DATA);
  const [educationDetails, setEducationDetails] = useState(
    DEFAULT_EDUCATION_DATA
  );
  const [experienceDetails, setExperienceDetails] = useState(
    DEFAULT_EXPERIENCE_DATA
  );
  const [resumeSettings, setResumeSettings] = useState(DEFAULT_RESUME_SETTINGS);

  return (
    <main className="flex gap-6 justify-center flex-wrap">
      <section className="flex flex-col gap-4">
        <ProfileEditor
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <EducationEditor
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
        />
        <ExperienceEditor
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        />
        <ResumeSettings
          resumeSettings={resumeSettings}
          setResumeSettings={setResumeSettings}
        />
      </section>
      <section>
        <ResumeView
          personalDetails={personalDetails}
          educationDetails={educationDetails}
          experienceDetails={experienceDetails}
          resumeSettings={resumeSettings}
        />
      </section>
    </main>
  );
}

export default App;
