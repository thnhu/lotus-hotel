import { createTheme } from '@mui/material/styles';

// Chuyển đổi giá trị HSL thành chuỗi CSS (với sẵn các giá trị trong globals.css)
const theme = createTheme({
  palette: {
    primary: {
      // Áp dụng giá trị màu nền chính và màu nổi bật nhẹ
      main: 'hsl(40, 50%, 95%)',       // --primary-cream-white
      light: 'hsl(36, 75%, 60%)',      // --primary-light-gold
    },
    secondary: {
      // Áp dụng màu accent cho các nút, icon, CTA
      main: 'hsl(39, 65%, 50%)',       // --accent-golden-yellow
      dark: 'hsl(43, 90%, 40%)',       // --accent-deep-gold
    },
    success: {
      main: 'hsl(87, 50%, 50%)',       // --accent-success-green
    },
    error: {
      main: 'hsl(355, 60%, 50%)',      // --accent-error-red
    },
    text: {
      primary: 'hsl(43, 70%, 40%)',    // --text-dark-gold
      secondary: 'hsl(0, 0%, 40%)',     // --text-body
    },
  },
  typography: {
    // Sử dụng cùng font như được khai báo trong globals.css
    fontFamily: ['"Roboto"', '"Be-Vietnam-Pro"', 'sans-serif'].join(','),
    body1: {
      fontSize: '1rem',               // --text-base (16px)
    },
    h1: {
      fontSize: '2rem',               // --text-3xl (32px)
      fontWeight: 'bold',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '1.5rem',             // --text-2xl (24px)
      fontWeight: 'bold',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.25rem',            // --text-xl (20px)
      fontWeight: 'bold',
      lineHeight: 1.2,
    },
  },
  spacing: 8, // Mặc định 1 đơn vị = 8px, có thể điều chỉnh nếu cần
  breakpoints: {
    values: {
      xs: 480,   // --screen-xs
      sm: 768,   // --screen-sm
      md: 1024,  // --screen-md
      lg: 1280,  // --screen-lg
      xl: 1440,  // --screen-xl
    },
  },
});

export default theme;
