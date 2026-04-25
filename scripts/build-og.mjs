// Generate /public/og-default.png (1200x630) for social link previews.
// Run with: node scripts/build-og.mjs
import sharp from 'sharp';
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '..', 'public', 'og-default.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0F2444"/>
      <stop offset="1" stop-color="#081530"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.15" r="0.6">
      <stop offset="0" stop-color="#E8A838" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#E8A838" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E3A5F" stroke-width="1" stroke-opacity="0.35"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)" opacity="0.5"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Top bar with logo + brand -->
  <g transform="translate(80, 80)">
    <!-- Crane mark -->
    <g stroke="#FAFAF7" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M 60 30 L 80 4 L 102 22"/>
      <path d="M 60 30 C 50 29, 36 28, 18 26"/>
      <path d="M 18 26 L 4 24"/>
      <path d="M 100 28 L 130 50"/>
      <path d="M 103 28 L 134 47"/>
    </g>
    <path d="M 4 24 L 12 25 L 8 17 Z" fill="#E8A838"/>
    <circle cx="20.5" cy="25" r="1.6" fill="#FAFAF7"/>

    <!-- Wordmark -->
    <text x="170" y="32" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="800" font-size="36" fill="#FAFAF7" letter-spacing="-1">Cranes Consulting</text>
    <text x="170" y="62" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="600" font-size="14" fill="#F0C55A" letter-spacing="3" text-transform="uppercase">TAMPA, FL · OPERATIONS PARTNERS</text>
  </g>

  <!-- Amber accent line -->
  <line x1="80" y1="220" x2="160" y2="220" stroke="#E8A838" stroke-width="3"/>

  <!-- Headline -->
  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="800" letter-spacing="-3">
    <text x="80" y="320" font-size="86" fill="#FAFAF7">Operations that scale.</text>
    <text x="80" y="420" font-size="86" fill="#E8A838">Margin that holds.</text>
  </g>

  <!-- Subtagline -->
  <text x="80" y="490" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="500" font-size="26" fill="#B3C2D9" letter-spacing="-0.3">
    Lean Six Sigma. Federal-grade program discipline.
  </text>
  <text x="80" y="525" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="500" font-size="26" fill="#B3C2D9" letter-spacing="-0.3">
    No retainer bloat.
  </text>

  <!-- Bottom credential chips -->
  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="600" font-size="13" letter-spacing="1.6">
    <g transform="translate(80, 575)">
      <rect width="280" height="34" rx="17" fill="none" stroke="#475569" stroke-width="1"/>
      <text x="140" y="22" fill="#F0C55A" text-anchor="middle">LEAN SIX SIGMA BLACK BELT</text>
    </g>
    <g transform="translate(376, 575)">
      <rect width="190" height="34" rx="17" fill="none" stroke="#475569" stroke-width="1"/>
      <text x="95" y="22" fill="#F0C55A" text-anchor="middle">PROSCI ADKAR</text>
    </g>
    <g transform="translate(582, 575)">
      <rect width="190" height="34" rx="17" fill="none" stroke="#475569" stroke-width="1"/>
      <text x="95" y="22" fill="#F0C55A" text-anchor="middle">PMP · HL7 FHIR</text>
    </g>
  </g>

  <!-- URL bottom right -->
  <text x="1120" y="595" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="600" font-size="16" fill="#7F94B5" letter-spacing="0.5" text-anchor="end">cranesconsultingfl.com</text>
</svg>
`;

if (!existsSync(dirname(out))) mkdirSync(dirname(out), { recursive: true });

await sharp(Buffer.from(svg))
  .png({ quality: 95, compressionLevel: 9 })
  .toFile(out);

console.log(`OG image generated: ${out}`);
