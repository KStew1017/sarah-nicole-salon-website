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
import { UserButton, useUser } from "@clerk/nextjs";

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const currentPath = usePathname();
    const currentUser = useUser();

    return (
        <>
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
                        <div className="text-[56px] font-northwell text-green absolute bottom-0">
                            Sarah Nicole Salon
                        </div>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent
                    className="hidden sm:flex gap-10 mr-[100px]"
                    justify="end"
                >
                    {siteInfo.navItems.map((item) => (
                        <NavbarItem
                            key={item.href}
                            isActive={item.href === "/" ? currentPath === item.href : currentPath.startsWith(item.href)}
                            className="relative"
                        >
                            <Link
                                className="text-green text-[18px] font-serif relative block"
                                href={item.href}
                            >
                                <span className="inline-block relative hover:scale-105 ease-s-curve transition-transform subpixel-antialiased">
                                    {item.label}
                                    <span
                                        className={
                                            (item.href === "/" && currentPath === item.href) ||
                                            (item.href !== "/" && currentPath.startsWith(item.href))
                                                ? "after:content-['q'] after:font-northwellSwash after:absolute after:inset-x-0 after:bottom-[-16px] after:w-[90%] after:text-center after:text-[30px]"
                                                : ""
                                        }
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
                    {currentUser.isSignedIn && currentUser.user !== null ? (
                        <NavbarItem
                            key={"user"}
                            isActive={false}
                            className="hover:drop-shadow-none"
                        >
                            <div className="transition ease-s-curve hover:drop-shadow-light">
                                <UserButton
                                    afterSignOutUrl="/"
                                    appearance={{
                                        elements: {
                                            userButtonTrigger: "focus:shadow-none",
                                            userButtonAvatarBox:
                                                "w-[50px] h-[50px] rounded-full border-2 border-gold transition ease-s-curve hover:drop-shadow-lg hover:scale-105 hover:translate-y-[-2px]",
                                            userButtonPopoverCard: "bg-tan-100 border-2 border-gold font-sans",
                                            userPreviewMainIdentifier: "text-grey text-[18px] font-bold",
                                            userPreviewSecondaryIdentifier: "text-grey/50",
                                            userButtonPopoverActionButton: "hover:bg-tan-200",
                                            userButtonPopoverActionButtonText: "text-[16px]",
                                            userButtonPopoverActionButtonIcon: "w-[20px] h-[20px]",
                                            userButtonPopoverFooter: "hidden",
                                        },
                                    }}
                                />
                            </div>
                        </NavbarItem>
                    ) : (
                        <NavbarItem>
                            <Link
                                className="text-green text-[18px] font-serif relative block"
                                href="/login"
                            >
                                <span className="inline-block relative hover:scale-105 ease-s-curve transition-transform subpixel-antialiased">
                                    Stylist Login
                                </span>
                            </Link>
                        </NavbarItem>
                    )}
                </NavbarContent>
            </NextUINavbar>
            {currentUser.isSignedIn && currentUser.user !== null ? (
                <div className="sticky top-[100px] z-50 bg-green w-full h-[100px] bg-opacity-75 backdrop-filter backdrop-blur-lg">
                    <div className="flex items-center justify-center h-full gap-[10px]">
                        <p className="text-light text-[24px] font-serif ">Welcome, {currentUser.user.firstName}!</p>
                        <div className="inline">
                            <span className="text-light text-[24px] font-serif">Visit Your Dashboard </span>
                            <Link href={`/dashboard`}>
                                <Button
                                    radius="full"
                                    className={`font-serif text-[24px] text-light bg-gold hover:shadow-lg hover:scale-105 data-[hover=true]:opacity-100`}
                                >
                                    <p className="p-[10px] drop-shadow-md">Here</p>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};
