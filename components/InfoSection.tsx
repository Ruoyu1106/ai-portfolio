import Image from "next/image";

export default function InfoSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      
      {/* Header */}
      <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gray-500">
        Experience
      </p>

      <h2 className="mb-12 text-3xl font-semibold text-gray-900">
        What I Build
      </h2>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">

        {/* AI */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
          
          <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
            <Image
              src="/ai.png"
              alt="AI Systems"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <h3 className="mt-4 mb-3 text-lg font-semibold text-gray-900">
            AI Systems & Modeling
          </h3>

          <div className="flex flex-wrap gap-2">
            <span className="tag-blue">RAG development</span>
            <span className="tag-blue">LLM applications</span>
            <span className="tag-blue">Workflow automation</span>
          </div>
        </div>

        {/* Backend */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
          
          <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
            <Image
              src="/backend.png"
              alt="Backend"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <h3 className="mt-4 mb-3 text-lg font-semibold text-gray-900">
            Backend & Engineering
          </h3>

          <div className="flex flex-wrap gap-2">
            <span className="tag-green">API integration</span>
            <span className="tag-green">Systems design</span>
            <span className="tag-green">Scalable architecture</span>
          </div>
        </div>

        {/* Research */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
          
          <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
            <Image
              src="/research.png"
              alt="Research"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <h3 className="mt-4 mb-3 text-lg font-semibold text-gray-900">
            Research & Evaluation
          </h3>

          <div className="flex flex-wrap gap-2">
            <span className="tag-purple">Model evaluation</span>
            <span className="tag-purple">Arabic LLM benchmark</span>
            <span className="tag-purple">Data analysis</span>
          </div>
        </div>

      </div>
    </section>
  );
}