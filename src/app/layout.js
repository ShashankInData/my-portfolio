import "./globals.css";

export const metadata = {
  title: "Shashank Bodapati – Data/AI Portfolio",
  description:
    "Data Analyst / Data Scientist portfolio: projects, experience, skills, and contact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
