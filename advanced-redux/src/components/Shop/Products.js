import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', price: 6, title: 'My first book', description: 'First book I wrote' },
  { id: 'p2', price: 2, title: 'My second book', description: 'Second book I wrote' }
];

const Products = ( props ) => {
  return (
    <section className={ classes.products }>
      <h2>Buy your favorite products</h2>
      <ul>
        { DUMMY_PRODUCTS.map( ( product ) => (
          <ProductItem
            key={ product.id }
            id={ product.id }
            title={ product.title }
            price={ product.price }
            description={ product.description }
          /> ) ) }

      </ul>
    </section>
  );
};

export default Products;
