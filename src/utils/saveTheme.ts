import { writeFileSync } from "fs";
import Theme from "./Theme";

export default function saveTheme(theme: Theme) {
  const themeJson = JSON.stringify(theme.build(true), undefined, 4);

  writeFileSync(`${process.cwd()}/themes/${theme.getName()}`, themeJson, {
    encoding: "utf8",
  });
}
