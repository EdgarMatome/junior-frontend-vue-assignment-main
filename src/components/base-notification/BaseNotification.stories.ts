import { Meta, StoryFn } from '@storybook/vue3';
import BaseNotification from './BaseNotification.vue';

export default {
  title: 'BaseNotification',
  component: BaseNotification,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'error'],
      },
    },
  },
} as Meta<typeof BaseNotification>;

export interface Args {
  message: string;
  type: string;
}

const Template: StoryFn<typeof BaseNotification> = (args) => ({
  components: { BaseNotification },
  setup() {
    return { args };
  },
  template: '<BaseNotification v-bind="args" />',
});

export const Success = Template.bind({});
Success.args = {
  message: 'Account created successfully!',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: 'There was an error creating the account.',
  type: 'error',
};

export const LongMessage = Template.bind({});
LongMessage.args = {
  message: 'This is a longer notification message to test how the notification component handles more text content and ensures it is displayed properly without any issues.',
  type: 'success',
};
