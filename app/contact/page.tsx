import Navbar from "../../components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-8 text-4xl font-bold">Contact</h1>

        <div className="space-y-4 text-lg text-gray-700">
          <p>Email: 1186493557@qq.com</p>
          <p>Phone: 0221667696</p>
          <p>Location: Auckland, New Zealand</p>
<p>
  LinkedIn:{" "}
  <a
    href="https://www.linkedin.com/in/ruoyu-zhang-644879357"
    target="_blank"
    className="text-blue-600 hover:underline"
  >
    linkedin.com/in/ruoyu-zhang-644879357
  </a>
</p>

<p>
  GitHub:{" "}
  <a
    href="https://github.com/Ruoyu1106"
    target="_blank"
    className="text-blue-600 hover:underline"
  >
    github.com/Ruoyu1106
  </a>
</p>
        </div>
      </section>
    </main>
  );
}