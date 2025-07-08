import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	base:
		process.env.NODE_ENV === "production"
			? "/project_newsexplorer_frontend/"
			: "/",
	plugins: [react()],
	server: {
		port: 3000, // Change the port number to 3000
	},
});
