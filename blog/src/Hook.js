import { useEffect } from "react";

export const useTitle = (title) => {
    useEffect(() => {
        document.title = `Fiverr | ${title}`
    }, [title])
    
    return null;
}

export const useMetaKeyword = (keyword) => {
    useEffect(() => {
        document.keyword = `Fiverr| ${keyword}`
    }, [keyword])
    
    return null;
}