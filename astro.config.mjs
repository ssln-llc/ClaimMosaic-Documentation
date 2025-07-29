// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'ClaimMosaic Documentation',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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
});