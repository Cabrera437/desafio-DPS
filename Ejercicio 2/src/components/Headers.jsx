"use client"
import { useState } from 'react';
export const Headers = ({
allProducts,
setAllProducts,
total,
countProducts,
setCountProducts,
setTotal,
}) => {
const [active, setActive] = useState(false);
const onDeleteProduct = product => {
    const shouldDelete = window.confirm(
      `¿Seguro que quieres eliminar "${product.title}" del carrito?`
    );
  
    if (shouldDelete) {
      const results = allProducts.filter(item => item.id !== product.id);
      setTotal(total - product.price * product.quantity);
      setCountProducts(countProducts - product.quantity);
      setAllProducts(results);
    }
  };
  
  const onCleanCart = () => {
    const shouldClear = window.confirm('¿Seguro que quieres vaciar el carrito?');
  
    if (shouldClear) {
      setAllProducts([]);
      setTotal(0);
      setCountProducts(0);
    }
  };


return (
<header>
<h1>Almacenes Super Mario</h1>
<div className='container-icon'>
<div className='container-cart-icon'
onClick={() => setActive(!active)}
>
<img
src="https://cdn1.iconfinder.com/data/icons/photography-calendar-speaker-person-thinking-3d-il/512/14.png" alt="carrito" className="icon-cart" />
<div className='count-products'>
<span id='contador-productos'>{countProducts}</span>
</div>
</div>
<div
className={`container-cart-products ${
active ? '' : 'hidden-cart'
}`}
>
{allProducts.length ? (
<>
<div className='row-product'>
{allProducts.map(product => (
    <div className='cart-product' key={product.id}>
    <div className='info-cart-product'>
      <img
        src={product.urlImage}
        alt={product.title}
        className='tumbal'
      />
      <div>
        <span className='cantidad-producto-carrito'>
          {product.quantity}
        </span>
        <p className='titulo-producto-carrito'>
          {product.title}
        </p>
        <span className='precio-producto-carrito'>
          ${product.price}
        </span>
      </div>
    
</div><img src="https://cdn1.iconfinder.com/data/icons/3d-front-color/256/trash-can-front-color.png" alt="cerrar" className="icon-close" onClick={() => onDeleteProduct(product)} /></div>
))}
</div>
<div className='cart-total'>
<h3>Total:</h3>
<span className='total-pagar'>${total}</span>
</div>
<button className='btn-clear-all' onClick={onCleanCart}>Vaciar Carrito</button>
</>
) : (
<p className='cart-empty'>El carrito está vacío</p>
)}
</div>
</div>
</header>
);



}