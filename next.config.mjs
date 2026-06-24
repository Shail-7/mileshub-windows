/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: this app previously used `output: 'export'` (fully static). The contact
  // form now posts to a server route (app/api/contact) to email leads, which
  // requires a Node server, so static export is disabled. On Netlify the Next.js
  // runtime plugin handles the API route automatically.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
