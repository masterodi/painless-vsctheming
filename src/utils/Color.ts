import chroma from "chroma-js";

type ColorProps =
	| {
			palette: {
				300: string;
				400: string;
				500: string;
				600: string;
				700: string;
				alpha: {
					300: string;
					400: string;
					500: string;
					600: string;
					700: string;
				};
			};
			base?: never;
	  }
	| {
			palette?: never;
			base: {
				hex: string;
				brightnessStep?: { brighten?: number; darken?: number };
			};
	  };

export default class Color {
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	alpha: {
		300: string;
		400: string;
		500: string;
		600: string;
		700: string;
	};

	constructor({ palette, base }: ColorProps) {
		if (palette) {
			Object.assign(this, palette);
		} else if (base) {
			const {
				hex,
				brightnessStep: { brighten, darken },
			} = base;
			this[300] = chroma(hex)
				.brighten(1.75 * (brighten ?? 1))
				.hex();
			this[400] = chroma(hex)
				.brighten(brighten ?? 1)
				.hex();
			this[500] = hex;
			this[600] = chroma(hex)
				.darken(darken ?? 1)
				.hex();
			this[700] = chroma(hex)
				.darken(1.75 * (darken ?? 1))
				.hex();
			this.alpha = {
				300: chroma(hex).brighten(0.75).alpha(0.15).hex(),
				400: chroma(hex).brighten(0.75).alpha(0.25).hex(),
				500: chroma(hex).brighten(0.75).alpha(0.5).hex(),
				600: chroma(hex).brighten(0.75).alpha(0.75).hex(),
				700: chroma(hex).brighten(0.75).alpha(0.85).hex(),
			};
		}
	}
}
