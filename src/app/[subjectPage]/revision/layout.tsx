export default async function RevisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 overflow-y-auto pb-12 no-scrollbar">
      {children}
    </section>
  );
}
