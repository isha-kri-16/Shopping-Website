import Hero from "../Components/Hero/Hero";
import NewCollection from "../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/NewLetter/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";
import ShopCategory from "./ShopCategory";


// HOME PAGE
function Shop() {    
    return(
        <>

        <Hero />
        <Popular />
        <Offers />
        <NewCollection />
        <NewsLetter />
        </>
    )
}

export default Shop;