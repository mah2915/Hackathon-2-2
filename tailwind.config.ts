import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          bg: {
            primary: '#FAFAFA',    // Very light gray - Main background
            secondary: '#FFFFFF',  // White - Card/surface background
            tertiary: '#F3F4F6',   // Gray-100 - Elevated surfaces
          },
          text: {
            primary: '#1F2937',    // Gray-800 - Primary text
            secondary: '#6B7280',  // Gray-600 - Secondary text
            muted: '#9CA3AF',      // Gray-500 - Muted/disabled text
          },
          accent: {
            primary: '#2563EB',    // Blue-700 - Primary actions
            hover: '#1D4ED8',      // Blue-800 - Hover states
          },
          success: '#10B981',      // Green-500 - Success states
          error: '#EF4444',        // Red-500 - Error states
          warning: '#F59E0B',      // Amber-500 - Warning states
          border: {
            default: '#E5E7EB',    // Gray-200 - Default borders
            subtle: '#D1D5DB',     // Gray-300 - Subtle borders
          },
        },
        // Dark theme colors
        dark: {
          bg: {
            primary: '#0F172A',    // Slate-900 - Main background
            secondary: '#020617',  // Very dark slate - Card/surface background
            tertiary: '#111827',   // Slate-800 - Elevated surfaces
          },
          text: {
            primary: '#F9FAFB',    // Gray-50 - Primary text
            secondary: '#9CA3AF',  // Gray-400 - Secondary text
            muted: '#6B7280',      // Gray-500 - Muted/disabled text
          },
          accent: {
            primary: '#3B82F6',    // Blue-500 - Primary actions
            hover: '#60A5FA',      // Blue-400 - Hover states
          },
          success: '#34D399',      // Green-400 - Success states
          error: '#EF4444',        // Red-500 - Error states
          warning: '#FBBF24',      // Amber-400 - Warning states
          border: {
            default: '#1F2937',    // Gray-800 - Default borders
            subtle: '#374151',     // Gray-700 - Subtle borders
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config