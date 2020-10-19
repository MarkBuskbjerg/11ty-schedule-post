module.exports = {
	layout: 'single-post',
	eleventyComputed: {
		permalink(data) {
			if (!data.draft) {
				return '/blog/{{ title | slug }}/index.html';
			}
			return false;
		}
	}
};