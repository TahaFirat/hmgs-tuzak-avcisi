import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hmgs.tuzakavcisi',
  appName: 'HMGS Tuzak Avcısı',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    iosScheme: 'https',
  },
  backgroundColor: '#090D16',
  ios: {
    contentInset: 'never',
    allowsLinkPreview: false,
    scrollEnabled: true,
    preferredContentMode: 'mobile',
    backgroundColor: '#090D16',
  },
};

export default config;
