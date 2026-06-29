import { Knex } from "knex";
import bcrypt from "bcryptjs";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("testimonials").del();
  await knex("leads").del();
  await knex("services").del();
  await knex("blogs").del();
  await knex("projects").del();
  await knex("users").del();

  // Check if profile table exists before deleting
  const hasProfile = await knex.schema.hasTable("profile");
  if (hasProfile) {
    await knex("profile").del();
  }

  // Seed Users
  const passwordHash = await bcrypt.hash("admin123", 10);
  await knex("users").insert([
    {
      name: "Malik Md Apu Rahman",
      email: "admin@anzdevelopers.com",
      password: passwordHash,
      role: "admin",
    },
  ]);

  // Seed Profile
  if (hasProfile) {
    await knex("profile").insert({
      name: "Malik Md Apu Rahman",
      title: "Senior Backend Engineer & Technical Lead",
      subtitle: "Founder of AnZ Developers",
      bio: "I help startups and enterprises build scalable backend systems, SaaS platforms, real-time applications and modern software products. I architect and build backend systems, architectures, and software platforms that remain maintainable, reliable, and scalable as products grow.",
      photo_url: null,
      resume_url: null,
      video_intro_url: null,
      email: "rahmanapu118@gmail.com",
      phone: "+8801619411488",
      location: "Bangladesh",
      stats: JSON.stringify([
        { value: "8+", label: "Years Experience" },
        { value: "50+", label: "Projects Delivered" },
        { value: "100%", label: "Client Satisfaction" },
        { value: "Top Rated", label: "Upwork" },
      ]),
      journey: JSON.stringify([
        {
          year: "2024 - Present",
          title: "Founder & Technical Lead",
          company: "AnZ Developers",
          description: "Leading engineering teams and building scalable software products.",
        },
        {
          year: "2022 - 2024",
          title: "Senior Software Engineer",
          company: "MagicMind",
          description: "Worked on enterprise systems, real-time platforms.",
        },
        {
          year: "2020 - 2022",
          title: "Senior Software Engineer",
          company: "SoftNTech",
          description: "Dedicated multiple web, mobile and backend solutions.",
        },
        {
          year: "2018 - 2020",
          title: "Software Engineer",
          company: "Freelance & Local Clients",
          description: "Started my journey in software development and worked on various client projects.",
        },
      ]),
      core_expertise: JSON.stringify([
        "Fastify",
        "PostgreSQL",
        "Redis",
        "Socket.IO",
        "SvelteKit",
        "TypeScript",
        "React",
        "Next.js",
        "System Design",
        "API Design",
        "DevOps",
        "Docker",
      ]),
      social_links: JSON.stringify({
        github: "https://github.com/mmar58",
        linkedin: "",
        upwork: "",
      }),
    });
  }

  // Seed Projects
  await knex("projects").insert([
    {
      title: "Enterprise Workforce Management Platform",
      slug: "enterprise-workforce-management",
      description:
        "A complete enterprise solution for workforce management with real-time tracking, scheduling, attendance, offline sync, and AI-powered insights. A generative admin dashboard.",
      cover_image: null,
      video_url: "https://www.youtube.com/watch?v=M8YWf6uVqpc",
      tech_stack: JSON.stringify(["SvelteKit", "Fastify", "TypeScript", "MySQL", "Redis", "Socket.IO", "Flutter"]),
      challenges: "Real-Time Architecture, Offline-First Mobile, GPS-tracked patrol tours, RBAC, AI Scheduling.",
      results: "Delivered a complete three-component enterprise workforce platform in 3 weeks.",
      live_demo: null,
      github_url: null,
      is_published: true,
      category: "enterprise",
      is_featured: true,
      features: JSON.stringify([
        "Real-Time Tracking",
        "Role-Based Access",
        "Offline First",
        "Advanced Reporting",
        "AI Scheduling",
        "Mobile + Web + Backend",
      ]),
      problem:
        "Businesses that run field service operations struggle with manual tracking, disconnected attendance, lack of real-time visibility and inefficient schedules.",
      solution:
        "We built a comprehensive platform that covers real-time tracking, offline capabilities, intelligent scheduling, automated reporting and a generative admin dashboard.",
      architecture:
        "Three-component architecture: Fastify REST + Socket.IO backend, SvelteKit dashboard, Flutter mobile app with offline-first sync.",
      key_results: JSON.stringify([
        { value: "40%", label: "Improvement in Productivity" },
        { value: "60%", label: "Reduction in Manual Work" },
        { value: "99.9%", label: "System Uptime" },
        { value: "1000+", label: "Active Users" },
      ]),
      screenshots: JSON.stringify([]),
      sort_order: 1,
    },
    {
      title: "Social Feed Platform",
      slug: "social-feed-platform",
      description:
        "Designed and built a complete full-stack social media application in 3 days as a technical assessment. Features JWT cookie-based auth, cursor-paginated feed, threaded comments.",
      cover_image: null,
      video_url: null,
      tech_stack: JSON.stringify(["Next.js", "React", "TypeScript", "Express", "MySQL", "Socket.IO"]),
      challenges: "Engineered for scale: batched post hydration eliminating N+1 queries.",
      results: "Features JWT cookie-based auth, cursor-paginated feed, public/private post visibility.",
      live_demo: null,
      github_url: "https://github.com/mmar58/social_media_app",
      is_published: true,
      category: "backend",
      is_featured: false,
      features: JSON.stringify([
        "Real-Time Notifications",
        "Threaded Comments",
        "Cursor Pagination",
        "Image Uploads",
      ]),
      problem: "Building a production-quality social platform from scratch under extreme time constraints.",
      solution:
        "Architected a modular full-stack system with efficient data loading patterns and real-time updates.",
      architecture: "Next.js frontend, Express API, MySQL database, Socket.IO for real-time notifications.",
      key_results: JSON.stringify([
        { value: "3", label: "Days to Ship" },
        { value: "0", label: "N+1 Queries" },
        { value: "100%", label: "Test Coverage" },
      ]),
      screenshots: JSON.stringify([]),
      sort_order: 2,
    },
    {
      title: "Coin Flip Platform",
      slug: "coin-flip-platform",
      description:
        "A robust, live coin betting game utilizing Unity for the front-end and a scalable NodeJS backend. Features integrated live betting, user retention mechanisms, and real-time chat.",
      cover_image: null,
      video_url: null,
      tech_stack: JSON.stringify(["Unity", "Node.js", "Express", "Socket.IO"]),
      challenges: "Real-time betting system synchronization and secure crypto transactions.",
      results: "Robust real-time betting platform with live chat and crypto integration.",
      live_demo: null,
      github_url: null,
      is_published: true,
      category: "real-time",
      is_featured: false,
      features: JSON.stringify([
        "Live Betting",
        "Real-Time Chat",
        "Crypto Wallet",
        "User Retention",
      ]),
      problem: "Creating a fair, real-time betting platform with cryptocurrency integration.",
      solution: "Built a microservice architecture with Socket.IO for real-time game events and secure transaction processing.",
      architecture: "Unity WebGL frontend, Express + Socket.IO backend microservices.",
      key_results: JSON.stringify([]),
      screenshots: JSON.stringify([]),
      sort_order: 3,
    },
  ]);

  // Seed Services
  await knex("services").insert([
    {
      title: "Backend Engineering",
      description:
        "High-performance APIs, database design, optimization, caching and scalable architectures.",
      icon: "server",
      slug: "backend-engineering",
      sort_order: 1,
    },
    {
      title: "Real-Time Systems",
      description:
        "Real-time applications, event-driven systems with Socket.IO, live tracking and chat platforms.",
      icon: "activity",
      slug: "real-time-systems",
      sort_order: 2,
    },
    {
      title: "SaaS Development",
      description:
        "Multi-tenant SaaS platforms with subscription billing, analytics, dashboards and workflows.",
      icon: "cloud",
      slug: "saas-development",
      sort_order: 3,
    },
    {
      title: "Mobile Development",
      description:
        "Cross-platform mobile apps with Flutter, offline sync, GPS tracking and real-time features.",
      icon: "smartphone",
      slug: "mobile-development",
      sort_order: 4,
    },
    {
      title: "Technical Leadership",
      description:
        "Architecture planning, team leadership, code reviews, mentoring and project management.",
      icon: "users",
      slug: "technical-leadership",
      sort_order: 5,
    },
  ]);

  // Seed Blogs
  await knex("blogs").insert([
    {
      title: "Building Scalable APIs with Fastify",
      slug: "building-scalable-apis-with-fastify",
      content:
        "Fastify is one of the fastest Node.js frameworks in the entire web ecosystem. In this article, we explore how to build high-performance, scalable REST APIs with Fastify. From schema validation to plugin architecture, Fastify provides everything needed for enterprise-grade backends.\n\n## 1. Use Schema Validation\n\nFastify has built-in JSON Schema validation that not only validates your request/response but also serializes responses faster.\n\n## 2. Redis Caching Strategies\n\nImplement intelligent caching layers using Redis to dramatically reduce database load.\n\n## 3. Plugin Architecture\n\nLeverage Fastify's encapsulated plugin system for modular, maintainable code.\n\n## 4. AI-Assisted Development\n\nUse AI tools to accelerate boilerplate generation while focusing on architecture decisions.",
      author_id: 1,
      cover_image: null,
      is_published: true,
      excerpt:
        "Learn how to build high-performance, scalable REST APIs using Fastify, Redis caching, and modern backend patterns.",
      category: "Backend Engineering",
      tags: JSON.stringify(["Fastify", "Node.js", "API", "Redis", "Backend"]),
    },
    {
      title: "Redis Caching Strategies for High Performance",
      slug: "redis-caching-strategies",
      content:
        "Redis is a powerful in-memory data store that can dramatically improve your application performance. Learn the best caching strategies and patterns for production systems.",
      author_id: 1,
      cover_image: null,
      is_published: true,
      excerpt:
        "Explore Redis caching patterns that can reduce your API response times by up to 90%.",
      category: "Backend Engineering",
      tags: JSON.stringify(["Redis", "Caching", "Performance", "Backend"]),
    },
    {
      title: "Designing Real-Time Systems with Socket.IO",
      slug: "designing-real-time-systems-socketio",
      content:
        "Real-time features are essential in modern applications. This article covers architecture patterns for building scalable real-time systems using Socket.IO and Redis pub/sub.",
      author_id: 1,
      cover_image: null,
      is_published: true,
      excerpt:
        "Architecture patterns for building scalable real-time systems with Socket.IO.",
      category: "Real-Time Systems",
      tags: JSON.stringify(["Socket.IO", "Real-Time", "WebSockets", "Redis"]),
    },
    {
      title: "AI-Assisted Development Workflows",
      slug: "ai-assisted-development",
      content:
        "How to leverage AI tools effectively in your development workflow while maintaining engineering quality and architectural integrity.",
      author_id: 1,
      cover_image: null,
      is_published: true,
      excerpt:
        "Leverage AI tools to accelerate development while maintaining engineering quality.",
      category: "Architecture",
      tags: JSON.stringify(["AI", "Productivity", "Engineering"]),
    },
  ]);
}
