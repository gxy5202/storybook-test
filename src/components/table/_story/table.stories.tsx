import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import { Table } from '../table';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Table',
  component: Table,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: {
    data: [],
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Empty: Story = {
  args: {
    data: []
  },
};

export const Normal: Story = {
  args: {
    data: ['s','b']
  },
};
