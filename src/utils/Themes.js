/*
  3-color accent system:
    c1 (blue)   — primary actions, buttons, links
    c2 (violet) — decorative gradients, orbs, glows
    c3 (emerald)— success states, highlights, badges
*/

export const darkTheme = {
  // Base
  bg: "#000000",
  bgAlt: "#050505",
  surface: "rgba(255,255,255,0.02)",
  surfaceHover: "rgba(255,255,255,0.04)",

  // Text
  text: "#ededed",
  textSecondary: "rgba(255,255,255,0.5)",
  textTertiary: "rgba(255,255,255,0.3)",
  textFaint: "rgba(255,255,255,0.15)",

  // Borders
  border: "rgba(255,255,255,0.06)",
  borderHover: "rgba(255,255,255,0.12)",

  // 3 accent colors
  c1: "#3b82f6",       // blue
  c1Light: "rgba(59,130,246,0.12)",
  c1Faint: "rgba(59,130,246,0.06)",

  c2: "#8b5cf6",       // violet
  c2Light: "rgba(139,92,246,0.12)",
  c2Faint: "rgba(139,92,246,0.06)",

  c3: "#10b981",       // emerald
  c3Light: "rgba(16,185,129,0.12)",
  c3Faint: "rgba(16,185,129,0.06)",

  // Navbar
  navBg: "rgba(0,0,0,0.7)",

  // Button
  btnBg: "#fff",
  btnText: "#000",

  // Tags
  tagBg: "rgba(255,255,255,0.03)",
  tagBorder: "rgba(255,255,255,0.06)",
  tagText: "rgba(255,255,255,0.5)",

  // Grid overlay
  dotColor: "rgba(255,255,255,0.03)",

  // Shadows
  shadow: "rgba(0,0,0,0.4)",

  // Mode
  mode: "dark",
};

export const lightTheme = {
  // Base
  bg: "#fafafa",
  bgAlt: "#f2f2f2",
  surface: "rgba(0,0,0,0.02)",
  surfaceHover: "rgba(0,0,0,0.04)",

  // Text
  text: "#111111",
  textSecondary: "rgba(0,0,0,0.55)",
  textTertiary: "rgba(0,0,0,0.35)",
  textFaint: "rgba(0,0,0,0.12)",

  // Borders
  border: "rgba(0,0,0,0.08)",
  borderHover: "rgba(0,0,0,0.15)",

  // 3 accent colors
  c1: "#2563eb",       // blue
  c1Light: "rgba(37,99,235,0.1)",
  c1Faint: "rgba(37,99,235,0.05)",

  c2: "#7c3aed",       // violet
  c2Light: "rgba(124,58,237,0.1)",
  c2Faint: "rgba(124,58,237,0.05)",

  c3: "#059669",       // emerald
  c3Light: "rgba(5,150,105,0.1)",
  c3Faint: "rgba(5,150,105,0.05)",

  // Navbar
  navBg: "rgba(250,250,250,0.8)",

  // Button
  btnBg: "#111111",
  btnText: "#fafafa",

  // Tags
  tagBg: "rgba(0,0,0,0.03)",
  tagBorder: "rgba(0,0,0,0.06)",
  tagText: "rgba(0,0,0,0.5)",

  // Grid overlay
  dotColor: "rgba(0,0,0,0.04)",

  // Shadows
  shadow: "rgba(0,0,0,0.08)",

  // Mode
  mode: "light",
};
