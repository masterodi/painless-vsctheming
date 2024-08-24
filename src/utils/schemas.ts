import Color from "./Color";
import { TextmateColors, WorkbenchColors } from "./types";

export type WorkbenchColorsScheme = {
  background: Color;
  foreground: Color;
  accent: Color;
  border: string;
  terminal?: {
    ansiBlack: string;
    ansiBrightBlack: string;
    ansiBlue: string;
    ansiBrightBlue: string;
    ansiCyan: string;
    ansiBrightCyan: string;
    ansiGreen: string;
    ansiBrightGreen: string;
    ansiMagenta: string;
    ansiBrightMagenta: string;
    ansiRed: string;
    ansiBrightRed: string;
    ansiWhite: string;
    ansiBrightWhite: string;
    ansiYellow: string;
    ansiBrightYellow: string;
  };
  gitDecoration?: {
    addedResourceForeground: string;
    conflictingResourceForeground: string;
    deletedResourceForeground: string;
    ignoredResourceForeground: string;
    modifiedResourceForeground: string;
    renamedResourceForeground: string;
    stageDeletedResourceForeground: string;
    stageModifiedResourceForeground: string;
    submoduleResourceForeground: string;
    untrackedResourceForeground: string;
  };
};

export type TokenColorsScheme = {
  COMMENT: string;
  VARIABLE: string;
  VARIABLE_PROPERTY: string;
  VARIABLE_CONSTANT?: string;
  FUNCTION: string;
  FUNCTION_PARAMETER?: string;
  KEYWORD: string;
  STORAGE?: string;
  PRIMITIVE?: string;
  CLASS: string;
  TAG: string;
  PUNCTUATION_TAG?: string;
  ATTRIBUTE: string;
  ID?: string;
  STRING: string;
  REGEXP?: string;
  CONSTANT: string;
  NUMBER?: string;
  TRUTHY?: string;
  FALSY?: string;
  PUNCTUATION: string;
  PROPERTY_NAME: string;
  VARIABLE_READWRITE_ALIAS?: string;
};

export type VSCTheme = {
  name: string;
  colors: WorkbenchColors;
  tokenColors: TextmateColors;
  semanticHighlighting: boolean;
};

const createTerminalColors = (colors: WorkbenchColorsScheme["terminal"]) => {
  return colors
    ? {
        "terminal.ansiBlack": colors.ansiBlack,
        "terminal.ansiBrightBlack": colors.ansiBrightBlack,
        "terminal.ansiBlue": colors.ansiBlue,
        "terminal.ansiBrightBlue": colors.ansiBrightBlue,
        "terminal.ansiCyan": colors.ansiCyan,
        "terminal.ansiBrightCyan": colors.ansiBrightCyan,
        "terminal.ansiGreen": colors.ansiGreen,
        "terminal.ansiBrightGreen": colors.ansiBrightGreen,
        "terminal.ansiMagenta": colors.ansiMagenta,
        "terminal.ansiBrightMagenta": colors.ansiBrightMagenta,
        "terminal.ansiRed": colors.ansiRed,
        "terminal.ansiBrightRed": colors.ansiBrightRed,
        "terminal.ansiWhite": colors.ansiWhite,
        "terminal.ansiBrightWhite": colors.ansiBrightWhite,
        "terminal.ansiYellow": colors.ansiYellow,
        "terminal.ansiBrightYellow": colors.ansiBrightYellow,
      }
    : {
        "terminal.ansiBlack": "#1b1e28",
        "terminal.ansiBlue": "#89ddff",
        "terminal.ansiBrightBlack": "#a6accd",
        "terminal.ansiBrightBlue": "#ADD7FF",
        "terminal.ansiBrightCyan": "#ADD7FF",
        "terminal.ansiBrightGreen": "#5DE4c7",
        "terminal.ansiBrightMagenta": "#f087bd",
        "terminal.ansiBrightRed": "#d0679d",
        "terminal.ansiBrightWhite": "#ffffff",
        "terminal.ansiBrightYellow": "#fffac2",
        "terminal.ansiCyan": "#89ddff",
        "terminal.ansiGreen": "#5DE4c7",
        "terminal.ansiMagenta": "#f087bd",
        "terminal.ansiRed": "#d0679d",
        "terminal.ansiWhite": "#ffffff",
        "terminal.ansiYellow": "#fffac2",
      };
};

