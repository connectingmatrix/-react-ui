import type { Preview } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import React, { useEffect, useState } from 'react';
import { AccentProvider } from '../src/index';
import { StoryArgsUpdateContext, type StoryArgsUpdater } from '../stories/story-args';
import { reactUiStorybookTheme } from './theme';
import '../dist/styles.css';
import './preview.css';

function ResponsiveStoryFrame({ children }: { children: React.ReactNode }) {
  const [viewportVersion, setViewportVersion] = useState(0);

  useEffect(() => {
    let raf = 0;
    let dispatchingVisualResize = false;
    const bump = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setViewportVersion((current) => current + 1));
    };
    const notifyVisualViewportResize = () => {
      bump();
      if (dispatchingVisualResize) return;
      dispatchingVisualResize = true;
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event('resize'));
        dispatchingVisualResize = false;
      });
    };

    window.addEventListener('resize', bump);
    window.visualViewport?.addEventListener('resize', notifyVisualViewportResize);
    window.visualViewport?.addEventListener('scroll', notifyVisualViewportResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', bump);
      window.visualViewport?.removeEventListener('resize', notifyVisualViewportResize);
      window.visualViewport?.removeEventListener('scroll', notifyVisualViewportResize);
    };
  }, []);

  return React.createElement(
    'div',
    {
      key: viewportVersion,
      className: 'min-h-screen w-full min-w-0 bg-[var(--rui-bg-app)] text-[var(--rui-text-primary)]',
      'data-rui-story-viewport': viewportVersion,
    },
    children,
  );
}

const preview: Preview = {
  decorators: [
    (Story) => {
      const [, updateArgs] = useArgs();
      return React.createElement(
        StoryArgsUpdateContext.Provider,
        { value: updateArgs as StoryArgsUpdater },
        React.createElement(
          AccentProvider,
          {
            accentKey: 'default',
            className: 'min-h-screen bg-[var(--rui-bg-app)] text-[var(--rui-text-primary)]',
          },
          React.createElement(ResponsiveStoryFrame, null, React.createElement(Story)),
        ),
      );
    },
  ],
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      expanded: true,
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
        { name: 'TailAdmin light', value: '#f9fafb' },
        { name: 'Panel', value: '#2d305f' },
        { name: 'Dark', value: '#0f133c' },
      ],
    },
    viewport: {
      viewports: {
        responsive: {
          name: 'Responsive',
          styles: { width: '100%', height: '100%' },
        },
        mobile: {
          name: 'Mobile 390',
          styles: { width: '390px', height: '844px' },
        },
        tablet: {
          name: 'Tablet 768',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop 1440',
          styles: { width: '1440px', height: '900px' },
        },
      },
      defaultViewport: 'responsive',
    },
  },
};

export default preview;
