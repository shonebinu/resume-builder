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

function DetailItem({ left, right }) {
  return (
    <div className="flex mb-4">
      <div className="w-1/3">
        <p className="underline">{left.top}</p>
        <p className="text-sm">{left.bottom}</p>
      </div>
      <div className="w-2/3">
        <p className="font-medium">{right.top}</p>
        <p>{right.bottom}</p>
      </div>
    </div>
  );
}

function ResumeView({
  personalDetails,
  educationDetails,
  experienceDetails,
  resumeSettings,
}) {
  const { accentColor, fontColor, fontStyle } = resumeSettings;

  return (
    <div
      className={`flex flex-col bg-neutral-50 aspect-[1/1.414] lg:w-[50rem] w-full font-${fontStyle}`}
    >
      <div
        style={{
          color: fontColor,
          backgroundColor: accentColor,
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
        <Section title="Education" accentColor={accentColor}>
          {educationDetails.map((education) => (
            <DetailItem
              key={education.id}
              left={{
                top: education.institute,
                bottom: education.timeline,
              }}
              right={{ top: education.study, bottom: education.score }}
            />
          ))}
        </Section>
        <Section title="Work Experience" accentColor={accentColor}>
          {experienceDetails.map((experience) => (
            <DetailItem
              key={experience.id}
              left={{
                top: experience.company,
                bottom: experience.timeline,
              }}
              right={{
                top: experience.position,
                bottom: experience.description,
              }}
            />
          ))}
        </Section>
      </div>
    </div>
  );
}

export default ResumeView;
