export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <div>
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
        </div>
  );
}
