import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Root Directory of the project
 */
export const __dirname = dirname(fileURLToPath(import.meta.url));
