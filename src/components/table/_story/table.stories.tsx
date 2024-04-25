import type { Meta, StoryObj } from '@storybook/vue3';
import { within, userEvent, expect } from '@storybook/test';
import { fn } from '@storybook/test';
import Table from '../index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Table',
	component: Table,
	// This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: {
		size: { control: 'select', options: ['small', 'medium', 'large'] },
	},
	args: {
		data: [],
		showHeader: true
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

const data = [{ name: 'gxy', age: 12 }, { name: 'zh', age: 22, time: '2019' }, { name: 'zh', age: 22, time: '2019' }, { name: 'xx', age: 22, time: '2019' }, { name: 'zh', age: 22, time: '2019' }, { name: 'zh', age: 22, time: '2019' }];

export const Normal: Story = {
	render: (args) => ({
		components: { Table },
		setup() {
			return { args };
		},
		template: '<Table v-bind="args" />',
	}),
	args: {
		data,
		size: 'small',
		showHeader: true
	},
	play: async ({ canvasElement }: any) => {
		// 测试是否渲染
		const canvas = within(canvasElement);
		const table = canvas.getByRole('cf-table');
		await expect(table).toBeInTheDocument();

		//  测试渲染列是否正确
		const col = document.querySelectorAll('.el-table__body col');
		await expect(col.length).toEqual(2);
	},
};
