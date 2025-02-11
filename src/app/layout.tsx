import "@radix-ui/themes/styles.css";
import './globals.css'
import { Theme } from "@radix-ui/themes";

export const metadata = {
  title: 'Fetch a new best friend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="amber" radius="full" appearance="dark">
          {children}
        </Theme>
      </body>
    </html>
  )
}
