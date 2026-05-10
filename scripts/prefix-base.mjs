import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = resolve(fileURLToPath(import.meta.url), '../../dist');
const base = process.env.BASE_PATH || '/subtil-lingerie';

const HREF_RE = /\b(href|src|content|srcset|poster|action)="(\/(?:[^"][^"]*)?)"/g;
const URL_RE  = /\burl\((['"]?)(\/[^'")]+)(\1)\)/g;

const skipPrefixes = [base + '/', base, '/cdn-cgi/', '//'];

function shouldSkip(url) {
  return skipPrefixes.some(p => url.startsWith(p));
}

function rewrite(content) {
  let out = content.replace(HREF_RE, (m, attr, url) => {
    if (shouldSkip(url)) return m;
    return `${attr}="${base}${url}"`;
  });
  out = out.replace(URL_RE, (m, q, url, q2) => {
    if (shouldSkip(url)) return m;
    return `url(${q}${base}${url}${q2})`;
  });
  return out;
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let touched = 0;
for await (const file of walk(distDir)) {
  if (!/\.(html?|css|xml|txt)$/i.test(file)) continue;
  const content = await readFile(file, 'utf8');
  const next = rewrite(content);
  if (next !== content) {
    await writeFile(file, next, 'utf8');
    touched++;
  }
}
console.log(`Prefixed base "${base}" in ${touched} files.`);
