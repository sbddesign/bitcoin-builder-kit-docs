// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Packages',
					items: [
						{
							label: 'UI',
							items: [
								{ label: 'Overview', slug: 'packages/ui' },
								{ label: 'Components', slug: 'packages/ui/components' },
								{ label: 'Themes', slug: 'packages/ui/themes' },
								{ label: 'Utilities', slug: 'packages/ui/utilities' },
							],
						},
					],
				},
			],
		}),
	],
});
