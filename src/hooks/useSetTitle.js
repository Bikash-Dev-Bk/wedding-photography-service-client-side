import { useEffect } from "react";

const useSetTitle = title => {
    useEffect(()=>{
        document.title = `${title} - Wedding Art`
    },[title])
};

export default useSetTitle;