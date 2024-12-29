import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Amazon",
    location: "Seattle, WA",
    period: "2022 - Present",
    description: [
      "Led development of microservices using Node.js and TypeScript",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Collaborated with cross-functional teams to deliver high-impact features"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Microsoft",
    location: "Redmond, WA",
    period: "Summer 2021",
    description: [
      "Developed full-stack features using React and .NET Core",
      "Improved application performance by optimizing database queries",
      "Participated in code reviews and agile development processes"
    ]
  }
];

export default function Experience() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
              </div>
              <div className="text-gray-500 text-sm space-y-1">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}