import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://landfree.com"),
  title: {
    default: "Maurya Codesphere - Elevate Your Online Business",
    template: "%s | Maurya Codesphere",
  },
  description:
    "Maurya Codesphere simplifies the explanation of your business, services, and pricing, making it easily understandable. Create stunning websites with our professional templates.",
  keywords: [
    "business template",
    "landing page",
    "web design",
    "online business",
    "website builder",
    "professional templates",
    "business website",
    "responsive design",
    "modern templates",
    "custom website",
  ],
  authors: [{ name: "Abhinand Maurya", url: "https://landfree.com" }],
  creator: "Abhinand Maurya",
  publisher: "Maurya Codesphere",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Maurya Codesphere - Elevate Your Online Business",
    description:
      "Maurya Codesphere simplifies the explanation of your business, services, and pricing, making it easily understandable.",
    url: "",
    siteName: "Maurya Codesphere",
    images: [
      {
        url: "https://landfree.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maurya Codesphere - Professional Website Templates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maurya Codesphere - Elevate Your Online Business",
    description:
      "Maurya Codesphere simplifies the explanation of your business, services, and pricing, making it easily understandable.",
    creator: "@Maurya Codesphere",
    images: ["https://landfree.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://landfree.com" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LandFree",
              url: "https://landfree.com",
              logo: "https://landfree.com/logo.png",
              sameAs: [
                "https://twitter.com/landfree",
                "https://linkedin.com/company/landfree",
                "https://github.com/landfree",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-555-5555",
                contactType: "customer service",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
