import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://lucija-perkovic.github.io',
    supportFile: false,
    viewportWidth: 1680,
    viewportHeight: 720,
  },
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
