import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3">
      <div className="md:col-span-2">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-gray-900">
          Ruoyu Zhang
        </h1>

        <p className="mb-4 text-lg text-gray-600">
          AI Engineer · AI Systems Engineer · RAG Developer
        </p>

        <p className="mb-4 max-w-2xl text-base leading-8 text-gray-700">
          AI Engineer with 1+ year of hands-on experience building AI systems across
          research and applied projects. Focused on developing RAG pipelines, LLM
          applications, and backend-integrated AI services for real-world use cases.
        </p>

        <ul className="mb-6 space-y-2 text-sm text-gray-600">
          <li>• Built RAG pipelines using FAISS and semantic embeddings</li>
          <li>• Integrated LLM APIs into production-style workflows</li>
          <li>• Designed scalable backend AI services and system architectures</li>
          <li>• Evaluated and improved model performance through benchmarking</li>
        </ul>

        <div className="mb-6 flex flex-wrap gap-2">
          {[
            "RAG Systems",
            "LLM Applications",
            "API Integration",
            "AI Evaluation",
            "Automation Workflows",
            "Backend Engineering",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Ruoyu1106"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-gray-900 px-5 py-2 text-sm text-white hover:bg-gray-800"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ruoyu-zhang-644879357"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gray-300 px-5 py-2 text-sm text-gray-800 hover:bg-gray-50"
          >
            LinkedIn
          </a>


        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <Image
          src="/core-strength.png"
          alt="Core strength illustration"
          width={500}
          height={280}
          className="mb-5 rounded-xl"
        />

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
          Core Strength
        </p>

        <h2 className="mb-3 text-xl font-semibold text-gray-900">
          Building practical AI systems
        </h2>

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            Core Focus
          </p>

          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            AI Systems Engineering
          </h2>

          <p className="mb-4 text-sm text-gray-600">
            RAG pipelines · LLM applications · backend integration · evaluation workflows
          </p>

        <div className="grid grid-cols-3 gap-3 rounded-xl bg-gray-50 p-4 text-center">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Experience
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-900">1+ year</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Focus
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-900">RAG / LLM</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Base
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-900">Auckland</p>
          </div>
        </div>
      </div>
    </section>
  );
}