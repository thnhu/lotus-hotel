import React from 'react';
import ReactDOM from 'react-dom/client'; // Thay đổi import từ 'react-dom'
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline sẽ reset mặc định của Material UI */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
