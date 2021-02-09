import { configure } from "@storybook/vue";

const loadStories = () => {
  const req = require.context("../src/stories", true, /\.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
