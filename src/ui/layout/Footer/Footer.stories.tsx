// src/ui/layout/Footer/Footer.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'UI/Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Simple footer with copyright information and policy links. The appearance can be customized using additional CSS classes.',
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
type Story = StoryObj<typeof Footer>;

// Main story
export const Default: Story = {
  args: {},
};

// Variant with custom styling
export const CustomStyling: Story = {
  args: {
    className: 'bg-emerald-800',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Footer with a darker background color, showing how to customize the component using the className prop.',
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
        story: 'Footer as displayed on mobile devices.',
      },
    },
  },
};
