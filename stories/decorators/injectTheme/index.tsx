import { RenderFunction } from '@storybook/react';
import * as React from 'react';
import { theme, ThemeProviderContext, WithTheme } from '../../../src';

const themeProvider: WithTheme = {
    theme: theme,
};

export const injectTheme = (story: RenderFunction) => {
    return (
        <ThemeProviderContext value={themeProvider}>
            {story()}
        </ThemeProviderContext>
    );
};
