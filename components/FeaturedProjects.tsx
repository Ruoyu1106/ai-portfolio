import Link from "next/link";
import { projects } from "@/lib/projects";

const tagStyles: Record<string, string> = {
  RAG: "bg-blue-100 text-blue-700",
  FAISS: "bg-sky-100 text-sky-700",
  TGI: "bg-indigo-100 text-indigo-700",
  LLM: "bg-violet-100 text-violet-700",
  Evaluation: "bg-fuchsia-100 text-fuchsia-700",
  NLP: "bg-purple-100 text-purple-700",
  Python: "bg-amber-100 text-amber-700",
  "Full Stack": "bg-emerald-100 text-emerald-700",
  APIs: "bg-cyan-100 text-cyan-700",
  "System Design": "bg-teal-100 text-teal-700",
};

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="mb-10 text-3xl font-semibold text-gray-900">
        Featured Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div
              className={`bg-gradient-to-br ${project.gradient} border-b border-gray-100 p-6`}
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 text-lg font-semibold text-gray-800 shadow-sm">
                {project.badge}
              </div>

              <p className="text-sm font-medium text-gray-600">
                {project.sublabel}
              </p>
            </div>

            <div className="p-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-900 transition group-hover:text-blue-600">
                {project.title}
              </h3>

              <p className="mb-4 text-sm leading-7 text-gray-600">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-md px-3 py-1 text-xs font-medium ${
                      tagStyles[tag] || "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}