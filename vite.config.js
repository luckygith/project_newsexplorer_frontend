import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base:
		process.env.NODE_ENV === "production"
			? "/project_newsexplorer_frontend/"
			: "/",
	plugins: [react()],
	server: {
		port: 3000,
	},
});
