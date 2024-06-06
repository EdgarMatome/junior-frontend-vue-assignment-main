import { Meta, StoryObj } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

import BaseButton, { BaseButtonProps } from "./BaseButton.vue";

export default {
  title: "BaseButton",
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

export const Default: StoryObj<typeof BaseButton> = {
  render,
  args: {
    label: "Click Me",
  },
};

export const Large: StoryObj<typeof BaseButton> = {
  render,
  args: {
    label: "Click Me",
    size: "l",
  },
};

export const Disabled: StoryObj<BaseButtonProps & HTMLButtonElement> = {
  render,
  args: {
    label: "Click Me",
    disabled: true,
  },
};

export const CustomStyle: StoryObj<typeof BaseButton> = {
  render,
  args: {
    label: "Click Me",
    style: {
      width: "240px",
    },
  },
};

export const WithSlotContent: Meta<typeof BaseButton> = {
  render: (args) => ({
    components: {
      BaseButton,
    },
    setup() {
      return {
        args,
      };
    },
    template: /* HTML */ `
      <BaseButton v-bind="args"> ✔️ <i>Slot content</i> </BaseButton>
    `,
  }),
};
