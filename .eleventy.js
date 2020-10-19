/* eslint-disable */

module.exports = function (eleventyConfig) {
	// Returns a collection of blog posts in reverse date order
	eleventyConfig.addCollection('blog', collection => {
		const isLive = post => !post.data.draft;
		return collection
			.getFilteredByGlob('**/*.njk')
			.filter(isLive)
			.filter(item => !item.inputPath.includes('index.njk'))
			.reverse();
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
