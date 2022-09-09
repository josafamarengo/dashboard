import { useRouter } from "next/router";
import { createContext, useState, useCallback, useEffect, useContext } from "react";

interface SidebarDrawerProviderProps {
    children: React.ReactNode;
}

interface SidebarDrawerContextData {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    isFloating: boolean;
    onToggle: () => void;
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFloating, setIsFloating] = useState(false);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onToggle = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    useEffect(() => {
        if (window.innerWidth >= 1280) {
            setIsFloating(true);
        }
    }, []);

    const router = useRouter();

    useEffect(() => {
        onClose();
    }, [router.asPath, onClose]);

    return (
        <SidebarDrawerContext.Provider value={{ isOpen, isFloating, onClose, onOpen, onToggle }}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => {
    return useContext(SidebarDrawerContext);
}