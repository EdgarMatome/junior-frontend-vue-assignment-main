export default {
  stories: ["../src/**/*.stories.ts"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-designs",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
  ],
  docs: {
    autodocs: true,
  },
  staticDirs: ["../src/assets"],
  framework: {
    name: "@storybook/vue3-vite",
  },
  viteFinal: {
    devSourcemap: true,
  },
  features: {
    interactionsDebugger: true,
  },
};
