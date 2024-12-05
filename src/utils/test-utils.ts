import { testDataSource } from "../config/ormconfig.test";

export const setupTestDB = async () => {
  if (!testDataSource.isInitialized) {
    await testDataSource.initialize();
  }
};

export const teardownTestDB = async () => {
  if (testDataSource.isInitialized) {
    await testDataSource.destroy();
  }
};
