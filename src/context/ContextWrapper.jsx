import React , {useEffect, useState} from 'react'
import GlobalContext from './GlobalContext'


export default function ContextWrapper(props) {
    const [notice, setNotice] = useState([])
    
    const addNotice = (item) => setNotice(() => [item,...notice]);


    const [isModalOpen, setIsModalOpen] = useState(false)

    const [selectedCategory, setSelectedCategory] = useState('All')
    const [displayNotice, setDisplayNotice] = useState([])

    const changeDisplayNotice = ()=>{
      var newArr = notice
      if(selectedCategory === 'All'){
        setDisplayNotice(newArr)
      }
      else{
        newArr = newArr.filter((item) => item.category === selectedCategory)
        setDisplayNotice(newArr)
      }
    }
    useEffect(()=>{
      changeDisplayNotice()
    },[notice ,selectedCategory])

    const doReverse = ()=>{

    }
    const addNotice2 = (item) => setNotice((tasks) => [...tasks, item]);
    const value = {
        notice,
        addNotice,
        isModalOpen,
        setIsModalOpen,
        selectedCategory,
        setSelectedCategory,
        displayNotice
    }
  return (
      <GlobalContext.Provider value={value}>
        {props.children}
      </GlobalContext.Provider>
  )
}