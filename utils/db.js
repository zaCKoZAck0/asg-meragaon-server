import { Low } from 'lowdb'
import { join } from 'node:path'
import { JSONFile } from 'lowdb/node'

/**
 * Creates a new lowdb instance
 * @param {string} __dirname - location of .json file
 * @param {string} [filename] - name of .json file
 * @returns {Low} a lowdb instance
 */
export const createDB = function (__dirname, filename = "db") {
    const file = join(__dirname, `${filename}_test.json`)
    const adapter = new JSONFile(file)
    return new Low(adapter)
}

