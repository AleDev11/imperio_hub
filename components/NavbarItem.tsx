import React from 'react'

interface NavbarItemProps {
    label: string
    href: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({
    label,
    href,
}) => {
    return (
        <div className="text-white cursor-pointer hover:text-gray-300 transition">
            <a href={href}>{label}</a>
        </div>
    )
}

export default NavbarItem