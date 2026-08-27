import './globals.css';
import { AppShell } from '@/components/AppShell';
export const metadata = { title: 'KSU Connect', description: 'The digital campus hub for KSU students.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><AppShell>{children}</AppShell></body></html>; }