const createGitDecorations = (
  gitDecoration: WorkbenchColorsScheme["gitDecoration"]
) => {
  return gitDecoration
    ? {
        "gitDecoration.addedResourceForeground":
          gitDecoration.addedResourceForeground,
        "gitDecoration.conflictingResourceForeground":
          gitDecoration.conflictingResourceForeground,
        "gitDecoration.deletedResourceForeground":
          gitDecoration.deletedResourceForeground,
        "gitDecoration.ignoredResourceForeground":
          gitDecoration.ignoredResourceForeground,
        "gitDecoration.modifiedResourceForeground":
          gitDecoration.modifiedResourceForeground,
        "gitDecoration.renamedResourceForeground":
          gitDecoration.renamedResourceForeground,
        "gitDecoration.stageDeletedResourceForeground":
          gitDecoration.stageDeletedResourceForeground,
        "gitDecoration.stageModifiedResourceForeground":
          gitDecoration.stageModifiedResourceForeground,
        "gitDecoration.submoduleResourceForeground":
          gitDecoration.submoduleResourceForeground,
        "gitDecoration.untrackedResourceForeground":
          gitDecoration.untrackedResourceForeground,
      }
    : {
        "gitDecoration.addedResourceForeground": "#5fb3a1",
        "gitDecoration.conflictingResourceForeground": "#d0679d",
        "gitDecoration.deletedResourceForeground": "#d0679d",
        "gitDecoration.ignoredResourceForeground": "#767c9d70",
        "gitDecoration.modifiedResourceForeground": "#ADD7FF",
        "gitDecoration.renamedResourceForeground": "#5DE4c7",
        "gitDecoration.stageDeletedResourceForeground": "#d0679d",
        "gitDecoration.stageModifiedResourceForeground": "#ADD7FF",
        "gitDecoration.submoduleResourceForeground": "#89ddff",
        "gitDecoration.untrackedResourceForeground": "#5DE4c7",
      };
};

