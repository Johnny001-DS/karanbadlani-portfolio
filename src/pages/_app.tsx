import { ThemeProvider } from '../theme/theme-provider';
import Maintenance from '@/components/layout/Maintenance';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

// Toggle this to enable/disable maintenance mode
const MAINTENANCE_MODE = true;

function MyApp({ Component, pageProps }: AppProps) {
  if (MAINTENANCE_MODE) {
    return (
      <ThemeProvider>
        <Maintenance />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
