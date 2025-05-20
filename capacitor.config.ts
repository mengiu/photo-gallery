import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: '8ffd44db',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  } 
};

export default config;
