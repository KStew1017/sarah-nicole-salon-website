"use client";

import React from "react";
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    Dropdown,
    DropdownMenu,
    DropdownTrigger,
    Button,
    DropdownItem,
} from "@nextui-org/react";
import { siteInfo } from "@/configs/siteInfo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Expand } from "@/utlis/icons";
import tailwindCustomColors from "@/utlis/customColors";

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const currentPath = usePathname();

    return (
        <NextUINavbar
            onMenuOpenChange={setIsMenuOpen}
            className="h-[100px] bg-light text-dark bg-opacity-50 backdrop-filter backdrop-blur-lg"
            maxWidth="full"
            position="sticky"
            isBordered
        >
            <NavbarContent className="ml-[100px]">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="relative h-[50px]">
                    <div className="text-[56px] font-northwell text-green absolute bottom-0">Sarah Nicole Salon</div>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex gap-10 mr-[100px]"
                justify="end"
            >
                {siteInfo.navItems.map((item) => (
                    <NavbarItem
                        key={item.href}
                        isActive={item.href === currentPath}
                        className="relative"
                    >
                        <Link
                            className="text-green text-[18px] font-serif relative block"
                            href={item.href}
                        >
                            <span className="inline-block relative hover:scale-105 ease-s-curve transition-transform subpixel-antialiased">
                                {item.label}
                                <span
                                    className={`${
                                        item.href === currentPath
                                            ? "after:content-['q'] after:font-northwellSwash after:absolute after:inset-x-0 after:bottom-[-16px] after:w-[90%] after:text-center after:text-[30px]"
                                            : ""
                                    }`}
                                >
                                    &nbsp;
                                </span>
                            </span>
                        </Link>
                    </NavbarItem>
                ))}
                <Dropdown
                    onOpenChange={setIsDropdownOpen}
                    classNames={{
                        base: "rounded-xl bg-light bg-opacity-50 backdrop-filter backdrop-blur-md",
                        content: "bg-opacity-0",
                    }}
                >
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                className="text-green text-[18px] font-serif aria-expanded:scale-100 data-[pressed=true]:scale-100 data-[hover=true]:bg-default/0 aria-expanded:opacity-100 data-[pressed=true]:opacity-100 data-[pressed=true]:text-green focus:outline-none active:text-green transition-transform-colors-opacity p-0 hover:scale-105 ease-s-curve transition-transform subpixel-antialiased"
                                variant="light"
                                disableRipple
                                endContent={
                                    isDropdownOpen ? (
                                        <Expand
                                            expanded
                                            customClass="ml-[-8px] duration-1000 ease-s-curve"
                                            color={`${tailwindCustomColors.green}`}
                                        />
                                    ) : (
                                        <Expand
                                            customClass="ml-[-8px] duration-1000 ease-s-curve"
                                            color={`${tailwindCustomColors.green}`}
                                        />
                                    )
                                }
                            >
                                About Us
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="Dropdown menu"
                        itemClasses={{
                            base: "text-center text-green data-[hover=true]:bg-default/0 data-[hover=true]:scale-105 ease-s-curve transition-transform subpixel-antialiased",
                        }}
                    >
                        {siteInfo.aboutUs.map((item) => (
                            <DropdownItem
                                key={item.href}
                                textValue={item.label}
                            >
                                <Link
                                    className="text-green text-[18px] transition ease-s-curve font-serif"
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </NextUINavbar>
    );
};
