import * as migration_20250821_165540 from './20250821_165540';

export const migrations = [
  {
    up: migration_20250821_165540.up,
    down: migration_20250821_165540.down,
    name: '20250821_165540'
  },
];
