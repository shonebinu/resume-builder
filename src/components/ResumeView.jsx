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
        className="text-xl font-bold p-1 text-center mb-2"
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
  const { fontStyle, fontColor, accentColor } = resumeSettings;
  const { name, email, phone, address } = personalDetails;

  return (
    <div
      className={`flex flex-col bg-neutral-50 aspect-[1/1.414] w-[50rem] font-${resumeSettings.fontStyle}`}
    >
      <div
        style={{ color: fontColor, backgroundColor: accentColor }}
        className="flex flex-col gap-4 items-center py-8"
      >
        <h1 className="font-bold text-3xl">{name}</h1>
        <div className="flex flex-wrap justify-center gap-5">
          <IconWithText icon={mdiEmail} text={email} />
          <IconWithText icon={mdiPhone} text={phone} />
          <IconWithText icon={mdiMapMarker} text={address} />
        </div>
      </div>

      <div className="pt-8 px-14 flex flex-col gap-8">
        <Section title="Education" accentColor={accentColor}>
          {educationDetails.map((education) => (
            <div key={education.id} className="flex gap-10 mb-4">
              <div>
                <p>{education.timeline}</p>
                <p>{education.institute}</p>
              </div>
              <div>
                <p>{education.study}</p>
                <p>{education.score}</p>
              </div>
            </div>
          ))}
        </Section>

        <Section title="Work Experience" accentColor={accentColor}></Section>
      </div>
    </div>
  );
}

export default ResumeView;
