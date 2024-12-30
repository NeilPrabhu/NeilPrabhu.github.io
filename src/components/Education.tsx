interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

// ...existing code...
const education: EducationItem[] = [
    {
        institution: "University of California, Berkeley",
        degree: "M.S. in Data Science",
        location: "Berkeley, CA",
        period: "2021 - 2023",
    },
    {
        institution: "Santa Clara University",
        degree: "B.S. in Computer Science",
        location: "Santa Clara, CA",
        period: "2014 - 2018",
    },
];

export default function Education() {
    return (
      <>
        <section>
          {/* ...existing Experience component JSX... */}
        </section>
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-8">Education</h2>
          {education.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold">{item.institution}</h3>
              <p className="flex items-center text-gray-300">
                <span>
                  {item.degree} • {item.location}
                </span>
                <span className="ml-auto">{item.period}</span>
              </p>
            </div>
          ))}
        </section>
      </>
    );
  }