export default function Education() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* 标题 */}
      <div className="mb-10">
        <p className="text-xs tracking-widest text-gray-500 uppercase">
          Education
        </p>
        <h2 className="text-2xl font-semibold text-gray-900">
          Academic Background
        </h2>
      </div>

      {/* Timeline风格 */}
      <div className="space-y-8 border-l border-gray-200 pl-6">
        
        {/* Master */}
        <div className="relative">
          <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-500" />

          <h3 className="text-lg font-semibold text-gray-900">
            Master of Artificial Intelligence
          </h3>

          <p className="text-sm text-gray-500">
            University of Auckland · 2024 – 2026
          </p>

          <p className="mt-3 text-gray-600 leading-7">
            Focused on large language models, retrieval-augmented generation (RAG),
            and practical AI system deployment. Conducted research on Arabic LLM
            evaluation, fine-tuning, and real-world AI applications.
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-md bg-blue-100 px-3 py-1 text-xs text-blue-700">
              LLM
            </span>
            <span className="rounded-md bg-blue-100 px-3 py-1 text-xs text-blue-700">
              RAG
            </span>
            <span className="rounded-md bg-blue-100 px-3 py-1 text-xs text-blue-700">
              NLP
            </span>
          </div>
        </div>

        {/* Bachelor */}
        <div className="relative">
          <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-gray-400" />

          <h3 className="text-lg font-semibold text-gray-900">
            Bachelor of Engineering (Honours) – Computer Systems Engineering
          </h3>

          <p className="text-sm text-gray-500">
            University of Auckland
          </p>

          <p className="mt-3 text-gray-600 leading-7">
            Built strong foundations in software engineering, distributed systems,
            and backend development. Completed multiple system design and AI-related
            projects including full-stack applications and capstone systems.
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-700">
              Systems Design
            </span>
            <span className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-700">
              Backend
            </span>
            <span className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-700">
              Software Engineering
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}