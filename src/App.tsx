import ProductCard from "./components/ProductCard"
import { productList } from "./data"

const App = () => {
  const renderProductList = productList.map(product => <ProductCard product={product} key={product.id} />)
  return (
    <div>
      <div className="m-5 p-2 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2">
        {renderProductList}
      </div>
    </div>
  )
}

export default App