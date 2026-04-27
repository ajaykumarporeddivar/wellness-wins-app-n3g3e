module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'wellness-wins': '#007bff',
        'light-gray': '#f7f7f7',
        'dark-gray': '#333333',
      },
      borderRadius: {
        'md': '10px',
        'xl': '20px',
      },
      fontFamily: {
        sans: ['"Inter"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica"',
          '"Arial"',
          '"sans-serif"',
        ],
      },
    },
  },
};