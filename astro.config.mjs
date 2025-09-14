// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			customCss: ['./src/styles/global.css'],
			head: [
				{
					tag: 'script',
					attrs: {
						type: 'module'
					},
					content: `
						// Load UI web components globally
						const uiScript = document.createElement('script');
						uiScript.type = 'module';
						uiScript.src = 'https://esm.sh/@sbddesign/bui-ui/';
						document.head.appendChild(uiScript);
					`
				}
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
						{
							label: 'Bitcoin Tip Jar',
							items: [
								{ label: 'Getting Started', slug: 'guides/bitcoin-tip-jar/getting-started' },
								{ label: 'Configuration', slug: 'guides/bitcoin-tip-jar/configuration' },
								{ label: 'Customization', slug: 'guides/bitcoin-tip-jar/customization' },
								{ label: 'Advanced Usage', slug: 'guides/bitcoin-tip-jar/advanced-usage' },
							],
						},
					],
				},
				{
					label: 'Packages',
					items: [
						{
							label: 'UI',
							items: [
								{ label: 'Overview', slug: 'packages/ui' },
								{ label: 'Amount Option Tile', slug: 'packages/ui/amount-option-tile' },
								{ label: 'Components', slug: 'packages/ui/components' },
								{ label: 'Themes', slug: 'packages/ui/themes' },
								{ label: 'Utilities', slug: 'packages/ui/utilities' },
							],
						},
						{
							label: 'Tokens',
							items: [
								{ label: 'Overview', slug: 'packages/tokens' },
								{ label: 'Colors', slug: 'packages/tokens/colors' },
								{ label: 'Typography', slug: 'packages/tokens/typography' },
								{ label: 'Spacing', slug: 'packages/tokens/spacing' },
							],
						},
						{
							label: 'Icons',
							items: [
								{ label: 'Overview', slug: 'packages/icons' },
								{ label: 'Icon Library', slug: 'packages/icons/library' },
								{ label: 'Usage', slug: 'packages/icons/usage' },
								{ label: 'Custom Icons', slug: 'packages/icons/custom' },
							],
						},
					],
				},
			],
		}),
	],
});
