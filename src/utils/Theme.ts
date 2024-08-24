import Color from "./Color";
import {
  createTokenColors,
  createWorkbenchColors,
  TokenColorsScheme,
  VSCTheme,
  WorkbenchColorsScheme,
} from "./schemas";

type FromBaseProps = {
  background: string;
  foreground: string;
  accent: string;
  border: string;
  tokens: TokenColorsScheme;
};

export default class Theme {
  name: string;
  workbench: WorkbenchColorsScheme;
  tokens: TokenColorsScheme;

  constructor(
    name: string,
    workbench: WorkbenchColorsScheme,
    tokens: TokenColorsScheme
  ) {
    this.name = name;
    this.workbench = workbench;
    this.tokens = tokens;
  }

  getName() {
    return `${this.name.replace(" ", "-")}-color-theme.json`;
  }

  build(minimal = true): VSCTheme {
    return {
      name: this.name,
      colors: createWorkbenchColors(this.workbench, minimal),
      tokenColors: createTokenColors(this.tokens),
      semanticHighlighting: true,
    };
  }

  static fromBases(name: string, props: FromBaseProps) {
    const theme = new Theme(
      name,
      {
        background: new Color(props.background, { brighten: 0.2, darken: 0.1 }),
        foreground: new Color(props.foreground, { darken: 2 }),
        accent: new Color(props.accent),
        border: props.border,
      },
      props.tokens
    );

    console.log("Workbench colors:");
    console.table(theme.workbench);

    return theme;
  }
}
