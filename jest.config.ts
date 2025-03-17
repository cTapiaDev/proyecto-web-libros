import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.(test|spec).(ts|tsx)", "**/?(*.)+(test|spec).(ts|tsx)"],
};

export default config;