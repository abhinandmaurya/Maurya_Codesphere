import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatedBackground } from "@/components/animated-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mauryacodesphere.com"),
  title: {
    default: "Maurya Codesphere - Elevate Your Online Presence",
    template: "%s | Maurya Codesphere",
  },
  description:
    "Maurya Codesphere helps you build stunning, high-performance websites with ease. Elevate your online business today with our professional templates.",
  keywords: [
    "business template",
    "landing page design",
    "website development",
    "AI-powered website builder",
    "SEO-friendly websites",
    "custom website development",
    "responsive business website",
    "modern web templates",
    "professional website builder",
    "best web design services",
  ],
  authors: [{ name: "Maurya Codesphere", url: "https://mauryacodesphere.com" }],
  creator: "Maurya Codesphere",
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
    title: "Maurya Codesphere - Elevate Your Online Presence",
    description:
      "Maurya Codesphere helps you build high-performance websites effortlessly. Grow your online business with our professional web templates.",
    url: "https://mauryacodesphere.com",
    siteName: "Maurya Codesphere",
    images: [
      {
        url: "https://mauryacodesphere.com/images/og-image.jpg",
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
    title: "Maurya Codesphere - Elevate Your Online Presence",
    description:
      "Maurya Codesphere simplifies web development with AI-powered solutions and modern design templates.",
    creator: "@MauryaCodesphere",
    images: ["https://mauryacodesphere.com/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: false,
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
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="canonical" href="https://mauryacodesphere.com" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Maurya Codesphere",
              url: "https://mauryacodesphere.com",
              logo: {
                "@type": "ImageObject",
                url: "https://mauryacodesphere.com/logo.png",
                height: 500,
                width: 500,
              },
              sameAs: [
                "https://twitter.com/mauryacodesphere",
                "https://linkedin.com/company/mauryacodesphere",
                "https://github.com/mauryacodesphere",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-555-5555",
                contactType: "customer service",
                availableLanguage: ["English"],
              },
              location: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Your Business Address",
                  addressLocality: "City",
                  postalCode: "ZIP Code",
                  addressCountry: "Country",
                },
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} relative min-h-screen antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
