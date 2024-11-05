import QuantityButton from "./QuantityButton"
// import Qty from "./Qty";

const ProductCard = ({ name, image, price, updateInfo, updateQuantity, prods }) => {

  // updateInfo('keerthi'); 
  // console.log("###### productCard 2",prods);
  // console.log("HIIIIIIII");
  return (
    <div className="card">
      <img height="250" src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text" variant="fw-bold">{price}</p>
        <QuantityButton updateQuantity={updateQuantity}/>
        {/* <Qty/> */}
      </div>
    </div>
  );
};

export default ProductCard;
