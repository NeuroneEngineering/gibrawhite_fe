const BASE_URL = "/";

export const SITEMAP = {
  HOME: `${BASE_URL}`,
  ADMIN_PANEL: `${BASE_URL}/secure/admin_control`,
  CONTACT_US: `${BASE_URL}/contact`,
};

export const COLORS = {
  primary: "#9747FF", // light purple color
  secondary: "#07A0C3", // light blue color
  tertiary: "#F6BF54", // yellow color

  contrast: {
    dark: "#05204A",
    white: "#F9F5FF",
  },

  absolutes: {
    white: "#FFFFFF",
    black: "#000000",
  },
};

export const DEFAULTS = {
  border: "solid 1px" + COLORS.secondary,
};
