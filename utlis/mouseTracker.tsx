import { useState, useEffect } from "react";

interface MousePosition {
    x: number;
    y: number;
}

interface MouseTrackerWrapperProps {
    children: React.ReactNode;
}

export const useMousePosition = (): MousePosition => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.pageX, y: ev.pageY });
        };

        window.addEventListener("mousemove", updateMousePosition, { passive: true });

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return mousePosition;
};

export const MouseTrackerWrapper: React.FC<MouseTrackerWrapperProps> = ({ children }) => {
    const { x, y }: { x: number; y: number } = useMousePosition();

    const xCenter: number = x - 25;
    const yCenter: number = y - 25;

    return (
        <>
            <div
                className="absolute bg-green rounded-full z-[9999]"
                style={{ left: xCenter, top: yCenter, width: 50, height: 50 }}
            />
            {children}
        </>
    );
};
