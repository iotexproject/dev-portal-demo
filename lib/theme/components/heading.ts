// Font sizes
const baseStyle = {
  marginTop: "2rem",
  marginBottom: "1rem"
}

const primaryColor = {
  color: "primary"
}

const shadowEffect = {
  textShadow: "0px 0px 0.3rem #000000aa"
};

const h1BaseStyle = {
  ...baseStyle,
  fontSize:["2.5rem", "3.5rem", "4.5rem"]
};

const h2BaseStyle = {
  ...baseStyle,
  fontSize: ["1.6rem", "1.8rem", "2rem"],
}

const h3BaseStyle = {
  ...baseStyle,
  fontSize: ["1.4rem", "1.6rem", "1.8rem"]
}

const h4BaseStyle = {
  ...baseStyle,
  fontSize: "1.5rem",
}

const h5BaseStyle = {
  ...baseStyle,
  fontSize: "1rem"
}

// Font faces

const regularFace = {
  fontWeight: "normal"
}

const boldFace = {
  fontWeight: "bold"
}

const mediumFace = {
  fontWeight: "medium"
}

// Font color styles

const mutedColor = {
  color: "muted"
}

// --------------------------------------------------

const variants = {
  accent: {
    color: "accent",
  },
  primary: {
    color: "primary",
    fontSize: "2xl",
  },
 
  // Headings 
  h1: { ...h1BaseStyle, ...regularFace },
  "h1-muted": { ...h1BaseStyle, ...mutedColor },
  "h1-bold": { ...h1BaseStyle, ...boldFace },
  "h1-bold-shadow": { ...h1BaseStyle, ...boldFace, ...shadowEffect },
  "h1-bold-primary": { ...h1BaseStyle, ...boldFace, ...primaryColor },
  "h1-medium": { ...h1BaseStyle, ...mediumFace },
  "h1-bold-muted": { ...h1BaseStyle, ...boldFace, ...mutedColor },
  "h1-medium-muted": { ...h1BaseStyle, ...mediumFace, ...mutedColor },

  h2: { ...h2BaseStyle, ...regularFace },
  "h2-muted": { ...h2BaseStyle, ...regularFace, ...mutedColor },
  "h2-bold": { ...h2BaseStyle, ...boldFace },
  "h2-bold-shadow": { ...h2BaseStyle, ...boldFace, ...shadowEffect },
  "h2-bold-primary": { ...h2BaseStyle, ...boldFace, ...primaryColor },
  "h2-medium": { ...h2BaseStyle, ...mediumFace },
  "h2-bold-muted": { ...h2BaseStyle, ...boldFace, ...mutedColor },
  "h2-medium-muted": { ...h2BaseStyle, ...mediumFace, ...mutedColor },

  h3: { ...h3BaseStyle, ...regularFace },
  "h3-muted": { ...h3BaseStyle,...regularFace, ...mutedColor },
  "h3-bold": { ...h3BaseStyle, ...boldFace },
  "h3-bold-shadow": { ...h3BaseStyle, ...boldFace, ...shadowEffect },
  "h3-medium": { ...h3BaseStyle, ...mediumFace },
  "h3-bold-muted": { ...h3BaseStyle, ...boldFace, ...mutedColor },
  "h3-medium-muted": { ...h3BaseStyle, ...mediumFace, ...mutedColor },

  h4: { ...h4BaseStyle, ...regularFace },
  "h4-muted": { ...h4BaseStyle, ...regularFace, ...mutedColor },
  "h4-bold": { ...h4BaseStyle, ...boldFace },
  "h4-medium": { ...h4BaseStyle, ...mediumFace },
  "h4-bold-muted": { ...h4BaseStyle, ...boldFace, ...mutedColor },
  "h4-medium-muted": { ...h4BaseStyle, ...mediumFace, ...mutedColor },

  h5: { ...h5BaseStyle, ...regularFace },
  "h5-muted": { ...h5BaseStyle, ...regularFace, ...mutedColor },
  "h5-bold": { ...h5BaseStyle, ...boldFace },
  "h5-medium": { ...h5BaseStyle, ...mediumFace },
  "h5-bold-muted": { ...h5BaseStyle, ...boldFace, ...mutedColor },
  "h5-medium-muted": { ...h5BaseStyle, ...mediumFace, ...mutedColor },
  
  // Modals
  "modal-header": {...h5BaseStyle, ...boldFace},

};

const heading = {
  variants,
};

export default heading;
