const tokens = {
  colors: {
    "bg-light": "#F7F8FA",
    "bg-dark": "#110F1C",

    "bg-light-10": "#F7F8FA0A",
    "bg-dark-10": "#110F1C0A",

    "surface-light": "white",
    "surface-dark":
      "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%);",

    // BACKGROUND
    "bg-body": {
      default: "bg-light",
      _dark: "bg-dark",
    },
    "bg-canvas": {
      default: "white",
      _dark: "dark-gray",
    },
    "bg-canvas-transparent": {
      default: "bg-dark-10",
      _dark: "bg-light-10",
    },
    "bg-surface": {
      default: "surface-light",
      _dark: "surface-dark",
    },
    "bg-subtle": {
      default: "gray.50",
      _dark: "gray.700",
    },
    "bg-muted": {
      default: "gray.100",
      _dark: "gray.600",
    },
    default: {
      default: "gray.900",
      _dark: "white",
    },

    // BACKGROUND ACCENT
    "bg-accent": "brand.600",
    "bg-accent-subtle": "brand.500",
    "bg-accent-muted": "brand.400",
    "on-accent-muted": "brand.50",
    "on-accent-subtle": "brand.100",

    // BRAND GRADIENT
    "primary-linear":
      "linear-gradient(92.18deg, #44FFB2 19.21%, #AD44FF 105.06%)",
    "primary-linear-10": {
      default: "white",
      _dark:
        "linear-gradient(179.94deg, rgba(68, 255, 178, 0.1) 0.05%, rgba(173, 68, 255, 0.1) 74.68%);",
    },
    "brand-gradient-20": {
      default: "white",
      _dark: "linear-gradient(45.94deg, #0F202744 15%, #203A43 40%, #2C5364);",
    },
    "brand-grey-gradient":
      "linear-gradient(147.16deg, #FFFFFF 14.71%, rgba(255, 255, 255, 0) 114.16%),linear-gradient(0deg, #2D2F3F, #2D2F3F)",

    "brand-dark-gradient": {
      default: "white",
      _dark:
        "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%);",
    },
    "brand-dark-gradient-20":
      "linear-gradient(147.16deg, rgba(255, 255, 255, 0.2) 14.71%, rgba(255, 255, 255, 0) 114.16%);",

    "btn-gray-gradient":
      "linear-gradient(92.18deg, #808080 19.21%, #4D4D4D 105.06%);",

    ultraviolet: {
      default: "linear-gradient(100.79deg, #6872EF 7.97%, #FF00D6 144.39%);",
      _dark:
        "linear-gradient(92.18deg, #5A2AC9 19.21%, #B244C2 105.06%),linear-gradient(0deg, #2C2F45, #2C2F45);",
    },
    "ultraviolet-secondary": {
      default: "#7B29A240",
      _dark: "#7B29A240",
    },
    "ultraviolet-trans": {
      default: "white",
      _dark:
        "linear-gradient(109.68deg, rgba(255, 0, 225, 0.3) 0.53%, rgba(0, 13, 173, 0.03) 50%, rgba(0, 255, 255, 0.3) 99.46%);",
    },

    "bg-blueskids":
      "linear-gradient(92.18deg, #34D8FF 19.21%, #32D9FF 19.22%, #3A9AFF 105.06%);",
    "bg-greenpeace":
      "linear-gradient(76.66deg, #43ACBF 9.39%, #3790B7 57.37%, #205ABE 95.3%);",
    "bg-cuteromance":
      "linear-gradient(76.66deg, #F9D174 9.39%, #E9538B 95.3%);",

    "brand-grad-top-bottom": {
      default: "#FFFFFF80",
      _dark:
        "linear-gradient(180deg, rgba(68, 255, 178, 0.2) -22.18%, rgba(255, 255, 255, 0) 113.53%);",
    },
    "bg-blueskids-trans": {
      default: "white",
      _dark:
        "linear-gradient(138.27deg, rgba(68, 255, 109, 0.3) 5.07%, rgba(42, 55, 119, 0) 53.86%, rgba(128, 34, 130, 0.15) 89.47%);",
    },

    discord: "#7289DA",

    // TEXT
    muted: {
      default: "gray.700",
      _dark: "gray.200",
    },
    subtle: {
      default: "gray.500",
      _dark: "gray.400",
    },
    accent: {
      default: "brand.500",
      _dark: "brand.200",
    },
    primary: {
      default: "brand.600",
      _dark: "brand.400",
    },
    "on-accent": {
      default: "gray.800",
      _dark: "black",
    },
  },
};

export default tokens;
