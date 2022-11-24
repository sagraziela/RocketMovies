import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './routes';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './hooks/auth';
import GlobalStyles from './styles/global';
import theme from './styles/theme';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <AuthProvider>
          <Router />
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
