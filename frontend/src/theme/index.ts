import { css } from '@emotion/react';

export const globalStyles = css`
  html, body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #FF6B00;
    --secondary-color: #FDB931;
    --text-color: #1A1A1A;
    --background-color: #F5F5F7;
    --border-color: #E5E5EA;
    --error-color: #FF3B30;
    --success-color: #34C759;
  }
`;

export const theme = {
  colors: {
    primary: 'var(--primary-color)',
    secondary: 'var(--secondary-color)',
    text: 'var(--text-color)',
    background: 'var(--background-color)',
    border: 'var(--border-color)',
    error: 'var(--error-color)',
    success: 'var(--success-color)',
  },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.05)',
    lg: '0 10px 15px rgba(0,0,0,0.05)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};