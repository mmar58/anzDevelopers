import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // Create profile table for founder about-page content
  await knex.schema.createTable("profile", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("title");
    table.string("subtitle");
    table.text("bio");
    table.string("photo_url");
    table.string("resume_url");
    table.string("video_intro_url");
    table.string("email");
    table.string("phone");
    table.string("location");
    table.json("stats"); // e.g. [{ label: "Years Experience", value: "8+" }]
    table.json("journey"); // e.g. [{ year: "2024 - Present", title: "...", company: "...", description: "..." }]
    table.json("core_expertise"); // e.g. ["Fastify", "PostgreSQL", ...]
    table.json("social_links"); // e.g. { github: "...", linkedin: "...", upwork: "..." }
    table.timestamps(true, true);
  });

  // Enhance projects table
  await knex.schema.alterTable("projects", (table) => {
    table.string("category").defaultTo("backend");
    table.boolean("is_featured").defaultTo(false);
    table.json("features"); // e.g. ["Real-Time Tracking", "Offline Sync"]
    table.text("problem");
    table.text("solution");
    table.text("architecture");
    table.json("key_results"); // e.g. [{ value: "40%", label: "Improvement in Productivity" }]
    table.json("screenshots"); // array of image URLs
    table.integer("sort_order").defaultTo(0);
  });

  // Enhance services table
  await knex.schema.alterTable("services", (table) => {
    table.string("slug").unique();
    table.integer("sort_order").defaultTo(0);
  });

  // Enhance blogs table
  await knex.schema.alterTable("blogs", (table) => {
    table.text("excerpt");
    table.string("category");
    table.json("tags");
  });

  // Enhance leads table
  await knex.schema.alterTable("leads", (table) => {
    table.string("phone");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("profile");

  await knex.schema.alterTable("projects", (table) => {
    table.dropColumn("category");
    table.dropColumn("is_featured");
    table.dropColumn("features");
    table.dropColumn("problem");
    table.dropColumn("solution");
    table.dropColumn("architecture");
    table.dropColumn("key_results");
    table.dropColumn("screenshots");
    table.dropColumn("sort_order");
  });

  await knex.schema.alterTable("services", (table) => {
    table.dropColumn("slug");
    table.dropColumn("sort_order");
  });

  await knex.schema.alterTable("blogs", (table) => {
    table.dropColumn("excerpt");
    table.dropColumn("category");
    table.dropColumn("tags");
  });

  await knex.schema.alterTable("leads", (table) => {
    table.dropColumn("phone");
  });
}
