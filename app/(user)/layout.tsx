export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow">

      {children}

    </main>
  )
}
