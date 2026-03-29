export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-gray-900">
      <section className="mb-14">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gray-500">
          About
        </p>
        <h1 className="mb-4 text-4xl font-semibold tracking-tight">
          Education & Experience
        </h1>
        <p className="max-w-3xl leading-8 text-gray-600">
          AI Engineer with a background in Artificial Intelligence and Computer
          Systems Engineering, interested in LLM applications, retrieval systems,
          backend integration, and practical AI products.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-semibold">Education</h2>

        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Master of Artificial Intelligence
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              The University of Auckland · Mar. 2025 – Nov. 2025 · Auckland
            </p>
            <p className="mt-4 leading-8 text-gray-600">
              Focused on advanced AI topics with particular interest in large
              language models, retrieval-augmented generation, evaluation, and
              practical AI system development.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Bachelor of Engineering (Honours) in Computer Systems Engineering
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              The University of Auckland · Jun. 2021 – Nov. 2024 · Auckland
            </p>
            <p className="mt-4 leading-8 text-gray-600">
              Built a strong foundation in software engineering, embedded systems,
              digital systems, backend logic, and project-based system design.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-semibold">Work Experience</h2>

        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Intern, AI Model Development Department
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Beijing Dipu Technology Co., Ltd. · Nov. 2023 – Feb. 2024 · Beijing
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-8 text-gray-600">
              <li>Researched large language models and deployable model solutions.</li>
              <li>Explored the features of large-model all-in-one platforms in the market.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Website Development & Maintenance
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Freco New Zealand Ltd. · Nov. 2022 – Apr. 2023 · Auckland
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-8 text-gray-600">
              <li>Developed the company website and supported ongoing maintenance.</li>
              <li>Worked on practical website implementation in a business setting.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Intern, AI Model Development Department
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Beijing Dipu Technology Co., Ltd. · Jul. 2022 – Sep. 2022 · Beijing
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-8 text-gray-600">
              <li>Joined the Dual Carbon Project for software development and testing.</li>
              <li>Assisted with big data software for company data analysis and statistics.</li>
              <li>Prepared test plans, executed functional and regression testing, and helped improve the software.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-semibold">Selected Academic Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Smart Scale System
            </h3>
            <p className="mt-3 leading-8 text-gray-600">
              Team leader for an ECSE capstone project building a smart scale
              system for Plunket nurses to automatically record patient weight and
              update a frontend interface in real time.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              AI-Enabled Virtual Assistant for Aged Care
            </h3>
            <p className="mt-3 leading-8 text-gray-600">
              Designed an elder-care chatbot using ChatGPT API, with a 3D avatar
              and multimodal interaction through voice, text, and touch.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Skills</h2>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "Java",
              "C",
              "Jupyter",
              "Matlab",
              "Embedded Systems",
              "Software Engineering",
              "Testing",
              "AI Applications",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}