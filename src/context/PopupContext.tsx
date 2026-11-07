import React, { createContext, useCallback, useMemo, useState } from "react";

type PopupName = "cv" | "language" | null;
interface PopupContextValue {
    popup: PopupName;
    open: (name: Exclude<PopupName, null>) => void;
    close: () => void;
}
export const PopupContext = createContext <PopupContextValue | null>(null);

export function PopupProvider ({children}: {children: React.ReactNode}) {
    const [popup, setPopup] = useState <PopupName>(null);
    const open = useCallback((name: Exclude<PopupName, null>) => (setPopup(name)), []);
    const close = useCallback(() => (setPopup(null)), []);
    const value = useMemo(() => ({popup, open, close}), [popup, open, close]);
    return (
        <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
    )
}