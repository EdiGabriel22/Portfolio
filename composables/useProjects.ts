import type { ProjectCase } from "~/types/project";

export const useProjects = () =>
	useFetch<ProjectCase[]>("/api/projects", {
		key: "projects",
		default: () => [],
		throw: false,
	});
