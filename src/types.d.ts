export interface Color {
  main: string;
  contrastText?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary?: Color;
      secondary?: Color;
      error?: Color;
      warning?: Color;
    }
  }
}
