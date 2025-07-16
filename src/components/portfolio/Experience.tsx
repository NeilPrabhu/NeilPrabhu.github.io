import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  companyUrl?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Zest AI",
    location: "Los Angeles, CA",
    period: "June 2025 - Present",
    description: [
      "Core Product in ML"
    ],
    companyUrl: "https://www.zest.ai/"
  },
  {
    title: "Software Engineer",
    company: "Juniper Networks",
    location: "Sunnyvale, CA",
    period: "April 2022 - June 2025",
    description: [
      "Integrated a Generative AI platform for Juniper Employees, boosting productivity for 3,000+ employees.",
      "Built a Python-based \"ReviewBot\" (RAG + LLM) to improve code reviews for 1,500+ developers",
      "Refactored backend from Perl to Python, reducing complexity and runtime by 50%.",
      "Redesigned backend (8+ applications) with gRPC on Kubernetes, reducing resource usage and costs by 30% while cutting inter-service latency by 30%.",
      "Enabled faster, more reliable service rollouts, reducing manual intervention and deployment time by 20%.",
      "Enabled faster, more reliable service rollouts, reducing manual intervention and deployment time by 30%.",
      "Migrated from NoSQL (Mongo) to relational database (Postgres), improving data handling and following company security standards.",
      "Ported the code coverage team's FT workflow from Perl to Golang, speeding up processing for hundreds of GB of data by 60% and unblocking users dependent on coverage metrics."
    ]
  },
  {
    title: "Cloud Data Warehouse Engineer",
    company: "Snowflake",
    location: "San Mateo, CA",
    period: "August 2021 - April 2022",
    description: [
      "Resolved Customer Support Tickets: Handled 50+ tickets monthly, diagnosing query runtime errors and warehouse issues—cutting escalation to tier-1 support by 35%.",
      "Optimized Database Performance: Analyzed and tuned customer queries (warehouses, lambda functions, clustering) - SnowPro Certified.",
      "Built Cloud-to-Snowflake Pipelines: Supported 20+ enterprise clients in creating resilient data pipelines from Azure, GCP, and AWS to Snowflake."
    ]
  },
  {
    title: "Software Engineer",
    company: "Juniper Networks",
    location: "Sunnyvale, CA",
    period: "July 2018 - June 2021",
    description: [
      "Built Log Monitoring (ELK): Implemented a centralized log monitoring service for internal teams, reducing VM downtime by 30% and speeding up debugging by 25%.",
      "Deployed an ML Model (Python/FastAPI): Developed a regression model to estimate build compile times, cutting average wait time by 20% and boosting developer productivity.",
      "Contributed to \"Build as a Service\" (Kubernetes): Reduced VM costs by 40% and deployment times by 50% through automation in an on-prem platform written in Python."
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
                {exp.companyUrl ? (
                  <a 
                    href={exp.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary font-medium hover:underline"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <p className="text-primary font-medium">{exp.company}</p>
                )}
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