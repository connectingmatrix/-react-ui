import type { Preview } from '@storybook/react';
import React from 'react';
import { AccentProvider } from '../src/index';
import { reactUiStorybookTheme } from './theme';
import '../dist/styles.css';
import './preview.css';

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(
        AccentProvider,
        {
          accentKey: 'default',
          className: 'min-h-screen bg-[var(--rui-bg-app)] text-[var(--rui-text-primary)]',
        },
        React.createElement(Story),
      ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: reactUiStorybookTheme,
      canvas: {
        sourceState: 'shown',
      },
      source: {
        excludeDecorators: true,
        language: 'tsx',
        type: 'code',
      },
    },
    layout: 'fullscreen',
    backgrounds: {
      default: 'React UI app',
      values: [
        { name: 'React UI app', value: '#5d6180' },
        { name: 'Panel', value: '#2d305f' },
        { name: 'Dark', value: '#0f133c' },
      ],
    },
  },
};

export default preview;
