import { useState } from "react";
import ProfileEditor from "./components/ProfileEditor";
import EducationEditor from "./components/EducationEditor";
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
    institute: "Stanford University",
    study: "Bachelors in Computer Science",
    timeline: "05/2020 - present",
    score: "3.0 / 4.0 GPA",
  },
  {
    id: crypto.randomUUID(),
    institute: "MIT",
    study: "Bachelors in Mathematics",
    timeline: "03/2017 - 04/2020",
    score: "3.6 / 4.0 GPA",
  },
];

function App() {
  const [personalDetails, setPersonalDetails] = useState(DEFAULT_PROFILE_DATA);
  const [educationDetails, setEducationDetails] = useState(
    DEFAULT_EDUCATION_DATA
  );

  return (
    <main className="flex">
      <section className="flex flex-col gap-4">
        <ProfileEditor
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <EducationEditor
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
        />
      </section>
      <section>
        <ResumeView />
      </section>
    </main>
  );
}

export default App;
