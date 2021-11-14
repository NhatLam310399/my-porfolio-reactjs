const screens = {
  phone: "600px",
  laptop: "1024px",
  desktop: "1440px",
};

const colors = {
  "primary": "#000000",
  "primary-2":"#050505",
  "secondary-1": "#D7D7D7",
  "secondary-2":"#909090",
  "secondary-3": "#8B8B8B",
  transparent: "rgba(0,0,0,0)",
};

const fontSize = {
  DEFAULT: "15px",
  xs: "12px",
  sm: "13px",
  md: "14px",
  lg: "16px",
  xl: "18px",
  xxl: "22px",
  "3xl": "24px",
  "4xl": "28px",
  "5xl": "36px",
  "6xl": "48px",
  "7xl": "74px",
};

const renderSpacings = () => {
  const spacing = {
    full: "100%",
    fit: "fit-content",
  };
  // 0px --> 100px | 0px 5px 10px 15px,...
  for (let i = 0; i < 10; i += 0.5) {
    spacing[i] = `${i * 10}px`;
  }
  // 100px --> 1000px | 100px 110px 120px,...
  for (let i = 10; i < 100; i++) {
    spacing[i] = `${i * 10}px`;
  }
  return spacing;
};

const spacing = renderSpacings();

const opacity = {
  0: "0",
  20: "0.2",
  40: "0.4",
  60: "0.6",
  80: "0.8",
  100: "1",
};

const fontWeight = {
  DEFAULT: 400,
  hairline: 100,
  "extra-light": 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  "extra-bold": 800,
  black: 900,
};
const boxShadow = {
  md: "-8px -8px 16px rgba(177, 177, 177, 0.12), 8px 8px 16px rgba(177, 177, 177, 0.12)",
  lg: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  "as-border":
    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
};

const borderRadius = {
  tn: "2px", // tiny
  sm: "4px", // small
  md: "5px", // medium
  lg: "8px",
  xl: "10px",
  xxl: "15px",
  "3xl": "25%",
};

const zIndex = {
  "-1": "-1",
  0: "0",
  10: "10",
  20: "20",
  30: "30",
  40: "40", // for drawer
  50: "50", // for Tooltip
  100: "100", // for Dialog, FullScreenDialog...
};

module.exports = {
  purge: ["./src/**/*.tsx", "!**/*.stories.tsx"],
  darkMode: false,
  theme: {
    screens,
    colors,
    fontSize,
    spacing,
    opacity,
    fontWeight,
    boxShadow,
    zIndex,
    maxWidth: {
      ...screens,
      ...spacing,
    },
    extend: {
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
        "1fr-auto": "1fr auto",
      },
      borderRadius,
    },
  },
  variants: {
    extend: {
      borderColor: ["group-focus"],
      visibility: ["group-focus"],
      display: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
