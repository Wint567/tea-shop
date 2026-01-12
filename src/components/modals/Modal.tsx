"use client";

import { useEffect } from "react";

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[999] flex items-center justify-center"
            onMouseDown={onClose}
        >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

            <div className="relative" onMouseDown={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
