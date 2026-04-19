import { create } from '@storybook/theming';

export const reactUiStorybookTheme = create({
  base: 'dark',
  brandTitle: '@react/ui',
  brandTarget: '_self',
  colorPrimary: '#19c7dc',
  colorSecondary: '#0fd1df',
  appBg: '#5d6180',
  appContentBg: '#2d305f',
  appPreviewBg: '#5d6180',
  appBorderColor: 'rgba(255, 255, 255, 0.12)',
  appBorderRadius: 8,
  barBg: '#0f133c',
  barTextColor: '#b0b6d3',
  barSelectedColor: '#19c7dc',
  inputBg: '#e7e9ef',
  inputBorder: 'rgba(18, 22, 50, 0.28)',
  inputTextColor: '#1c1f31',
  textColor: '#f3f5fc',
  textInverseColor: '#1c1f31',
  textMutedColor: '#b0b6d3',
});
