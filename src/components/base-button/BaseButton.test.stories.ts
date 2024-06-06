import { StoryObj } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

import BaseButton, { BaseButtonProps } from "./BaseButton.vue";
import { expect, waitFor, within } from "@storybook/test";
import { Events } from "vue";

export default {
  title: "BaseButton/Tests",
  component: BaseButton,
  argTypes: {
    size: {
      control: { type: "inline-radio" },
      options: ["m", "l"],
    },
  },
  args: {
    onClick: action("click"),
  },
};

const render: StoryObj<typeof BaseButton>["render"] = (args) => ({
  components: {
    BaseButton,
  },
  setup() {
    return {
      args,
    };
  },
  template: /* HTML */ ` <BaseButton v-bind="args" /> `,
});

export const ShouldEmitClick: StoryObj<BaseButtonProps & Events> = {
  render,
  args: {
    label: "Click Me",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.getByLabelText("Click Me").click();
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};

export const ShouldNotEmitClickWhenDisabled: StoryObj<
  BaseButtonProps & HTMLButtonElement & Events
> = {
  render,
  args: {
    label: "Click Me",
    disabled: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.getByLabelText("Click Me").click();
    await waitFor(() => expect(args.onClick).not.toHaveBeenCalled());
  },
};
