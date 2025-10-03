// src/types/global.d.ts

// Define the structure of the consent payload for type safety
interface ClarityConsentPayload {
  ad_Storage: 'granted' | 'denied';
  analytics_Storage: 'granted' | 'denied';
}

declare global {
  interface Window {
    // Tell TypeScript that the window object may have a `clarity` function
    // This function accepts a command string and an optional payload
    clarity?: (command: 'consentv2', payload: ClarityConsentPayload) => void;
  }
}

// This line is necessary to make the file a module
export {};
