import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Root Directory of the project for accessing/creating DB file
 */
export const __dirname = dirname(fileURLToPath(import.meta.url));
/**
 * PORT to run the project
 */
export const PORT = 4000;