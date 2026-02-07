import { fetchDirectusProjects } from "~/server/utils/projects";

export default defineEventHandler(async () => {
	const config = useRuntimeConfig();
	return fetchDirectusProjects({
		directusUrl: config.directusUrl,
		directusToken: config.directusToken,
	});
});
