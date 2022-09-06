// Font sizes
const baseStyle = {
  fontWeight: "normal",
}

const primaryColor = {
  color: "primary"
}

const body1BaseStyle = {
  ...baseStyle,
  fontSize: "1.2rem",
};

const body2BaseStyle = {
  ...baseStyle,
  fontSize: "1rem",
}

const body3BaseStyle = {
  ...baseStyle,
  fontSize: "0.875rem"
}

const body4BaseStyle = {
  ...baseStyle,
  fontSize: "0.725rem",
}

const body5BaseStyle = {
  ...baseStyle,
  fontSize: "0.7rem"
}

// Font faces

const regularFace = {
  fontWeight: "normal"
}

const boldFace = {
  fontWeight: "bold",
  fontFace: "Helvetica Neue"
}

const mediumFace = {
  fontWeight: "medium"
}

// Font color styles

const mutedColor = {
  color: "muted"
}

// size-weight-color
const variants = {
  body1: { ...body1BaseStyle, ...regularFace },
  "body1-primary": {...body1BaseStyle, ...primaryColor},
  "body1-muted": { ...body1BaseStyle, ...mutedColor },
  "body1-bold": { ...body1BaseStyle, ...boldFace },
  "body1-bold-primary": { ...body1BaseStyle, ...primaryColor, ...boldFace },
  "body1-bold-muted": { ...body1BaseStyle, ...mutedColor, ...boldFace },
  "body1-medium": { ...body1BaseStyle, ...mediumFace },
  "body1-medium-primary": { ...body1BaseStyle, ...primaryColor, ...mediumFace },
  "body1-medium-muted": { ...body1BaseStyle, ...mutedColor, ...mediumFace },

  body2: { ...body2BaseStyle, ...regularFace },
  "body2-primary": {...body2BaseStyle, ...primaryColor},
  "body2-muted": { ...body2BaseStyle, ...mutedColor },
  "body2-bold": { ...body2BaseStyle, ...boldFace },
  "body2-bold-primary": { ...body2BaseStyle, ...primaryColor, ...boldFace },
  "body2-bold-muted": { ...body2BaseStyle, ...mutedColor, ...boldFace },
  "body2-medium": { ...body2BaseStyle, ...mediumFace },
  "body2-medium-primary": { ...body2BaseStyle, ...primaryColor, ...mediumFace },
  "body2-medium-muted": { ...body2BaseStyle, ...mutedColor, ...mediumFace },

  body3: { ...body3BaseStyle, ...regularFace },
  "body3-primary": {...body3BaseStyle, ...primaryColor},
  "body3-muted": { ...body3BaseStyle, ...mutedColor },
  "body3-bold": { ...body3BaseStyle, ...boldFace },
  "body3-bold-primary": { ...body3BaseStyle, ...primaryColor, ...boldFace },
  "body3-bold-muted": { ...body3BaseStyle, ...mutedColor, ...boldFace },
  "body3-medium": { ...body3BaseStyle, ...mediumFace },
  "body3-medium-primary": { ...body3BaseStyle, ...primaryColor, ...mediumFace },
  "body3-medium-muted": { ...body3BaseStyle, ...mutedColor, ...mediumFace },

  body4: { ...body4BaseStyle, ...regularFace },
  "body4-primary": { ...body4BaseStyle, ...primaryColor },
  "body4-muted": { ...body4BaseStyle, ...mutedColor },
  "body4-bold": { ...body4BaseStyle, ...boldFace },
  "body4-bold-primary": { ...body4BaseStyle, ...primaryColor, ...boldFace },
  "body4-bold-muted": { ...body4BaseStyle, ...mutedColor, ...boldFace },
  "body4-medium": { ...body4BaseStyle, ...mediumFace },
  "body4-medium-primary": { ...body4BaseStyle, ...primaryColor, ...mediumFace },
  "body4-medium-muted": { ...body4BaseStyle, ...mutedColor, ...mediumFace },

  body5: { ...body5BaseStyle, ...regularFace },
  "body5-primary": { ...body5BaseStyle, ...primaryColor },
  "body5-muted": { ...body5BaseStyle, ...mutedColor },
  "body5-bold": { ...body5BaseStyle, ...boldFace },
  "body5-bold-primary": { ...body5BaseStyle, ...primaryColor, ...boldFace },
  "body5-bold-muted": { ...body5BaseStyle, ...mutedColor, ...boldFace },
  "body5-medium": { ...body5BaseStyle, ...mediumFace },
  "body5-medium-primary": { ...body5BaseStyle, ...primaryColor, ...mediumFace },
  "body5-medium-muted": { ...body5BaseStyle, ...mutedColor, ...mediumFace },

  // Post TOCs

  "tocH1:before": { content: "counter(h1counter)" },
  tocH1: { ...body2BaseStyle, ...boldFace  },
  "tocH2:before": { content: "counter(h2counter)" },
  tocH2: { ...body3BaseStyle },
};

const text = {
  baseStyle,
  variants,
};
export default text;
