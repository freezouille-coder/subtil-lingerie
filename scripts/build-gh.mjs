import { execSync } from 'node:child_process';

const env = {
  ...process.env,
  DEPLOY_TARGET: 'gh-pages',
  BASE_PATH: '/subtil-lingerie',
};

try {
  execSync('npx astro build', { stdio: 'inherit', env, shell: true });
  execSync('node scripts/prefix-base.mjs', { stdio: 'inherit', env, shell: true });
} catch (err) {
  process.exit(err.status ?? 1);
}
