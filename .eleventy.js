/* eslint-disable */

module.exports = function (eleventyConfig) {

	eleventyConfig.addCollection("exampleCollection", function (collectionApi) {
		// get unsorted items
		if (process.env.ELEVENTY_ENV !== 'production') {
			return collectionApi.getFilteredByGlob('**/*.njk');
		} else {
			return collectionApi.getFilteredByGlob('**/*.njk').filter((exampleCollection) => !exampleCollection.data.draft);
		}
	});

	// Layout aliases
	eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
	eleventyConfig.addLayoutAlias('single-post', 'layouts/single-post.njk');

	eleventyConfig.setBrowserSyncConfig({
		files: ['public/**/*'],
		open: true,
	});


	return {
		dir: {
			input: 'src/views',
			output: 'public',
		},
	};
};
