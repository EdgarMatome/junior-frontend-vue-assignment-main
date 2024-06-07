import { Meta, StoryFn } from '@storybook/vue3';
import BaseNotification from './BaseNotification.vue';

export default {
  title: 'BaseNotification/Test',
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


const Template: StoryFn<typeof BaseNotification> = (args) => ({
  components: { BaseNotification },
  setup() {
    return { args };
  },
  template: '<BaseNotification v-bind="args" />',
});

export const VisibleSuccessNotification = Template.bind({});
VisibleSuccessNotification.args = {
  message: 'Test success notification visible!',
  type: 'success',
};

export const VisibleErrorNotification = Template.bind({});
VisibleErrorNotification.args = {
  message: 'Test error notification visible!',
  type: 'error',
};

export const HiddenNotification = Template.bind({});
HiddenNotification.args = {
  message: 'This notification should not be visible.',
  type: 'success',
};
