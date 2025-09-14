// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Bitcoin Builder Kit',
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
								{ label: 'Avatar', slug: 'packages/ui/avatar' },
								{ label: 'Bitcoin QR Display', slug: 'packages/ui/bitcoin-qr-display' },
								{ label: 'Bitcoin Value', slug: 'packages/ui/bitcoin-value' },
								{ label: 'Button', slug: 'packages/ui/button' },
								{ label: 'Button Cluster', slug: 'packages/ui/button-cluster' },
								{ label: 'Input', slug: 'packages/ui/input' },
								{ label: 'Message', slug: 'packages/ui/message' },
								{ label: 'Money Value', slug: 'packages/ui/money-value' },
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
