import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://agnost.dev",
	integrations: [
		starlight({
			title: "Agnost",
			favicon: "/favicon.ico",
			logo: {
				light: "./src/assets/agnost-light-bg-logo.svg",
				dark: "./src/assets/agnost-dark-bg-logo.svg",
				replacesTitle: true,
			},
			social: {
				github: "https://github.com/cloud-agnost/agnost-gitops",
				discord: "https://discord.gg/5NhssWVm",
			},
			editLink: {
				baseUrl:
					"https://github.com/cloud-agnost/agnost-gitops-docs/edit/main/",
			},
			// Set English as the default language for this site.
			defaultLocale: "root", // optional
			locales: {
				// English docs in `src/content/docs/en/`
				root: {
					label: "English",
					lang: "en", // lang is required for root locales
				},
			},
			sidebar: [
				{
					label: "Getting Started",
					slug: "getting-started",
				},
				{
					label: "Overview",
					items: [
						{ label: "What is Agnost?", slug: "overview/what-is-agnost" },
						{ label: "Platform Capabilities", slug: "overview/capabilities" },
						{ label: "Key Concepts", slug: "overview/key-concepts" },
					],
				},
				{
					label: "Installation & Setup",
					items: [
						{ label: "Installation", slug: "set-up/installation" },
						{ label: "Post-Installation", slug: "set-up/customization" },
					],
				},
				{
					label: "Guides",
					items: [
						{ label: "Containers", slug: "guides/containers" },
						{ label: "Source Configuration", slug: "guides/source" },
						{ label: "Pod Configuration", slug: "guides/pod" },
						{ label: "Networking", slug: "guides/networking" },
						{ label: "Autoscaling", slug: "guides/autoscaling" },
						{ label: "Probes", slug: "guides/probes" },
						{ label: "Storage", slug: "guides/storage" },
						{ label: "Builds", slug: "guides/builds" },
						{ label: "Environment Variables", slug: "guides/variables" },
						{ label: "Logs & Events", slug: "guides/logs-events" },
						{ label: "Team Management", slug: "guides/team" },
					],
				},
			],
		}),
	],
});
