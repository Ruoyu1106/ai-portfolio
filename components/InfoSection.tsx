export default function InfoSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Overview
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
          Experience and direction
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">About</h3>
          <p className="leading-8 text-gray-600">
            I have a background in Computer Systems Engineering and Artificial
            Intelligence, with strong interests in RAG systems, LLM
            applications, backend integration, and real-world AI products.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">
            Experience
          </h3>
          <p className="leading-8 text-gray-600">
            My work includes AI application development, backend API services,
            workflow automation, model evaluation, and system-oriented software
            engineering across research and applied environments.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">Focus</h3>
          <p className="leading-8 text-gray-600">
            I am currently focused on building practical AI systems that combine
            LLMs, retrieval pipelines, automation workflows, and user-facing web
            interfaces into reliable end-to-end products.
          </p>
        </div>
      </div>
    </section>
  );
}