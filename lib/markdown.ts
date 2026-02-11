const escapeHtml = (input: string): string =>
	input
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#39;");

const renderInlineMarkdown = (input: string): string => {
	let text = escapeHtml(input);

	// links
	text = text.replace(
		/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
		(_, label: string, url: string) =>
			`<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`,
	);

	// inline code
	text = text.replace(/`([^`]+)`/g, "<code>$1</code>");

	// bold
	text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

	// italic
	text = text.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");

	return text;
};

export const renderMarkdownToHtml = (markdown: string): string => {
	const lines = markdown.replace(/\r\n/g, "\n").split("\n");
	const html: string[] = [];

	let paragraphBuffer: string[] = [];
	let listType: "ul" | "ol" | null = null;
	let listItems: string[] = [];

	const flushParagraph = () => {
		if (!paragraphBuffer.length) return;
		const content = renderInlineMarkdown(paragraphBuffer.join(" ").trim());
		if (content) {
			html.push(`<p>${content}</p>`);
		}
		paragraphBuffer = [];
	};

	const flushList = () => {
		if (!listType || !listItems.length) return;
		html.push(`<${listType}>${listItems.join("")}</${listType}>`);
		listType = null;
		listItems = [];
	};

	for (const rawLine of lines) {
		const line = rawLine.trim();

		if (!line) {
			flushParagraph();
			flushList();
			continue;
		}

		const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
		if (headingMatch) {
			flushParagraph();
			flushList();
			const level = headingMatch[1].length;
			const content = renderInlineMarkdown(headingMatch[2].trim());
			html.push(`<h${level}>${content}</h${level}>`);
			continue;
		}

		const unorderedListMatch = line.match(/^[-*+]\s+(.*)$/);
		if (unorderedListMatch) {
			flushParagraph();
			if (listType !== "ul") {
				flushList();
				listType = "ul";
			}
			listItems.push(`<li>${renderInlineMarkdown(unorderedListMatch[1])}</li>`);
			continue;
		}

		const orderedListMatch = line.match(/^\d+[.)]\s+(.*)$/);
		if (orderedListMatch) {
			flushParagraph();
			if (listType !== "ol") {
				flushList();
				listType = "ol";
			}
			listItems.push(`<li>${renderInlineMarkdown(orderedListMatch[1])}</li>`);
			continue;
		}

		if (listType) {
			flushList();
		}

		paragraphBuffer.push(line);
	}

	flushParagraph();
	flushList();

	return html.join("\n");
};
