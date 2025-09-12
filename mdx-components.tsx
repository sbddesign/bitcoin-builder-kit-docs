import type { MDXComponents } from 'nextra/mdx'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Add or override MDX components here
    ...components,
  }
}


