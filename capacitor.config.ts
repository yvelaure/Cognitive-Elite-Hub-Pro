import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cognitiveelitepro.app',
  appName: 'Cognitive Elite Pro',
  webDir: 'client/dist/public',
  server: {
    url: 'https://3377a064-efbd-4dd2-9f53-7ac04c573ef1-00-1mqy4ec5ayhx3.picard.replit.dev',
    androidScheme: 'https'
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystorePassword: undefined,
      keystoreAlias: undefined,
      keystoreAliasPassword: undefined,
      releaseType: 'AAB'
    }
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#667eea",
      showSpinner: false
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: "#667eea"
    }
  }
};

export default config;
