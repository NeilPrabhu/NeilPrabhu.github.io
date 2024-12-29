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
    company: "Juniper Networks",
    location: "Sunnyvale, CA",
    period: "April 2022 - Present",
    description: [
      "Successfully implemented a Generative AI (ChatGPT like) platform for employees to use, increasing overall productivity of 3,000+ engineers.",
      "Wrote and Integrated ReviewBot, a bot using RAG (Retrieval-Augmented Generation) and LLMs (Large Language Models) to improve the quality of code reviews for commits to Juniper’s Operating Systems (JunOS and EVO), impacting over 2,000 software developers.",
      "Developed on-premise RAG pipeline to ingest internal team documents to supplement LLM responses for questions on documents from HR, marketing, and engineering.",
      "Redesigned back-end code coverage repository, reducing complexity of code base and runtime for developers by over 50%.",
      "Architected and deployed robust CI/CD pipelines for internal tooling repositories, streamlining automated testing, containerization, and multi-stage deployments (testing, staging, production) on Kubernetes.",
      "Enabled faster, more reliable service rollouts, reducing manual intervention and deployment time by 30%.",
      "Migrated from NoSQL (Mongo) to relational database (Postgres), improving data handling and following company security standards."
    ]
  },
  {
    title: "Cloud Data Warehouse Engineer",
    company: "Snowflake",
    location: "San Mateo, CA",
    period: "August 2021 - April 2022",
    description: [
      "Triaged Customer Support Tickets by resolving query runtime errors and warehouse issues",
      "Analyzed and optimized customer queries for performance, using warehouses, lambda functions, views, and clustering techniques to improve query response times by an average of 40% (SnowPro Certified)",
      "Supported Customers in setting up data pipelines from Cloud Providers to Snowflake (snow CLI & snow-pipe)"
    ]
  },
  {
    title: "Software Engineer",
    company: "Juniper Networks",
    location: "Sunnyvale, CA",
    period: "July 2018 - June 2021",
    description: [
      "Built log monitoring service using ELK for internal teams, reducing VM downtime by 30% and debugging by 25%",
      "Developed a Machine Learning Model to predict build compilation time increasing overall developer productivity",
      "Contributed to Build as a Service, an on-premise developer platform using Kubernetes, reducing VM costs and deployment time by 50%"
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