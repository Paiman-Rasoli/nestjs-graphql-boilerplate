export interface Configuration {
  NODE_ENV: string;
  port: number;
}

export const configuration = (): Configuration => ({
  NODE_ENV: process.env.NODE_ENV,
  port: +process.env.PORT || 3000,
});
