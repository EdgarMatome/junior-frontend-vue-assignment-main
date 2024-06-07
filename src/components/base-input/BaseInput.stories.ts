import BaseInput from "./BaseInput.vue";
import { StoryFn } from "@storybook/vue3";

export default {
  title: "BaseInput",
  component: BaseInput,
  argTypes: {
    type: {
      control: { type: "select", options: ["text", "email", "password"] },
    },
    placeholder: {
      control: "text",
    },
    required: {
      control: "boolean",
    },
    error: {
      control: "text",
    },
    modelValue: {
      control: "text",
    },
  },
};

export interface Args {
  type: string;
  placeholder: string;
  required: boolean;
  error: string;
  modelValue: string;
}

const Template: StoryFn<Args> = (args: Args) => ({
  components: { BaseInput },
  setup() {
    return { args };
  },
  template: '<BaseInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Enter text",
  required: false,
  error: "",
  modelValue: "",
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  type: "email",
  placeholder: "Enter your email",
  required: true,
  error: "",
  modelValue: "",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: "password",
  placeholder: "Enter your password",
  required: true,
  error: "",
  modelValue: "",
};

export const WithError = Template.bind({});
WithError.args = {
  type: "text",
  placeholder: "Enter text",
  required: true,
  error: "This field is required",
  modelValue: "",
};
