import type { Meta, StoryObj } from '@storybook/react';
import { MainLayout } from './MainLayout';

const meta: Meta<typeof MainLayout> = {
  title: 'UI/Layout/MainLayout',
  component: MainLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Main layout that includes Header, Footer, and a container for content. This component should wrap all pages in the application.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    containerFluid: {
      description: 'If true, the content will take up the full available width',
      control: 'boolean',
      defaultValue: false,
    },
    children: {
      description: 'Main content that will be rendered inside the layout',
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof MainLayout>;

// Main story with example content
export const Default: Story = {
  args: {
    children: (
      <div className="py-4">
        <h2 className="text-2xl font-bold mb-4">Example Content</h2>
        <p className="mb-4">This is example content to show how the MainLayout looks.</p>
        <div className="bg-gray-100 p-4 rounded">
          <p>Sample content block.</p>
        </div>
      </div>
    ),
  },
};

// Variant with fluid container
export const WithFluidContainer: Story = {
  args: {
    containerFluid: true,
    children: (
      <div className="py-4">
        <h2 className="text-2xl font-bold mb-4">Fluid Container</h2>
        <p className="mb-4">This content takes up the full available width.</p>
        <div className="bg-gray-100 p-4 rounded">
          <p>Useful for pages that need to maximize space.</p>
        </div>
      </div>
    ),
  },
};

// Story showing the layout with minimal content
export const MinimalContent: Story = {
  args: {
    children: (
      <div className="text-center py-12">
        <p>Minimal content</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how the layout behaves with minimal content, ensuring proper spacing and footer positioning.',
      },
    },
  },
};
