import path from 'path';
import { readFileSync } from 'fs';

const root = process.cwd();

/**
 *
 * @param file name of the file, (with relative location wrt the `data` folder)
 * @returns JSON converted to object
 */
export async function parseJSON(file: string) {
  const source = path.join(root, 'data', file);
  const contents = readFileSync(source, 'utf8');
  return await JSON.parse(contents);
}
