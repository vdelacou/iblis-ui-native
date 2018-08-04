import * as React from 'react';
import { Theme } from '../../iblis_theme/theme';

export interface WithTheme {
    theme: Theme;
}

const ctxt = React.createContext<WithTheme | null>(null);

export const ThemeProviderContext = ctxt.Provider;

export const ThemeProviderConsumer = ctxt.Consumer;
