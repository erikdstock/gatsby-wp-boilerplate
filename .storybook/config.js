// Used guide here: https://github.com/gatsbyjs/gatsby/issues/633#issuecomment-333973083
import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

setOptions({
    name: 'NYC-DSA',
    downPanelInRight: true
});

// Stories loader
const req = require.context("../src", true, /\.stories\.[jt]sx?$/);
function loadStories() {
    req.keys().forEach(req);
}

// Initialize react-storybook
configure(loadStories, module);
