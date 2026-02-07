export default defineEventHandler((event) => {
	const config = useRuntimeConfig();
	const requestUrl = getRequestURL(event);
	const baseUrl =
		(config.public.siteUrl || "").replace(/\/+$/, "") || requestUrl.origin;

	const body = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

	setHeader(event, "Content-Type", "text/plain; charset=utf-8");
	return body;
});
