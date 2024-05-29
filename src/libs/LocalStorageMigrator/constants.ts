export enum LocalStorageMigrationOperationType {
  DELETE_KEY = 'DELETE_KEY',
  RENAME_JSON_VALUE_PROPERTY_KEY = 'RENAME_JSON_VALUE_PROPERTY_KEY',
  RENAME_KEY = 'RENAME_KEY',
  UPDATE_JSON_VALUE_PROPERTY_VALUE = 'UPDATE_JSON_VALUE_PROPERTY_VALUE'
}

export const LAST_MIGRATION_VERSION_KEY = 'localStorageMigrator:lastMigrationVersion'
