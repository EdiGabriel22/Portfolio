export const useSiteBaseUrl = () => {
	const runtimeConfig = useRuntimeConfig();
	const requestURL = useRequestURL();

	return computed(() => {
		const configured = (runtimeConfig.public.siteUrl || "").replace(/\/+$/, "");
		return configured || requestURL.origin;
	});
};
