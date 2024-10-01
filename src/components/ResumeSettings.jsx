import Icon from "@mdi/react";
import { mdiCog } from "@mdi/js";
import EditorCard from "./EditorCard";
import { getLuminance } from "../getLuminance";

function getFontColor(backgroundColor) {
  const luminance = getLuminance(backgroundColor);
  return luminance > 0.5 ? "#171717" : "#fafafa";
}

const fonts = [
  { id: "sans", label: "Sans", className: "font-sans" },
  { id: "serif", label: "Serif", className: "font-serif" },
  { id: "mono", label: "Mono", className: "font-mono" },
];

function ResumeSettings({ resumeSettings, setResumeSettings }) {
  return (
    <EditorCard title="Resume Settings" icon={<Icon path={mdiCog} size={1} />}>
      <label>
        <p>Accent Color</p>
        <input
          type="color"
          className="cursor-pointer rounded border-2 border-neutral-300"
          title="Choose your color"
          value={resumeSettings.accentColor}
          onChange={(e) =>
            setResumeSettings({
              ...resumeSettings,
              accentColor: e.target.value,
              fontColor: getFontColor(e.target.value),
            })
          }
        />
      </label>

      <label>
        <p>Font Style</p>
        <div className="flex justify-between gap-5">
          {fonts.map((font) => (
            <button
              key={font.id}
              className="border p-2 flex-1 rounded"
              style={{
                borderColor:
                  font.id === resumeSettings.fontStyle ? "#171717" : "",
              }}
              onClick={() =>
                setResumeSettings({
                  ...resumeSettings,
                  fontStyle: font.id,
                })
              }
            >
              <span className={font.className}>Aa</span>
              <br />
              <span className="text-sm">{font.label}</span>
            </button>
          ))}
        </div>
      </label>

      <button
        style={{
          color: resumeSettings.fontColor,
          backgroundColor: resumeSettings.accentColor,
        }}
        className="rounded-md py-2 border border-neutral-300 transition hover:scale-105"
        title="Save the resume as a PDF"
      >
        Save PDF
      </button>
    </EditorCard>
  );
}

export default ResumeSettings;
