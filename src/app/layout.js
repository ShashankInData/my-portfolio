import "./globals.css";

export const metadata = {
  title: "Shashank Bodapati — Data Analyst & AI Engineer",
  description:
    "Data & AI professional building clean data pipelines, self-service dashboards, and ML/GenAI prototypes. Portfolio showcasing projects, experience, and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased font-body">
        {children}
      </body>
    </html>
  );
}
