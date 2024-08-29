'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function NavLinks() {
    const pathname = usePathname()

    return (
        <nav>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                Home
            </Link>

            <Link
                className={`link ${pathname === '/about' ? 'active' : ''} p-2`} href="/about">
                About
            </Link>
        </nav>
    )
}
