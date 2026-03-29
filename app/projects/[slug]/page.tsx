import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <div
          className={`mb-8 rounded-3xl border border-gray-200 bg-gradient-to-br ${project.gradient} p-8 shadow-sm`}
        >
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/80 text-xl font-semibold text-gray-800 shadow-sm">
            {project.badge}
          </div>

          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-600">
            {project.sublabel}
          </p>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900">
            {project.title}
          </h1>

          <p className="max-w-3xl text-base leading-8 text-gray-700">
            {project.summary}
          </p>
        </div>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
              Project Type
            </p>
            <p className="text-base font-semibold text-gray-900">
              {project.sublabel}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
              Main Language
            </p>
            <p className="text-base font-semibold text-gray-900">
              {project.languages[0]}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
              Focus
            </p>
            <p className="text-base font-semibold text-gray-900">
              {project.tags.join(" · ")}
            </p>
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight">
            Project Overview
          </h2>

          <div className="space-y-4 text-gray-600 leading-8">
            <p>{project.description}</p>
            <p>
              This project demonstrates practical engineering thinking across
              system design, implementation, integration, and deployment-style
              workflows, with a strong focus on building reliable AI-enabled
              systems rather than isolated experiments.
            </p>
          </div>
        </section>

        <section className="mb-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {project.languages.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Platform</h3>
            <div className="flex flex-wrap gap-2">
              {project.platform.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight">
            Key Contributions
          </h2>

          <div className="space-y-4">
            {project.highlights.map((item, index) => (
              <div key={item} className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  {index + 1}
                </div>
                <p className="leading-8 text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight">
            Engineering Focus
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                System Design
              </h3>
              <p className="text-sm leading-7 text-gray-600">
                Structured the project as a reusable engineering workflow rather
                than a one-off experiment, emphasizing modularity, clarity, and
                maintainability.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                Practical Implementation
              </h3>
              <p className="text-sm leading-7 text-gray-600">
                Focused on working code, integration between components, and
                realistic AI system behavior that supports user-facing use
                cases.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Repository
          </h2>
          <p className="mb-6 max-w-2xl leading-8 text-gray-600">
            View the source code, project structure, and implementation details
            on GitHub.
          </p>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            View on GitHub
          </a>
        </section>
      </div>
    </main>
  );
}