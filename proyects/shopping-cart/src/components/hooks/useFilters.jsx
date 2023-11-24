import { useContext } from 'react'
import { FiltersContext } from '../context/filter.jsx'

export function useFilters(){
    // const [filters,setFilters]=useState(
    //   {
    //   category:'all',
    //   minPrice:0
    // })
    
    //esto permite usar el contexto creado de filtros
    const  {filters,setFilters} = useContext(FiltersContext)
  
    const filterProducts = (products) =>{
  
      return products.filter(product =>{
        return(
          product.price >= filters.minPrice && 
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
  
    }
    return {filters,filterProducts, setFilters}
  }