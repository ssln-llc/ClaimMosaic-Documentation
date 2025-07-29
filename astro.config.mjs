// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'ClaimMosaic Documentation',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
          sidebar: [
              {
                  label: 'Getting Started',
                  items: [
                      { label: 'Account Setup', slug: 'getting-started/account-setup' },
                      { label: 'Tiers & Pricing', slug: 'getting-started/tiers-pricing' },
                      { label: 'FAQ', slug: 'getting-started/faq' },
                  ],
              },
              {
                  label: 'Dashboard',
                  items: [
                      { label: 'User Dashboard', slug: 'dashboard/user-dashboard' },
                      { label: 'Admin Dashboard', slug: 'dashboard/admin-dashboard' },
                      { label: 'Widgets', slug: 'dashboard/widgets' },
                      { label: 'Quick Add', slug: 'dashboard/quick-add' },
                      { label: 'Activities', slug: 'dashboard/activities' },
                  ],
              },
              {
                  label: 'Mosaic View',
                  items: [
                      { label: 'Claim Board', slug: 'mosaic-view/claim-board' },
                      { label: 'Lead Board', slug: 'mosaic-view/lead-board' },
                      { label: 'Task Board', slug: 'mosaic-view/task-board' },
                      { label: 'Map View', slug: 'mosaic-view/map-view' },
                      { label: 'Calendar', slug: 'mosaic-view/calendar' },
                  ],
              },
              {
                  label: 'Claims',
                  items: [
                      { label: 'Creating Claims', slug: 'claims/creating-claims' },
                      { label: 'Managing Claims', slug: 'claims/managing-claims' },
                      { label: 'Claim Statuses', slug: 'claims/claim-statuses' },
                      { label: 'Claim Details', slug: 'claims/claim-details' },
                  ],
              },
              {
                  label: 'Leads',
                  items: [
                      { label: 'Creating Leads', slug: 'leads/creating-leads' },
                      { label: 'Managing Leads', slug: 'leads/managing-leads' },
                      { label: 'Lead Statuses', slug: 'leads/lead-statuses' },
                      { label: 'Converting Leads to Claims', slug: 'leads/converting-leads' },
                  ],
              },
              { label: 'Contacts', slug: 'contacts' },
              { label: 'Companies', slug: 'companies' },
              { label: 'Tasks', slug: 'tasks' },
              { label: 'Reports', slug: 'reports' },
              {
                  label: 'Settings',
                  items: [
                      { label: 'General', slug: 'settings/general' },
                      { label: 'Billing', slug: 'settings/billing' },
                      { label: 'Document Templates', slug: 'settings/document-templates' },
                      { label: 'Fields', slug: 'settings/fields' },
                      { label: 'Automation', slug: 'settings/automation' },
                      { label: 'Invoicing', slug: 'settings/invoicing' },
                      { label: 'External Portals', slug: 'settings/external-portals' },
                      { label: 'Users', slug: 'settings/users' },
                      { label: 'Access Rights', slug: 'settings/access-rights' },
                  ],
              },
              { label: 'Support', slug: 'support' },
          ],
      }),
	],

  adapter: cloudflare(),
});