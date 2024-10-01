import Icon from "@mdi/react";
import { mdiEmail, mdiMapMarker, mdiPhone } from "@mdi/js";
import { getLuminance } from "../getLuminance";

function IconWithText({ icon, text }) {
  return (
    <p className="flex items-center gap-1">
      <Icon path={icon} size={1} />
      <span>{text}</span>
    </p>
  );
}

function Section({ title, accentColor, children }) {
  const backgroundColor =
    getLuminance(accentColor) < 0.5 ? "#e5e5e5" : "#404040";

  return (
    <section>
      <h3
        style={{ color: accentColor, backgroundColor }}
        className="text-xl font-bold p-1 text-center mb-3"
      >
        {title}
      </h3>
      {children}
    </section>
  );
}

function ResumeView({
  personalDetails,
  educationDetails,
  experienceDetails,
  resumeSettings,
}) {
  return (
    <div
      className={`flex flex-col bg-neutral-50 aspect-[1/1.414] lg:w-[50rem] w-full font-${resumeSettings.fontStyle}`}
    >
      <div
        style={{
          color: resumeSettings.fontColor,
          backgroundColor: resumeSettings.accentColor,
        }}
        className="flex flex-col gap-4 items-center py-8"
      >
        <h1 className="font-bold text-3xl">{personalDetails.name}</h1>
        <div className="flex flex-wrap justify-center gap-5">
          <IconWithText icon={mdiEmail} text={personalDetails.email} />
          <IconWithText icon={mdiPhone} text={personalDetails.phone} />
          <IconWithText icon={mdiMapMarker} text={personalDetails.address} />
        </div>
      </div>

      <div className="pt-8 px-14 flex flex-col gap-8">
        <Section title="Education" accentColor={resumeSettings.accentColor}>
          {educationDetails.map((education) => (
            <div key={education.id} className="flex mb-4">
              <div className="w-1/3">
                <p className="underline">{education.institute}</p>
                <p className="text-sm">{education.timeline}</p>
              </div>
              <div className="w-2/3">
                <p className="font-medium">{education.study}</p>
                <p>{education.score}</p>
              </div>
            </div>
          ))}
        </Section>

        <Section
          title="Work Experience"
          accentColor={resumeSettings.accentColor}
        >
          {experienceDetails.map((experience) => (
            <div key={experience.id} className="flex mb-4">
              <div className="w-1/3">
                <p className="underline">{experience.company}</p>
                <p className="text-sm">{experience.timeline}</p>
              </div>
              <div className="w-2/3">
                <p className="font-medium">{experience.position}</p>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
}

export default ResumeView;
