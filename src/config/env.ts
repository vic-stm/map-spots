interface EnvConfig {
  APP_NAME: string;
  API_BASE_URL: string;
  API_TIMEOUT: number;
  DEFAULT_LANGUAGE: string;
  IS_DEVELOPMENT: boolean;
  IS_PRODUCTION: boolean;
}

const env: EnvConfig = {
  APP_NAME: import.meta.env.VITE_APP_NAME ?? 'My App',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL ?? 'https://localhost:3000',
  API_TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT) || 30000,
  DEFAULT_LANGUAGE: import.meta.env.VITE_DEFAULT_LANGUAGE ?? 'en',
  IS_DEVELOPMENT: import.meta.env.MODE === 'development',
  IS_PRODUCTION: import.meta.env.MODE === 'production',
};