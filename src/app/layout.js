
import Navbar from "../components/layout/Navbar";
import "./globals.css";
import Footer from "../components/layout/Footer";
import FathomAnalytics from "../components/FathomAnalytics";
import { client } from "../sanity/client";
import ThemeWrapper from "../components/layout/ThemeWrapper";
import Layout from "../components/layout/Layout";


const SETTINGS_QUERY = `*[_type == "settings"][0]`;
const options = { next: { revalidate: 30 } };

export const metadata = async () => {
  const settings = await client.fetch(SETTINGS_QUERY, {}, options);
  const title = settings?.title || "Blog";
  return ({
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: settings?.description || "A blog website built by Colby Hemond Web Development. Visit https://www.colbyhemond.com to get your own copy", 
    alternates: {
      types: {
        'application/rss+xml': `https://${process.env.NEXT_PUBLIC_DOMAIN}/feed.xml`,
      },
    }
  })
};

export default async function RootLayout({ children }) {

  const settings = await client.fetch(SETTINGS_QUERY, {}, options);

  const theme = settings?.theme || "light";
  
  return (
    <html lang="en" className="bg-neutral">
      <FathomAnalytics />
      
      <body className="bg-base-100">
        <ThemeWrapper theme={theme}>
        
        <Layout settings={settings}>
          {children}
        </Layout>
        </ThemeWrapper>
      </body>
    </html>
  );
}
