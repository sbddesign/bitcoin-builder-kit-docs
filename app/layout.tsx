import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {};

const banner = <Banner storageKey="bbk-nextra-banner">Bitcoin Builder Kit Docs 🎉</Banner>;
const navbar = (
  <Navbar
    logo={<b>Bitcoin Builder Kit</b>}
  />
);
const footer = <Footer>{new Date().getFullYear()} © Bitcoin Builder Kit.</Footer>;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        {/* Custom head tags */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/sbddesign/bitcoin-builder-kit-docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
