import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from '../components/CustomCursor';

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Boostio | #1 Discord Shop & UHQ Products",
  description:
    "Boostio is a Discord shop that sells high-quality Discord boosts, tools, and more. We offer a wide range of services to help you grow your community. Boostio is not affiliated or endorsed by Discord in any way.",
  icons: {
    icon: "logo.png",
  },
  openGraph: {
    title: "Boostio | #1 Discord Shop & UHQ Products",
    description:
      "Boostio is a Discord shop that sells high-quality Discord boosts, tools, and more.",
    url: "https://boostio.gg",
    siteName: "Boostio",
    type: "website",
    images: [
      {
        url: "https://media.discordapp.net/attachments/1312844757290192926/1312871570389340180/image.png?ex=674e126e&is=674cc0ee&hm=e044df02fcb4329943ef6143b144be57039879b84282532df6c4943f6bf77130&=&format=webp&quality=lossless&width=789&height=195",
        width: 1200,
        height: 630,
        alt: "Signature Video Preview"
      },
    ],
    videos: [
      {
        url: "https://streamable.com/kj2ykb?src=player-page-share",
        width: 1920,
        height: 1080,
        type: "video/mp4"
      }
    ]
  },
};

export const viewport: Viewport = {
  themeColor: "#FF8DCA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OutfitFont.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
