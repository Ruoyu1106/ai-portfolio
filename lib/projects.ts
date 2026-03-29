export const projects = [
  {
    slug: "rag-allam7b",
    title: "Arabic RAG System (ALLAM 7B)",
    summary:
      "Built a production-style RAG pipeline using FAISS and LaBSE embeddings, integrated with a deployed ALLAM 7B model via TGI for Arabic translation and generation.",
    description:
      "This project focused on building an Arabic retrieval-augmented generation system to improve response relevance, retrieval quality, and linguistic fluency for Arabic language tasks. The system combines semantic retrieval, vector search, and large language model inference in a production-style workflow.",
    languages: ["Python"],
    technologies: ["RAG", "FAISS", "LaBSE", "TGI", "LLM", "FastAPI"],
    platform: ["Linux", "Hugging Face", "Text Generation Inference"],
    highlights: [
      "Built a retrieval pipeline using FAISS for semantic search over Arabic reference data.",
      "Integrated LaBSE embeddings for multilingual semantic representation.",
      "Connected the retrieval system with deployed ALLAM 7B inference via TGI.",
      "Improved Arabic generation relevance and reduced hallucination through retrieval grounding.",
    ],
    github: "https://github.com/Ruoyu1106/RAG_Allam7B",
    badge: "RAG",
    sublabel: "Retrieval-Augmented Generation",
    gradient: "from-blue-100 via-sky-50 to-indigo-100",
    tags: ["RAG", "FAISS", "TGI", "LLM"],
  },
  {
    slug: "arabic-llm-benchmark",
    title: "Arabic LLM Benchmark & Evaluation",
    summary:
      "Designed and implemented benchmarking pipelines for Arabic LLMs using datasets such as ArabicMMLU and BAREC.",
    description:
      "This project focused on evaluating Arabic large language models across reasoning, cultural understanding, and readability tasks. It involved building reusable benchmarking workflows, preparing evaluation datasets, running experiments, and comparing model performance across multiple criteria.",
    languages: ["Python"],
    technologies: ["LLM Evaluation", "NLP", "Benchmarking", "ArabicMMLU", "BAREC"],
    platform: ["Jupyter", "Python Scripts", "Model Evaluation Pipelines"],
    highlights: [
      "Built benchmarking workflows for Arabic LLM evaluation.",
      "Tested model performance on reasoning, culture, and readability tasks.",
      "Used structured datasets such as ArabicMMLU and BAREC.",
      "Generated comparative results to support model selection and analysis.",
    ],
    github: "https://github.com/Ruoyu1106/arabic-llm-benchmark",
    badge: "LLM",
    sublabel: "Benchmarking & Evaluation",
    gradient: "from-violet-100 via-fuchsia-50 to-purple-100",
    tags: ["LLM", "Evaluation", "NLP", "Python"],
  },
  {
    slug: "compsys770-capstone",
    title: "AI Capstone System",
    summary:
      "Developed a full-stack AI application combining backend APIs, data processing, and frontend interaction.",
    description:
      "This project demonstrates end-to-end AI application development with both frontend and backend components. It focuses on system design, API integration, and practical engineering implementation in a capstone-style environment.",
    languages: ["Python", "JavaScript"],
    technologies: ["Full Stack", "REST APIs", "System Design", "Frontend", "Backend"],
    platform: ["Web Application", "API Services", "Capstone Project Environment"],
    highlights: [
      "Designed and implemented a full-stack AI system.",
      "Integrated backend APIs with frontend user interaction.",
      "Structured the application as an end-to-end engineering project.",
      "Demonstrated practical deployment-oriented system thinking.",
    ],
    github: "https://github.com/Ruoyu1106/COMPSYS770-CAPSTONE",
    badge: "APP",
    sublabel: "Full-Stack AI Application",
    gradient: "from-emerald-100 via-teal-50 to-cyan-100",
    tags: ["Full Stack", "APIs", "System Design"],
  },
];