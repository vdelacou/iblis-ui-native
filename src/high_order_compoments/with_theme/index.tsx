import * as React from 'react';
import { Subtract } from 'utility-types';
import { ThemeProviderConsumer, WithTheme } from '../../iblis_theme';

export const withTheme = <WrappedProps extends WithTheme>(WrappedComponent: React.ComponentType<WrappedProps>) => {
    // These props will be added to original component type
    type HocProps = Subtract<WrappedProps, WithTheme>;

    return class WithThemeComponent extends React.Component<HocProps> {
        // Enhance component name for debugging and React-Dev-Tools
        static displayName = `withTheme(${WrappedComponent.name})`;
        // reference to original wrapped component
        static readonly WrappedComponent = WrappedComponent;

        render() {
            return (
                <ThemeProviderConsumer>
                    {(value) => <WrappedComponent {...this.props} theme={value!.theme} />}
                </ThemeProviderConsumer>
            );
        }
    };
};
