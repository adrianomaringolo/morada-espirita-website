// Exporta slides HTML do Instagram para PNG usando o Chrome headless (sem dependências npm).
//
//   node instagram-posts/scripts/export.mjs post-NN               → output/post-NN/*.png + caption.md
//   node instagram-posts/scripts/export.mjs post-NN --slides 1,3  → só esses slides
//   node instagram-posts/scripts/export.mjs --templates [id ...]  → templates/previews/<id>/*.png
//
// O tamanho de cada slide vem de <meta name="slide-size" content="1080x1350"> (padrão 1080x1350).
// Chrome em outro lugar? Defina CHROME_PATH (ou PUPPETEER_EXECUTABLE_PATH).
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHROME =
  process.env.CHROME_PATH ||
  process.env.PUPPETEER_EXECUTABLE_PATH ||
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function slideSize(html) {
  const m = fs.readFileSync(html, 'utf8').match(/name="slide-size"\s+content="(\d+)x(\d+)"/);
  return m ? [Number(m[1]), Number(m[2])] : [1080, 1350];
}

function shoot(html, png) {
  const [w, h] = slideSize(html);
  execFileSync(CHROME, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--allow-file-access-from-files',
    `--window-size=${w},${h}`,
    '--virtual-time-budget=6000', // tempo para as webfonts e as fotos carregarem
    `--screenshot=${png}`,
    pathToFileURL(html).href,
  ], { stdio: 'ignore' });
  console.log(`✓ ${path.relative(ROOT, png)} (${w}×${h})`);
}

function slidesIn(dir, only) {
  return fs.readdirSync(dir)
    .filter(f => /^slide-\d+\.html$/.test(f))
    .sort()
    .filter(f => !only || only.includes(Number(f.match(/\d+/)[0])));
}

function caption(meta) {
  const tags = (meta.hashtags || []).map(t => `#${t.replace(/^#/, '')}`).join(' ');
  const head = `# ${meta.title}\n\n> Post gerado em ${meta.date} · ${meta.type} · ${meta.format}\n\n---\n\n## Legenda\n\n${meta.caption}\n`;
  // A marca não usa hashtags (BRAND.md, "Legendas"): sem tags, sem as seções delas.
  return tags ? `${head}\n${tags}\n\n---\n\n## Hashtags\n\n${tags}\n` : head;
}

const args = process.argv.slice(2);

if (args[0] === '--templates') {
  const base = path.join(ROOT, 'templates', 'previews');
  const ids = args.length > 1 ? args.slice(1) : fs.readdirSync(base).filter(d => fs.statSync(path.join(base, d)).isDirectory());
  for (const id of ids) {
    const dir = path.join(base, id);
    for (const f of slidesIn(dir)) shoot(path.join(dir, f), path.join(dir, f.replace('.html', '.png')));
  }
} else {
  const post = args[0];
  if (!post) {
    console.error('Uso: node instagram-posts/scripts/export.mjs post-NN [--slides 1,3] | --templates [id ...]');
    process.exit(1);
  }
  const i = args.indexOf('--slides');
  const only = i > -1 ? args[i + 1].split(',').map(Number) : null;
  const src = path.join(ROOT, 'html', post);
  const out = path.join(ROOT, 'output', post);
  fs.mkdirSync(out, { recursive: true });
  for (const f of slidesIn(src, only)) shoot(path.join(src, f), path.join(out, f.replace('.html', '.png')));
  const metaFile = path.join(src, 'meta.json');
  if (fs.existsSync(metaFile)) {
    fs.writeFileSync(path.join(out, 'caption.md'), caption(JSON.parse(fs.readFileSync(metaFile, 'utf8'))));
    console.log(`✓ ${path.relative(ROOT, path.join(out, 'caption.md'))}`);
  }
}
