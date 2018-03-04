const configure = require('@storybook/react');

function loadStories() {
	require('../../stories/index.tsx')
}

configure(loadStories, module);