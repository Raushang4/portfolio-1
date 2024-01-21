import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { ReactNode } from "react";

interface ExperienceItemProps {
  date: string;
  icon: ReactNode;
  role: string;
  location: {
    city: string;
    country: string;
  };
  work: string[];
  company: string;
}

export function ExperienceItem({
  date,
  icon,
  role,
  location: { city, country },
  work,
  company,
}: ExperienceItemProps): JSX.Element {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#222222" }}
      contentArrowStyle={{ borderRight: "7px solid #222222" }}
      date={date}
      iconStyle={{ background: "#222222" }}
      icon={icon}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">{role}</h3>
        <div className="flex flex-row justify-between items-center">
          <h4 className="text-md text-gray-200 font-light">{company}</h4>
          <div>
            <h4 className="text-sm text-right font-light">
              {city}, {country}
            </h4>
          </div>
        </div>
        <ul className="list-disc">
          {work.map((ele) => (
            <li key={ele}>{ele}</li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
}
