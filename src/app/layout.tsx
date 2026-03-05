
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Espaço Beleza Sarah Muniz | Hair, Nails & Makeup',
  description: 'Descubra a sua melhor versão no Espaço Beleza Sarah Muniz. Especialistas em cabelos, unhas e maquiagem com um toque personalizado.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
