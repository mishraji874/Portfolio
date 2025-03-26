export const theme = {
  colors: {
    primary: {
      DEFAULT: "#3B82F6",
      light: "#60A5FA",
      dark: "#2563EB",
    },
    secondary: {
      DEFAULT: "#8B5CF6",
      light: "#A78BFA",
      dark: "#7C3AED",
    },
    accent: {
      DEFAULT: "#EC4899",
      light: "#F472B6",
      dark: "#DB2777",
    },
    dark: {
      DEFAULT: "#111827",
      light: "#1F2937",
      dark: "#0F172A",
    },
    light: {
      DEFAULT: "#F9FAFB",
      light: "#FFFFFF",
      dark: "#F3F4F6",
    },
  },
  fonts: {
    sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
    mono: ["Fira Code", "monospace"],
  },
  spacing: {
    section: "py-16 sm:py-24",
    container: "container mx-auto px-4 sm:px-6 lg:px-8",
  },
  animations: {
    float: "float 3s ease-in-out infinite",
    pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    spin: "spin 3s linear infinite",
  },
  keyframes: {
    float: {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-10px)" },
    },
    pulse: {
      "0%, 100%": { opacity: 1 },
      "50%": { opacity: 0.5 },
    },
    spin: {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  },
  glass: {
    light: "bg-white/10 backdrop-blur-lg",
    dark: "bg-gray-900/50 backdrop-blur-lg",
  },
  gradients: {
    primary: "bg-gradient-to-r from-blue-500 to-purple-500",
    secondary: "bg-gradient-to-r from-purple-500 to-pink-500",
    dark: "bg-gradient-to-b from-gray-900 to-gray-800",
  },
  shadows: {
    glow: "0 0 20px rgba(59, 130, 246, 0.5)",
    "glow-lg": "0 0 30px rgba(59, 130, 246, 0.3)",
  },
  transitions: {
    default: "transition-all duration-300 ease-in-out",
    slow: "transition-all duration-500 ease-in-out",
  },
};
