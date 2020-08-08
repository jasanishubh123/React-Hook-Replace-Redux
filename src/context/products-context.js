import React ,{useState} from 'react'
export const ProductContext=React.createContext({
    products:[],
    toggleFav:(id)=>{}
})

export default props=>{

    const[productsList,setProductsList]=useState(
       
    )

    const toggleFavorite=productId=>{
      setProductsList(currentProdList=>{

        const prodIndex = currentProdList.findIndex(
          p => p.id === productId
        );
        const newFavStatus = !currentProdList[prodIndex].isFavorite;
        const updatedProducts = [...currentProdList];
        updatedProducts[prodIndex] = {
          ...currentProdList[prodIndex],
          isFavorite: newFavStatus
        };

        return updatedProducts
      })
    }

    return(
      <ProductContext.Provider
      value={{ products: productsList,toggleFav:toggleFavorite}}
    >
      {props.children}
    </ProductContext.Provider>
    )
}