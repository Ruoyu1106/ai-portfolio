export default function InfoSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-gray-900">About</h3>
          <p className="leading-7 text-gray-600">
            I am an AI Engineer with a background in Computer Systems
            Engineering and Artificial Intelligence. My interests include RAG
            systems, LLM applications, backend integration, and practical AI
            products for real-world use.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Experience</h3>
          <p className="leading-7 text-gray-600">
            I have worked on AI application development, backend API services,
            workflow automation, model evaluation, and embedded systems
            projects, with experience across both software and AI engineering
            environments.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Focus</h3>
          <p className="leading-7 text-gray-600">
            My current focus is building production-oriented AI systems that
            combine LLMs, retrieval pipelines, automation workflows, and
            user-facing web interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}