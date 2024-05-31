import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'


function Breadcrums(props) {

    const {product} = props;  // got the product using props. product data will be used in this breadcrum

    // if (!product || !product.category) {
    //     return null; 
    // }
    return(
        <>
        <div className="breadcrum">
            HOME  <img src={arrow_icon} alt="" /> 
            SHOP  <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />
            {product.name}
        </div>
        </>
    )
}


export default Breadcrums;