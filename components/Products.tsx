import products from '../data/products'
import { formatCurrencyString } from 'use-shopping-cart'
import { useShoppingCart } from 'use-shopping-cart/react'
import { CWload } from '../components/CWload';
// import {FontAwesomeIcon} from fortawesome;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Products = () => {
  const { addItem, removeItem } = useShoppingCart()
  const address = CWload('Products.tsx')
  if (!address) {return (    <section className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} className='nftimage' alt={product.name} />
            <h2>{product.name}</h2>
            <p className="price">
              {formatCurrencyString({
                value: product.price,
                currency: product.currency,
              })}
            </p>
          </div>
        ))}
      </section>)
  } else{
  return (
    <section className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} className='nftimage' alt={product.name} />
          <h1>{product.name}</h1>
          <h2 className="price">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </h2>
          <button
            className="shop-button change-count-button  subtract-button cart-style-background"
            onClick={() => removeItem(product.id)}
            disabled={!address}
          >
            - <FontAwesomeIcon icon={brands('stripe')} />
          </button>
          <button
            className="shop-button  change-count-button add-button cart-style-background"
            onClick={() => {
              console.log(product)
              addItem(product)
            }}
            disabled={!address}
          >
            +
          </button>

        </div>
      ))}
    </section>
  )}
}

export default Products
