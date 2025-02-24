import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatedBackground } from "@/components/animated-background";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mauryacodesphere.com"),
  title: {
    default: "Maurya Codesphere - Elevate Your Online Presence",
    template: "%s | Maurya Codesphere",
  },
  description:
    "Maurya Codesphere offers cutting-edge, high-performance websites with AI-powered solutions. Build your digital empire today!",
  keywords: [
    "web development",
    "AI-powered website",
    "SEO-friendly websites",
    "custom business website",
    "best website builder",
    "modern web design",
    "fast-loading websites",
    "professional web templates",
    "responsive website design",
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
    canonical: "https://mauryacodesphere.com",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Maurya Codesphere - Elevate Your Online Presence",
    description:
      "Build high-performance websites effortlessly with Maurya Codesphere’s AI-powered web solutions.",
    url: "https://mauryacodesphere.com",
    siteName: "Maurya Codesphere",
    images: [
      {
        url: "https://mauryacodesphere.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maurya Codesphere - AI-powered websites",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maurya Codesphere - Elevate Your Online Presence",
    description:
      "AI-driven, SEO-friendly website solutions to grow your online business with ease.",
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
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className="dark">
      <head>
        <link rel="canonical" href="https://mauryacodesphere.com" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          as="style"
          onLoad={(event) => {
            const link = event.target as HTMLLinkElement;
            link.rel = "stylesheet";
          }}
        />

        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          />
        </noscript>
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
          <main className="relative z-10 flex min-h-screen flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
