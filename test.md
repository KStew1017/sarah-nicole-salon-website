                {siteConfig.navItems.map((item) => (
                    <NavbarItem
                        key={item.href}
                        isActive={item.href === currentPath}
                        className="relative"
                    >
                        <Link
                            className="text-green text-[16px] font-serif relative block"
                            href={item.href}
                        >
                            <span className="relative z-10">{item.label}</span>
                            {item.href === currentPath ? (
                                <div className="underline-swash absolute left-0 bottom-[-50px] z-10 w-10 h-10 items-center">
                                    <svg
                                        viewBox="0 0 142 31"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                    >
                                        <path
                                            d="M1 13.5C22.3333 6.33333 79.9 -5.30001 139.5 5.49999C143.167 6.16666 141.6 9.3 106 16.5C70.4 23.7 72.5 27.8333 78 29L95 30"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            ) : null}
                        </Link>
                    </NavbarItem>
                ))}
