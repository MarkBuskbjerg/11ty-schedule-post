/* eslint-disable */

module.exports = function (eleventyConfig) {

	eleventyConfig.addCollection('post', (collection) => {
		if (process.env.ELEVENTY_ENV !== 'production')
			return [...collection.getFilteredByGlob('./src/posts/*.md')]
		else
			return [...collection.getFilteredByGlob('./src/posts/*.md')].filter((post) => !post.data.draft)
	})

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
