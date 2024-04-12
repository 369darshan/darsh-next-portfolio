"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'


const NavLink = ({ link }: any) => {
    const pathName = usePathname();
    return (
        <Link href={link.url} className={`rounded p-1 ${pathName === link.url && "bg-black ring-1 ring-white text-blue-300"} text-white`}>
            {link.title}
        </Link>
    )
}

export default NavLink
