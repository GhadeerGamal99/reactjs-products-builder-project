import { useState, type ChangeEvent, type FormEvent } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal"
import { categories, colors, formInputsList, productList } from "./data"
import Button from "./components/ui/Button"
import Input from "./components/ui/Input"
import type { IProduct } from "./interfaces"
import { productValidation } from "./validation"
import ErrorMessage from "./components/ui/ErrorMessage"
import CircleColor from "./components/ui/CircleColor"
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select"

const App = () => {
  /* ___________STATE___________*/
  const [isOpen, setIsOpen] = useState(false)
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    price: '',
    imageURL: '',
  })
  const defaultProductObj: IProduct = {
    title: '',
    description: '',
    price: '',
    imageURL: '',
    colors: [],
    category: {
      name: '',
      imageURL: '',
    }
  }
  const [products, setProducts] = useState<IProduct[]>(productList)
  const [product, setProduct] = useState<IProduct>(defaultProductObj)
  const [tempColors, setTempColors] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  /* ___________RENDER___________*/

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value })
    setErrors({ ...errors, [name]: "" })
  }

  const onCancelHandler = () => {
    setProduct(defaultProductObj)
    setIsOpen(false)
  }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = product;
    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
    })
    const hasErrorMsg = Object.values(errors).some(value => value == '') && Object.values(errors).every(value => value == '');

    if (!hasErrorMsg) {
      setErrors(errors)
      return;
    }
    setProducts(prev => [...prev, { ...product, id: uuid(), colors: tempColors,category:selectedCategory }])
    close()
    console.log("products", products)
  }

   /* ___________map_lists___________*/
  const renderProductList = products.map(product =>
    <ProductCard product={product} key={product.id} />)
  const renderFormInputList = formInputsList.map(input =>
    <div className="flex flex-col" key={input.id}>
      <label className="text-sm font-medium mb text-gray-700" htmlFor={input.id}>{input.label}</label>
      <Input type="text" name={input.name} id={input.id} value={product[input.name]} onChange={onChangeHandler} />
      <ErrorMessage msg={errors[input.name]} />
    </div>)
  const renderProductColors = colors.map(color => <CircleColor key={color} color={color}
    onClick={
      () => {
        if (tempColors.includes(color)) {
          setTempColors(prev => prev.filter(item => item !== color))
          return
        }

        setTempColors((prev) => [...prev, color])
      }


    } />)



  return (
    <div className="mx-auto max-w-5xl px-4">
      <Button className="bg-red-700" onClick={open}>OPEN MODAL</Button>

      <Modal isOpen={isOpen} closeModel={close} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={onSubmitHandler}>
          {renderFormInputList}
          <Select selected={selectedCategory} setSelected={setSelectedCategory} />
          <div className="flex items-center flex-wrap space-x-1">
            {renderProductColors}
          </div>
          <div className="flex items-center flex-wrap space-x-1">
            {
              tempColors.map(color => <span key={color}
                className="mb p-1 mrr-1 text-sm text-white rounded-md" style={{ background: color }}>{color}</span>)
            }
          </div>

          <div className="flex items-center justify-between space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800" >submit</Button>
            <Button className="bg-gray-400 hover:bg-gray-500" onClick={onCancelHandler}>Cancel</Button>

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