import { Metric } from './metric';
import { Palette } from './palette';
import { Typography } from './typography';

export interface Theme {
    metrics: Metric;
    palette: Palette;
    typography: Typography;
}
