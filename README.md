# Painless VSCode Theme Generator (WIP)

Generate your own Visual Studio Code Theme with ease.

This package is being used when generating [Nightdream Theme](https://marketplace.visualstudio.com/items?itemName=mrheio.nightdream).

## How to use

I recommend to use the `Theme.fromBases` because it is the easiest method to generate a nice theme. You just have to give some base colors and it takes care of the rest.

1. Import `Theme` and pass the colors to `Theme.fromBases`

```js
import { Theme } from "painless-vsctheming";

// ...

const NightdreamMonoguai = Theme.fromBases("Nightdream Monoguai", {
  background: "#282a39",
  foreground: "#eaf2f1",
  accent: "#a99dec",
  border: "#00000000",
  tokens: {
    COMMENT: "#696D77",
    VARIABLE: "#eaf2f1",
    VARIABLE_PROPERTY: "#eaf2f1",
    VARIABLE_CONSTANT: "#a99dec",
    FUNCTION: "#bad761",
    FUNCTION_PARAMETER: "#ffaf7f",
    KEYWORD: "#FF657A",
    STORAGE: "#9CD1BB",
    CLASS: "#9cb4d1",
    TAG: "#FF657A",
    ATTRIBUTE: "#9CD1BB",
    ID: "#9cb4d1",
    STRING: "#FFD76D",
    CONSTANT: "#a99dec",
    PUNCTUATION: "#888D94",
    TRUTHY: "#FF657A",
    PROPERTY_NAME: "#EAF2F1",
  },
});
```

2. Call the `saveTheme` function and pass the `Theme` that you want to be generated as a `json`.

```js
import { saveTheme } from "painless-vsctheming";

// ...

saveTheme(NightdreamMonoguai);
```

3. Run debug or `npm run dev` or `npm run build` or any command that runs the file where the `saveTheme` is called so that the `.json` VSCode Theme file will be generated.

\*\* If you want to customize even further, you could create a `Theme` object with `new`:

```js
const theme = new Theme(...)
```

This would let you pass the `Color` objects explicitly meaning you can customize the `lightness` step for the shade (`brighten` and `darken`).

Also, in the second argument object, you can change the terminal and the git colors (if not, they will use some default values).

```js
import { Theme, saveTheme } from 'painless-vsctheming';

const background = new Color(mycolor, { brighten: 0.2, darken: 0.1 });

const theme = new Theme(
    'My Theme Name',
    { background, foreground: ..., ... },
    tokens
);

saveTheme(theme.build());
```

## How does it work?

Under the hood `chroma-js` takes care of generating shades for each base color (except `border` for now). `background`, `foreground`, `accent` will be used to create `Color` objects that have shades.

A `Color` object looks like this:

```js
const color = new Color(mycolor);

// color
// {
//   300: string;
//   400: string;
//   500: string;
//   600: string;
//   700: string;
//   alpha: {
//     300: string;
//     400: string;
//     500: string;
//     600: string;
//     700: string;
// }

// The keys follow the tailwind naming convention, meaning that the higher the number, the darker (for alpha, more opaque) the color.
```

These colors will then be used to generate the needed Visual Studio Code Theme properties.

## Side-notes

- This package is not finished yet.

  - I still want to implement a boolean flag so that you can choose between having the same color in all the workbench or have the editor and all the different blocks have different colors.
  - It does not have all the theming props used by a Visual Studio Code Theme. So if you see something weird going on with the colors (meaning the editor is showing something using the default editor theme colors), please open an `Issue` on Github with a screenshot and let me know.

- I did not try to generate light themes and I did not create this extension with this in mind. I do not know if it works ok or not, so please don't blame me if the light themes are ugly :)).

- This is not some type of `state of the art` package. It is my first published package and it can have flaws.

### Happy Theme Generation!
