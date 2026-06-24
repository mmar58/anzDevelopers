import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.enum("role", ["admin", "editor"]).defaultTo("editor");
    table.timestamps(true, true);
  });

  await knex.schema.createTable("projects", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("slug").notNullable().unique();
    table.text("description");
    table.string("cover_image");
    table.string("video_url");
    table.json("tech_stack");
    table.text("challenges");
    table.text("results");
    table.string("live_demo");
    table.string("github_url");
    table.boolean("is_published").defaultTo(false);
    table.timestamps(true, true);
  });

  await knex.schema.createTable("blogs", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("slug").notNullable().unique();
    table.text("content");
    table.integer("author_id").unsigned().references("id").inTable("users").onDelete("SET NULL");
    table.string("cover_image");
    table.boolean("is_published").defaultTo(false);
    table.timestamps(true, true);
  });

  await knex.schema.createTable("services", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("description");
    table.string("icon");
    table.timestamps(true, true);
  });

  await knex.schema.createTable("leads", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("company");
    table.string("budget");
    table.string("project_type");
    table.text("project_description");
    table.enum("status", ["new", "contacted", "closed"]).defaultTo("new");
    table.timestamps(true, true);
  });

  await knex.schema.createTable("testimonials", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("company");
    table.text("quote");
    table.string("avatar_url");
    table.string("video_url");
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("testimonials");
  await knex.schema.dropTableIfExists("leads");
  await knex.schema.dropTableIfExists("services");
  await knex.schema.dropTableIfExists("blogs");
  await knex.schema.dropTableIfExists("projects");
  await knex.schema.dropTableIfExists("users");
}
