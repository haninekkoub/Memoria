export default async function RevisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="px-6 ">{children}</section>;
}
