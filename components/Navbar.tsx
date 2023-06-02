import { useCallback, useEffect, useState } from "react"
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs"

import MobileMenu from "./MobileMenu"
import NavbarItem from "./NavbarItem"
import AccountMenu from "./AccountMenu"

const TOP_OFFSET = 66

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const [showBackground, setShowBackground] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((prev) => !prev)
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((prev) => !prev)
    }, [])

    return (
        <nav className="w-full fixed z-40">
            <div
                className={`
                    px-4
                    md:px-16
                    py-6
                    flex
                    flex-row
                    items-center
                    transition
                    duration-500
                    bg-zinc-900
                    bg-opacity-90
                    ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
                `}
            >
                <img src="/images/Imperio.png" alt="logo" className="h-4 lg:h-7" />
                <div
                    className="
                    flex-row
                    ml-8
                    gap-7
                    hidden
                    lg:flex
                "
                >
                    <NavbarItem label="Home" href="/" />
                    <NavbarItem label="Series" href="/" />
                    <NavbarItem label="Movies" href="/" />
                    <NavbarItem label="New & Popular" href="/" />
                    <NavbarItem label="My List" href="/" />
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180': 'rotate-0' }`} />
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className="flex flex-row items-center gap-7 ml-auto">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/Imperio_logo.png" alt="profile" className="w-full h-full object-cover" />
                        </div>
                        <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180': 'rotate-0' }`} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar