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
						{ label: 'Getting Started', slug: 'guides' },
						{
							label: 'Bitcoin Tip Jar',
							items: [
								{ label: 'Bitcoin Tip Jar', slug: 'guides/bitcoin-tip-jar/getting-started' },
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
								{ label: 'NumPad', slug: 'packages/ui/numpad' },
								{ label: 'NumPad Button', slug: 'packages/ui/numpad-button' },
								{ label: 'Option Dot', slug: 'packages/ui/option-dot' },
								{ label: 'Toggle', slug: 'packages/ui/toggle' },
							],
						},
						{
							label: 'Tokens',
							items: [
								{ label: 'Overview', slug: 'packages/tokens' },
							],
						},
						{
							label: 'Icons',
							items: [
								{ label: 'Overview', slug: 'packages/icons' },
							],
						},
					],
				},
			],
		}),
	],
});
