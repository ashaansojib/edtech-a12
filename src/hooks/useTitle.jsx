import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect( ()=>{
        document.title = `EdTech - ${title}`
    }, [title])
}
export default useTitle;