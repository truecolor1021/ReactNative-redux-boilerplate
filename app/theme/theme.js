// Spacing:- Common margins and paddings
const spacing = {
  borderRadius: 8,
  layoutPaddingH: 16,
  containerPaddingV: 10,
  cardMarginB: 16,
};

// Type Sizes:- Font sizes and weights
const typeSizes = {
  FONT_SIZE_SMALL: 12,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_LARGE: 16,
  FONT_WEIGHT_LIGHT: 200,
  FONT_WEIGHT_MEDIUM: 600,
  FONT_WEIGHT_HEAVY: 800,
};

// Themes:- Can alter values here. Can only be consumed through Context (see useTheme.js file)
const themes = {
  light: {
    name: 'light',
    color: 'rgb(58, 58, 60)',
    layoutBg: '#f0f0f0',
    cardBg: '#ffffff',
    accent: '#0071ff',
  },
  dark: {
    name: 'dark',
    color: '#ffffff',
    layoutBg: '#121212',
    cardBg: '#1e1e1e',
    accent: '#0071ff',
  },
};

export {spacing, typeSizes, themes};