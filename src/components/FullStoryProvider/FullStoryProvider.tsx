import React, { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FullStoryContext } from "./FullStoryContext";
import { fullstory } from "../../utils/fullstory";
import { getPageName } from "../../utils/helpers";

// Prop types for FullStoryProvider
interface FullStoryProviderProps {
    children: ReactNode;
}

// Provider component
export const FullStoryProvider: React.FC<FullStoryProviderProps> = ({ children }) => {
    const location = useLocation();

    const useFSNavigate = (to: string, pageName?: string, properties?: any) => {
        try {
            console.log("to", to);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        try {
            const name = getPageName(location.pathname);
            console.log(name);
            // fullstory.setPage(name);
        } catch (error) {
            console.log("error", error);
        }
    }, [location]);

    return <FullStoryContext.Provider value={{ useFSNavigate }}>{children}</FullStoryContext.Provider>;
};

export default FullStoryProvider;
