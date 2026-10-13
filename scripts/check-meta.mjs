// Fails the build if any built page has a missing or over-long meta description.
// Google truncates around 155-160 characters, so 160 is the hard ceiling.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const MAX = 160;

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return name.endsWith('.html') ? [path] : [];
  });
}

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

const problems = [];
for (const file of htmlFiles(DIST)) {
  const match = readFileSync(file, 'utf8').match(/<meta name="description" content="([^"]*)"/);
  if (!match) {
    problems.push(`${file}: no meta description`);
    continue;
  }
  const length = [...decode(match[1])].length;
  if (length > MAX) problems.push(`${file}: description is ${length} characters (max ${MAX})`);
}

if (problems.length) {
  console.error(`Meta description check failed:\n  ${problems.join('\n  ')}`);
  process.exit(1);
}
console.log('Meta description check passed.');
