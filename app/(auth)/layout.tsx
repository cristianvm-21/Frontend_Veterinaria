export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center">
      {/* children sera reemplazado por página actual (Login, Register) según la URL */}
      {children}
    </main>
  );
}
