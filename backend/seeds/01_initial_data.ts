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

  // Seed Projects
  await knex("projects").insert([
    {
      title: "Enterprise Security & Workforce Management System",
      slug: "enterprise-workforce-management",
      description: "A complete three-component enterprise workforce platform: a Fastify REST + Socket.IO backend API, a SvelteKit web dashboard, and an offline-first Flutter mobile app.",
      cover_image: null,
      video_url: "https://www.youtube.com/watch?v=M8YWf6uVqpc",
      tech_stack: JSON.stringify(["SvelteKit", "Fastify", "TypeScript", "MySQL", "Redis", "Socket.IO", "Flutter"]),
      challenges: "Real-Time Architecture, Offline-First Mobile, GPS-tracked patrol tours.",
      results: "Delivered a complete three-component enterprise workforce platform in 3 weeks.",
      live_demo: null,
      github_url: null,
      is_published: true,
    },
    {
      title: "Social Feed App",
      slug: "social-feed-app",
      description: "Designed and built a complete full-stack social media application in 3 days as a technical assessment.",
      cover_image: null,
      video_url: null,
      tech_stack: JSON.stringify(["Next.js", "React", "TypeScript", "Express", "MySQL", "Socket.IO"]),
      challenges: "Engineered for scale: batched post hydration eliminating N+1 queries.",
      results: "Features JWT cookie-based auth, cursor-paginated feed, public/private post visibility.",
      live_demo: null,
      github_url: "https://github.com/mmar58/social_media_app",
      is_published: true,
    }
  ]);
}
