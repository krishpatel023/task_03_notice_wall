import React from "react";

const GlobalContext = React.createContext({
    notice : [],
    setNotice : () => {},

    isModalOpen : false,
    setIsModalOpen : () => {},

    selectedCategory : 0,
    setSelectedCategory : () => {},
    displayNotice : [],
    setDisplayNotice : () => {},
})

export default GlobalContext