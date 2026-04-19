import { addons } from '@storybook/manager-api';
import { reactUiStorybookTheme } from './theme';

addons.setConfig({
  theme: reactUiStorybookTheme,
});
