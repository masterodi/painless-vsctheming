import Color from "./Color";
import {
	createTokenColors,
	createWorkbenchColors,
	TokensColorsScheme,
	VSCTheme,
	WorkbenchColorsScheme,
} from "./schemas";

export default class Theme {
	name: string;
	workbench: WorkbenchColorsScheme;
	tokens: TokensColorsScheme;

	constructor({
		name,
		workbench,
		tokens,
	}: {
		name: string;
		workbench: WorkbenchColorsScheme;
		tokens: TokensColorsScheme;
	}) {
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

	static fromBases(
		name: string,
		props: {
			background: string;
			foreground: string;
			accent: string;
			border: string;
			tokens: TokensColorsScheme;
		},
	) {
		const theme = new Theme({
			name,
			workbench: {
				background: new Color({
					base: {
						hex: props.background,
						brightnessStep: { brighten: 0.2, darken: 0.1 },
					},
				}),
				foreground: new Color({
					base: { hex: props.foreground, brightnessStep: { darken: 1.2 } },
				}),
				accent: new Color({ base: { hex: props.accent } }),
				border: props.border,
			},
			tokens: props.tokens,
		});

		console.log("Workbench colors:");
		console.table(theme.workbench);

		return theme;
	}
}
