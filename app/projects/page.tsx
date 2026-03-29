export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
    

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-10 text-4xl font-bold">Projects</h1>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              LLM-Powered Personal Portfolio Website
            </h2>
            <p className="leading-7 text-gray-600">
              Built a personal portfolio website with Next.js and React to
              present projects, experience, and an AI assistant for recruiter
              questions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Arabic RAG Pipeline Development
            </h2>
            <p className="leading-7 text-gray-600">
              Developed RAG pipelines and backend AI services to improve Arabic
              language response quality, reduce hallucination, and support
              production-style AI workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              AI Application for Elderly Care
            </h2>
            <p className="leading-7 text-gray-600">
              Built an AI-powered application using Python, JavaScript, and LLM
              APIs to support elderly care Q&A with multimodal interaction
              through voice, text, and touch.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Smart Scale System
            </h2>
            <p className="leading-7 text-gray-600">
              Developed an IoT-based smart scale system using embedded
              programming, sensors, and wireless data transmission for real-time
              monitoring and frontend display.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}