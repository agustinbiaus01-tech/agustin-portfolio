import "./globals.css";

export const metadata = {
  title: "Agustin Biaus",
  description: "Portafolio Arquitectura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}