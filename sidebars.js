// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	docs: [
		"intro",
		{
			type: "category",
			label: "Chart-data-utils",
			link: {
				type: "generated-index",
			},
			collapsed: true,
			items: [
				"chart-data-utils/create-data",
			],
		},
		{
			type: "category",
			label: "Image-utils",
			link: {
				type: "generated-index",
			},
			collapsed: true,
			items: [
				"image-utils/create-media-response",
				"image-utils/parse-uploaded-file",
				"image-utils/change-background",
				"image-utils/remove-background"
			],
		},

	],
};

module.exports = sidebars;
