import { useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal"
import { productList } from "./data"
import Button from "./components/ui/Button"

const App = () => {
/* ___________STATE___________*/
  let [isOpen, setIsOpen] = useState(false)

  /* ___________RENDER___________*/
  
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  const renderProductList = productList.map(product => <ProductCard product={product} key={product.id} />)
  return (
    <div className="mx-auto max-w-5xl px-4">
       <Button className="bg-red-700" onClick={open}>OPEN MODAL</Button>
        <Modal isOpen={isOpen} closeModel={close}>
           <div className="flex items-center justify-between space-x-2">
                <Button className="bg-indigo-700">EDIT</Button>
                <Button className="bg-red-700">DELETE</Button>

            </div>

        </Modal>
      <div className="m-5 p-2 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 md:gap-4">
        {renderProductList}
      </div>
    </div>
  )
}

export default App