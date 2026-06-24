# Malik Md Apu Rahman

**Senior Full-Stack Engineer | Tech Lead | Real-Time & Enterprise Systems**  
|---|  
\+8801619411488 | rahmanapu118@gmail.com | [www.github.com/mmar58](http://www.github.com/mmar58) | https://mmar58.netlify.app/

---

# Summary

Results-driven full-stack engineer and technical leader with a strong track record of architecting and delivering enterprise-grade, real-time management platforms from scratch. Proven ability to rapidly ship complete multi-component systems — from scalable Fastify/Node.js REST APIs with Socket.IO real-time engines and Redis-backed caching, to SvelteKit dashboards and offline-first Flutter mobile apps with live GPS tracking and automatic sync. Additional depth spans complex Unity WebGL pipelines, BLE sensor integration, and ML-based biometrics. Expert at designing performant data architectures (RBAC, server-side pagination, N+1 elimination), leading cross-functional teams, and driving measurable workflow improvements. Seeking a **Tech Lead / Senior Full-Stack Engineer** role building complex real-time platforms, enterprise SaaS products, workforce or operations management systems, or high-value digital products.

---

# Experience

## MagicMind (US Company, Remote)

**Unity Developer (with Lead Responsibilities)** | Late 2022 – May 2026

* **Architectural Innovation:** Conceived, planned, and implemented a major architectural overhaul for the core 'Journey Creator' application (60+ scripts, ~7,000+ LOC across core controllers), transitioning it from a static, manual JSON entry system to a dynamic, web UI-driven solution powered by the Slate Cinematic Sequencer.  
* **System Integration & WebGL Bridge:** Designed and implemented a structured JSON command protocol and a bidirectional WebGL JavaScript bridge (`.jslib` plugins) enabling the web front-end to seamlessly send commands to the Unity application — covering sections, media resources, textboxes, graphics, audio tracks, breathwork protocols, and guided visual elements.  
* **Video & Animation Pipeline:** Built a multi-player video system with seamless timeline-synchronized transitions, forward/backward seeking, caching, shape transformations, and a 15-type animation system (fade, pulse, rotate, breath, neon, succession, etc.).  
* **BLE Sensor & ML Biometrics Integration:** Integrated Bluetooth Low Energy (BLE) connectivity for HRV monitors and Muse EEG headsets via the Web Bluetooth API, with real-time HRV analysis and an ONNX ML model for stress detection (Unity 6 Inference Engine).  
* **Developer Tooling:** Created a custom Runtime Debugger (F2 panel) with a live hierarchy browser, inspector, and method invoker supporting complex parameter types — significantly accelerating QA and debugging cycles for the team.  
* **Comprehensive Documentation:** Authored an 11-document technical documentation suite covering architecture, APIs, testing, and onboarding — enabling faster developer ramp-up and consistent cross-team knowledge sharing.  
* **Technical Leadership & Mentorship:** Acted as an informal Tech Lead, responsible for coordinating developers, ensuring solid synchronization between all application components (web, backend, Unity), and maintaining high standards for the overall application quality and live performance.  
* **Quality Assurance & Maintenance:** Built Edit Mode and Play Mode test suites and editor simulation tools, and gained significant expertise in rigorous QA processes and comprehensive system maintenance.

## SoftNTech

**Lead Developer** | 2020 – 2022

* **Technical Strategy & R\&D:** Conducted extensive research and prototyping using emerging game development frameworks (e.g., Phaser, Three.js, Unity) to inform future product development directions.  
* **Full-Stack Development:** Developed scripts and full website solutions for cryptocurrency token management, including the implementation of automation features.  
* **Team Leadership:** Successfully led development teams through project lifecycles, ensuring project completion aligned with technical specifications and deadlines.

## SoftNTech

**Beginner Developer** | 2018 – 2020

* **Mobile Development:** Contributed significantly to the development of multiple child-focused games using the Ionic framework (v1 through v4).  
* **Workflow Enhancement:** Championed internal technical modernization efforts, including introducing modern code editors (VS Code) to replace outdated tools (Sublime Text) and contributing to the creation of internal reusable libraries, enhancing team efficiency and code quality.

---

## Projects

**Enterprise Security & Workforce Management System** \[2026\]

* **Tech:** SvelteKit (Svelte 5), Fastify (Node.js 20), TypeScript, MySQL, Redis, Socket.IO, Flutter (Dart)  
* **Video Overview:** https://www.youtube.com/watch?v=M8YWf6uVqpc
* Architected and delivered a complete three-component enterprise workforce platform in **3 weeks**: a Fastify REST + Socket.IO backend API, a SvelteKit web dashboard, and an offline-first Flutter mobile app for field employees — across three structured delivery phases.  
* **Real-Time Architecture:** Designed a Socket.IO room-based event system with role-targeted rooms (manager, guard, dashboard). Live events cover shift updates, clock-in/out, incident alerts, and dashboard KPI refresh — all without page reloads.  
* **Offline-First Mobile:** Built a Flutter offline sync queue with idempotency, event deduplication by ID, and automatic flush on reconnect — enabling guards to complete full patrol tours with zero connectivity and sync all data on network restore.  
* **Field Operations & GPS Tracking:** Implemented GPS-tracked patrol tours with QR and NFC checkpoint validation, photo evidence capture (2–4 photos per checkpoint), tour cycle management, and a live monitoring map visible on the admin dashboard.  
* **RBAC & Security:** Three-tier role hierarchy (Admin → Manager → Guard) with JWT access/refresh token rotation, Redis-backed token invalidation, and role-scoped database query filters to prevent unauthorized data access across all API routes.  
* **Performance Engineering:** Eliminated client-side slicing and N+1 queries by migrating all list and feed APIs to server-side pagination and date-range filtering (`fromDate`, `toDate`, `limit`, `page`) — significantly reducing payload size and backend load at scale.  
* **AI-Assisted Scheduling & Reporting:** Integrated a Redis-cached AI scheduling worker with guard workload scoring and overlap detection; built attendance, schedule, and financial aggregation report endpoints consumed by a full reports module.  

**Social Feed App (Appifylab Selection Task)** \[2026\]

* **Tech:** Next.js 16, React 19, TypeScript, Express, MySQL, Socket.IO, JWT, Zod, Vitest  
* **Link** [https://github.com/mmar58/social_media_app](https://github.com/mmar58/social_media_app)
* Designed and built a complete full-stack social media application **in 3 days** as a technical assessment. Features JWT cookie-based auth, cursor-paginated feed, public/private post visibility, threaded comments and replies, polymorphic like system, real-time Socket.IO notifications, and multipart image uploads with MIME/size validation.  
* Engineered for scale: batched post hydration eliminating N+1 queries, explicit database indexes on hot read paths, centralized notification service with socket fan-out, and environment-aware deployment configuration.  
* Authored comprehensive architecture, scaling, notification, feature workflow, and testing documentation alongside full backend API tests (Vitest + Supertest) and frontend interaction tests (React Testing Library).

**Coin Flip** \[In development\]

* **Tech: Unity, NodeJS, ExpressJS, [Socket.IO](http://Socket.IO)**  
* Developed a robust, live coin betting game utilizing Unity for the front-end and a scalable NodeJS (ExpressJS \+ Socket.IO) microservice architecture for the backend. The system features integrated live betting, comprehensive user retention mechanisms, secure cryptocurrency deposit/withdrawal/transfer capabilities, and a global, real-time user chatting system.


**Code Flow Puzzle** \[In development\]

* **Tech:** Svelte  
* **Link:** [https://codeflowpuzzle.netlify.app/](https://codeflowpuzzle.netlify.app/)  
* An interactive educational platform designed to teach programming logic through visual puzzles. Features a "Playground Mode" for developers to map out code snippets and export the full JavaScript logic. The core engine was built in one hour using an AI-augmented Svelte workflow, demonstrating rapid architecture and deployment.

**Connect Line Puzzle** \[In development\]

* **Tech:** Svelte, NodeJS, ExpressJS  
* **Link:** [https://games.anzdevelopers.com/connect-line-puzzle](https://games.anzdevelopers.com/connect-line-puzzle)  
* A logic-based puzzle game developed in Svelte. Includes a custom level-builder that allows users to design, play, and share challenges, showcasing my ability to handle complex state management and user-generated content.

**AZ MySQL Client**

* **Tech:** Flutter, Dart  
* **Link: [https://drive.google.com/file/d/14QonPQl58JBmUy7nuDD8cltThyGfDXay/view?usp=sharing](https://drive.google.com/file/d/14QonPQl58JBmUy7nuDD8cltThyGfDXay/view?usp=sharing)**  
* A mobile database management tool built with Flutter. It enables developers to connect directly to their databases from an Android device to manage records via a clean UI or by executing raw MySQL commands.

---

# Technical Skills

| Category | Skills and Technologies |
| ----- | ----- |
| **Architectural & Backend** | System Design, API Design, Scalability Planning, Data Structuring, NodeJS, Fastify, ExpressJS, MySQL, PostgreSQL, Redis, Knex, Socket.IO, JWT, REST APIs, JSON. |
| **Full-Stack & Web** | TypeScript, JavaScript, Next.js, React, SvelteKit, Svelte, Phaser, Three.js, Full-Stack Development. |
| **Mobile & Game Dev** | Flutter (Dart), Ionic, Unity (C#, WebGL, Slate), BLE Integration, ONNX ML Inference, GPS Tracking, NFC/QR Scanning, Offline-First Architecture. |
| **Testing & Quality** | Vitest, Supertest, React Testing Library, Zod Validation, Edit/Play Mode Tests. |
| **Workflow & Tools** | Git, VS Code, Trello, Workflow Automation, Technical Documentation. |
| **Leadership** | Team Management, Task Tracking, Internal Communication, Mentoring, Cross-Functional Collaboration. |

---

# Core Competencies

## Real-Time Systems & Enterprise Architecture

* Proven ability to design and deliver multi-component real-time platforms — REST APIs, WebSocket/Socket.IO event systems, Redis pub-sub, and live-updating dashboards — at enterprise scale.
* Deep experience with offline-first mobile architecture: local queue persistence, idempotent sync, and automatic conflict-free reconnect flows.
* Skilled at RBAC design, JWT token lifecycle management, and role-scoped query filtering across complex user hierarchies.

## Technical Leadership & Architecture

* Ability to define and implement robust, scalable technical solutions for complex systems, including full system design from database schema to real-time event model.
* Strong foundation in both front-end (web/mobile) and back-end logic, ensuring seamless communication and data flow.
* Leverage AI-assisted engineering workflows to eliminate boilerplate and accelerate delivery — keeping focus on business logic, system design, performance, and security.

## Workflow & Process Improvement

* Expertise in analyzing existing development workflows and introducing new technologies, tools, and practices to optimize efficiency, productivity, and code quality.
* Skilled in bridging communication gaps between technical teams (front-end, back-end, QA, mobile) to ensure synchronized, on-schedule delivery.

## Team Management & Communication

* Proven capacity to manage and motivate development teams, track progress, and facilitate effective internal communication to achieve collective goals.
* Dedicated to maintaining high standards of quality assurance and system maintenance for long-term project viability.

---

# Education

**Master of Science (M.Sc.) in Mathematics**

---

# Reference

| Reference 1 | Reference 2 |
| ----- | ----- |
| **Name:** Saksham Chhabra | **Name:** Abu Fahim Shanto |
| **Title:** National Head Jio | **Title:** Full-stack Developer |
| **Company:** Jio, India | **Company:** Magic Mind |
| **Email:** Ggnsaksham@gmail.com | **Email:** abufahimkhan1@gmail.com |
| **Phone:** \+91 7701 862 733 | **Phone:** \+880 1704-606893 |
| **Relation:** Employer (Coin Flip) | **Relation:** Coworker (Magic Mind) |

# 