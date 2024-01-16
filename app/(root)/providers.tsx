
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ClerkProvider } from "@clerk/nextjs";

export interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    "use client";
    return (
        <ClerkProvider>
            <NextUIProvider>{children}</NextUIProvider>
        </ClerkProvider>
    );
}
