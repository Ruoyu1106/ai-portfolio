export default function FeaturedProjects() {
  const projects = [
    {
      title: "Arabic RAG Pipeline",
      desc: "Built a retrieval-augmented generation system to improve Arabic LLM output quality and reduce hallucinations.",
      tags: ["RAG", "LLM", "Python"]
    },
    {
      title: "AI Elderly Assistant",
      desc: "Developed an AI-powered assistant using LLM APIs for elderly care support with multimodal interaction.",
      tags: ["LLM APIs", "Voice", "Frontend"]
    },
    {
      title: "AI Portfolio Website",
      desc: "Designed and built a full-stack personal portfolio with AI assistant integration and modern UI.",
      tags: ["Next.js", "React", "UI"]
    }
  ];

  return (
    <section className="py-20">
      <h2 className="text-2xl font-semibold text-gray-900 mb-10">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {p.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              {p.desc}
            </p>

            <div className="flex gap-2 flex-wrap">
              {p.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-gray-100 rounded-md text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}