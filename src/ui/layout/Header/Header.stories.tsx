// src/ui/layout/Header/Header.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'UI/Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Simple header component that displays the application title. It can be customized with additional CSS classes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Additional CSS classes to customize the style',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// Main story - shows the default state
export const Default: Story = {
  args: {},
};

// Variant with custom styling
export const CustomStyling: Story = {
  args: {
    className: 'bg-indigo-600',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with custom background color, demonstrating the use of the className prop.',
      },
    },
  },
};

// Mobile variant
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Header as displayed on mobile devices.',
      },
    },
  },
};
