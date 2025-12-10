// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.claimmosaic.com',
  trailingSlash: 'always',
  integrations: [starlight({
      title: 'Claim Mosaic',
      logo: {
        src: './src/assets/logo-bird.svg',
      },
      components: {
        Footer: './src/components/Footer.astro',
      },
      customCss: [
        // Custom font from Google Fonts via Fontsource
        '@fontsource/sora/400.css',
        '@fontsource/sora/500.css',
        '@fontsource/sora/600.css',
        '@fontsource/sora/700.css',
        '@fontsource/sora/800.css',
        // Custom brand styles
        './src/styles/custom.css',
      ],
      social: [
        { icon: 'rocket', label: 'Claim Mosaic App', href: 'https://claimmosaic.com/' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/ssln-llc/ClaimMosaic-Documentation' },
      ],
      head: [
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
        { tag: 'meta', attrs: { name: 'msapplication-TileColor', content: '#da532c' } },
        { tag: 'meta', attrs: { name: 'msapplication-config', content: '/browserconfig.xml' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#ffffff' } },
        { tag: 'meta', attrs: { property: 'og:site_name', content: 'ClaimMosaic Documentation' } },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://docs.claimmosaic.com/android-chrome-512x512.png' } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: 'ClaimMosaic logo' } },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'ClaimMosaic Documentation',
            url: 'https://docs.claimmosaic.com/',
            publisher: {
              '@type': 'Organization',
              name: 'ClaimMosaic',
              url: 'https://claimmosaic.com',
              logo: 'https://docs.claimmosaic.com/android-chrome-512x512.png'
            }
          })
        }
      ],
      sidebar: [
          {
              label: 'Getting Started',
              autogenerate: { directory: 'getting-started' },
          },
          {
              label: 'Dashboard',
              autogenerate: { directory: 'dashboard' },
          },
          {
              label: 'Mosaic View',
              autogenerate: { directory: 'mosaic-view' },
          },
          {
              label: 'Claims',
              items: [
                { label: 'Claims Overview', link: '/claims/overview' },
                { label: 'Claims List', link: '/claims/claims-list' },
                {
                    label: 'Claim Detail',
                    autogenerate: { directory: 'claims/claim-detail' }
                }
              ]
          },
          {
              label: 'Leads',
              autogenerate: { directory: 'leads' },
          },
          {
              label: 'Contacts',
              autogenerate: { directory: 'contacts' },
          },
          {
              label: 'Companies',
              autogenerate: { directory: 'companies' },
          },
          {
              label: 'Tasks',
              autogenerate: { directory: 'tasks' },
          },
          {
              label: 'Reports',
              autogenerate: { directory: 'reports' },
          },
          {
              label: 'Settings',
              autogenerate: { directory: 'settings' },
          }
      ],
  }), sitemap()],

  adapter: cloudflare(),
});