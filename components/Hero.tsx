export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
      <div className="md:col-span-2">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          Ruoyu Zhang
        </h1>

        <p className="mb-4 text-lg text-gray-700">
          AI Engineer | AI Systems Engineer | RAG Developer
        </p>

        <p className="mb-6 max-w-2xl leading-8 text-gray-600">
          AI Engineer with experience in building AI applications using Python,
          LLM APIs, RAG pipelines, automation workflows, and backend
          integration. I enjoy building practical systems that connect large
          language models with real user needs.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Ruoyu1106"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-800 hover:bg-gray-50"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ruoyu-zhang-644879357"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-800 hover:bg-gray-50"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-800 hover:bg-gray-50"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <div className="mb-4 h-40 w-full rounded-xl bg-gray-200" />

        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          Core Focus
        </h2>

        <p className="text-sm leading-7 text-gray-600">
          RAG pipelines, LLM applications, backend integration, workflow
          automation, model evaluation, and practical AI systems for production
          use.
        </p>
      </div>
    </section>
  );
}