export const createWorkbenchColors = (
  colors: WorkbenchColorsScheme,
  minimal: boolean = true
): VSCTheme["colors"] => ({
  foreground: colors.foreground[500],
  focusBorder: colors.foreground[600],
  "icon.foreground": colors.foreground[400],
  "badge.background": colors.background[400],
  "badge.foreground": colors.foreground[400],
  "input.background": colors.background[400],
  "input.foreground": colors.foreground[400],
  "inputOption.activeBackground": colors.background[600],
  "inputOption.activeForeground": colors.accent[400],
  "inputOption.activeBorder": colors.border,
  "button.background": colors.background[600],
  "button.foreground": colors.foreground[400],
  "button.hoverBackground": colors.background.alpha[600],
  "button.secondaryBackground": colors.background[600],
  "button.secondaryForeground": colors.foreground[400],
  "button.secondaryHoverBackground": colors.background.alpha[600],
  "dropdown.background": colors.background[600],
  "dropdown.border": colors.border,
  "dropdown.foreground": colors.foreground[500],

  "activityBar.activeBackground": "#00000000",
  "activityBar.activeBorder": colors.foreground[400],
  "activityBar.activeFocusBorder": colors.accent[500],
  "activityBar.background": colors.background[minimal ? 500 : 600],
  "activityBar.border": colors.border,
  "activityBar.foreground": colors.foreground[500],
  "activityBar.inactiveForeground": colors.foreground[600],
  "activityBarBadge.background": colors.background[400],
  "activityBarBadge.foreground": colors.foreground[400],

  "sideBar.background": colors.background[minimal ? 500 : 600],
  "sideBar.border": colors.border,
  "sideBarSectionHeader.background": colors.background[minimal ? 500 : 600],
  "list.activeSelectionBackground": colors.background[400],
  "list.activeSelectionForeground": colors.foreground[400],
  "list.hoverBackground": colors.background[300],
  "list.inactiveSelectionBackground": colors.background[400],
  "list.inactiveSelectionForeground": colors.foreground[400],
  "list.highlightForeground": colors.accent[500],

  "statusBar.background": colors.background[minimal ? 500 : 600],
  "statusBar.foreground": colors.foreground[500],
  "statusBar.border": colors.border,
  "statusBar.noFolderBackground": colors.background[500],
  "statusBar.debuggingBackground": colors.background[400],

  "editor.background": colors.background[500],
  "editor.foreground": colors.foreground[400],
  "editor.lineHighlightBackground": colors.background.alpha[300],
  "editorLineNumber.foreground": colors.foreground[700],
  "editorLineNumber.activeForeground": colors.foreground[500],
  "editorLineNumber.dimmedForeground": colors.foreground[700],
  "editor.selectionBackground": colors.background.alpha[700],
  "editor.selectionHighlightBackground": colors.background.alpha[500],
  "editor.wordHighlightBackground": colors.background.alpha[500],
  "editor.wordHighlightBorder": colors.foreground.alpha[400],
  "editor.findMatchHighlightBackground": colors.background.alpha[400],

  "editorWidget.background": colors.background[minimal ? 500 : 600],
  "editorWidget.foreground": colors.foreground[500],
  "editorSuggestWidget.highlightForeground": colors.accent[500],
  "editorSuggestWidget.focusHighlightForeground": colors.accent[500],
  "editorSuggestWidget.selectedBackground": colors.background[700],

  "peekViewEditor.background": colors.background[minimal ? 500 : 600],
  "peekView.border": colors.background[700],
  "peekViewEditorGutter.background": colors.background[minimal ? 500 : 600],
  "peekViewResult.background": colors.background[minimal ? 500 : 600],
  "peekViewTitle.background": colors.background[600],
  "peekViewTitleLabel.foreground": colors.foreground[400],
  "peekViewResult.lineForeground": colors.foreground[600],
  "peekViewTitleDescription.foreground": colors.foreground[600],
  "peekViewEditor.matchHighlightBackground": colors.background.alpha[400],

  "debugToolBar.background": colors.background[minimal ? 500 : 600],

  "titleBar.activeBackground": colors.background[minimal ? 500 : 600],
  "titleBar.inactiveBackground": colors.background[minimal ? 500 : 600],
  "titleBar.activeForeground": colors.foreground[500],
  "titleBar.border": colors.border,

  "menu.background": colors.background[minimal ? 500 : 600],
  "menu.foreground": colors.foreground[500],
  "menu.separatorBackground": colors.border,
  "menu.selectionForeground": colors.foreground[400],
  "menu.selectionBackground": colors.background[400],
  "menubar.selectionBackground": colors.background[400],
  "menubar.selectionForeground": colors.foreground[400],

  "editorGroupHeader.tabsBackground": colors.background[500],

  "tab.activeBackground": colors.background[400],
  "tab.activeForeground": colors.accent[500],
  "tab.inactiveBackground": colors.background[500],
  "tab.inactiveForeground": colors.foreground[500],

  "breadcrumb.background": colors.background[500],
  "breadcrumb.foreground": colors.foreground[500],

  "panel.background": colors.background[minimal ? 500 : 600],
  "panelTitle.activeForeground": colors.foreground[500],
  "panel.border": colors.border,
  "terminal.foreground": colors.foreground[500],

  ...createTerminalColors(colors.terminal),
  ...createGitDecorations(colors.gitDecoration),
});

