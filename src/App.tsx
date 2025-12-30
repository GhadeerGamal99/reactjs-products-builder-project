import { useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal"
import { formInputsList, productList } from "./data"
import Button from "./components/ui/Button"
import Input from "./components/ui/Input"

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
  const renderFormInputList = formInputsList.map(input =>
    <div className="flex flex-col">
      <label className="text-sm font-medium mb text-gray-700" htmlFor={input.id}>{input.label}</label>
      <Input type="text" name={input.name} id={input.id} />
    </div>)
  return (
    <div className="mx-auto max-w-5xl px-4">
      <Button className="bg-red-700" onClick={open}>OPEN MODAL</Button>
      <Modal isOpen={isOpen} closeModel={close} title="ADD A NEW PRODUCT">
        <form className="space-y-3">
          {renderFormInputList}
          <div className="flex items-center justify-between space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">submit</Button>
            <Button className="bg-gray-400 hover:bg-gray-500">Cancel</Button>

          </div>
        </form>

      </Modal>
      <div className="m-5 p-2 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
       xl:grid-cols-4  gap-2 md:gap-4">
        {renderProductList}
      </div>
    </div>
  )
}

export default App