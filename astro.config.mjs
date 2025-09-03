// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'ClaimMosaic Documentation',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ssln-llc/ClaimMosaic-Documentation' }],
          head: [
            { tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico' } },
            { tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' } },
            { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' } },
            { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' } },
            { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
            { tag: 'link', attrs: { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' } },
            { tag: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
            { tag: 'meta', attrs: { name: 'msapplication-TileColor', content: '#da532c' } },
            { tag: 'meta', attrs: { name: 'msapplication-config', content: '/browserconfig.xml' } },
            { tag: 'meta', attrs: { name: 'theme-color', content: '#ffffff' } },
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
                    { label: 'Claims List View', link: '/claims/claims-list' },
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
      }),
    ],

  adapter: cloudflare(),
});