export const createTokenColors = (
  colors: TokenColorsScheme
): VSCTheme["tokenColors"] => [
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: colors.COMMENT,
    },
  },
  {
    scope: ["variable"],
    settings: { foreground: colors.VARIABLE },
  },
  {
    scope: ["variable.other.predefined", "variable.other.property"],
    settings: {
      foreground: colors.VARIABLE_PROPERTY,
    },
  },
  {
    scope: ["variable.other.constant.object", "string.unquoted"],
    settings: {
      foreground: colors.VARIABLE_CONSTANT ?? colors.CONSTANT,
    },
  },
  {
    scope: [
      "entity.name.function",
      "support.function",
      "punctuation.definition.template-expression",
      "meta.function-call",
    ],
    settings: { foreground: colors.FUNCTION },
  },
  {
    scope: ["variable.parameter"],
    settings: {
      foreground: colors.FUNCTION_PARAMETER ?? colors.VARIABLE,
      fontStyle: "italic",
    },
  },
  {
    scope: ["keyword", "storage.modifier"],
    settings: {
      foreground: colors.KEYWORD,
    },
  },
  {
    scope: ["storage", "keyword.operator"],
    settings: {
      foreground: colors.STORAGE ?? colors.KEYWORD,
    },
  },
  {
    scope: ["support.type.primitive"],
    settings: {
      foreground: colors.PRIMITIVE ?? colors.CLASS,
    },
  },
  {
    scope: [
      "support.class",
      "support.type",
      "support.variable",
      "entity.name.type",
      "entity.other.inherited-class",
      "entity.name.scope-resolution",
      "variable.language.this",
      "variable.language.super",
      "variable.parameter.function.language.special.self",
    ],
    settings: {
      foreground: colors.CLASS,
    },
  },
  {
    scope: ["entity.name.tag", "support.class.component"],
    settings: {
      foreground: colors.TAG,
    },
  },
  {
    scope: [
      "punctuation.definition.tag",
      "punctuation.definition.typeparameters",
    ],
    settings: {
      foreground: colors.PUNCTUATION_TAG ?? colors.PUNCTUATION,
    },
  },
  {
    scope: ["entity.other.attribute-name"],
    settings: {
      foreground: colors.ATTRIBUTE,
    },
  },
  {
    scope: ["entity.other.attribute-name.id"],
    settings: {
      foreground: colors.ID ?? colors.ATTRIBUTE,
    },
  },
  {
    scope: ["string", "entity.other.attribute-name.pseudo-class"],
    settings: {
      foreground: colors.STRING,
    },
  },
  {
    scope: ["string.regexp"],
    settings: {
      foreground: colors.REGEXP ?? colors.STRING,
    },
  },
  {
    scope: ["support.constant", "constant.language"],
    settings: {
      foreground: colors.CONSTANT,
    },
  },
  {
    scope: ["constant.numeric", "keyword.other.unit"],
    settings: {
      foreground: colors.NUMBER ?? colors.CONSTANT,
    },
  },
  {
    scope: ["keyword.operator.new", "keyword.control.new"],
    settings: {
      foreground: colors.TRUTHY ?? colors.CONSTANT,
    },
  },
  {
    scope: [
      "support.class.error",
      "keyword.control.trycatch",
      "keyword.operator.expression.delete",
      "keyword.operator.expression.void",
      "keyword.operator.void",
      "keyword.operator.delete",
      "constant.language.null",
      "constant.language.boolean.false",
      "constant.language.undefined",
    ],
    settings: {
      foreground: colors.FALSY ?? colors.CONSTANT,
    },
  },
  {
    scope: ["meta.brace", "punctuation"],
    settings: {
      foreground: colors.PUNCTUATION,
    },
  },
  {
    scope: ["support.type.property-name"],
    settings: {
      foreground: colors.PROPERTY_NAME,
    },
  },
  {
    scope: [
      "variable.other.readwrite.alias",
      "entity.name.namespace",
      "storage.modifier.import",
      "storage.modifier.package",
    ],
    settings: {
      foreground: colors.VARIABLE_READWRITE_ALIAS ?? colors.VARIABLE,
    },
  },
];
