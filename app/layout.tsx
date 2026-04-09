import type {Metadata} from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Sozo Bricks & Aluminium | Aluminium Windows & Doors Specialists',
  description: 'Premium aluminium windows, doors, and construction specialists in Gauteng, South Africa. Built strong, installed right.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="font-inter">
        {children}
      </body>
    </html>
  );
}
