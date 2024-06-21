import { createContext, useEffect, useState } from "react";
export const StickerContext = createContext();

const StickerProvider = ({ children }) => {
const [stickers, setStickers] = useState([]);
const [stickerSel, setStickerSel] = useState({})


const getStickers = async ()=>{
    let response = await fetch("../../stickers.json")
    response = await response.json()
    setStickers(response)
}

const getStickerById = (id)=>{
    let sticker = stickers.findIndex((s) => s.id === id)
}

useEffect(() => {
    getStickers();
}, [])

return (
<StickerContext.Provider value={{ stickers, setStickers, getStickerById }}>
{children}
</StickerContext.Provider>
);
};
export default StickerProvider;