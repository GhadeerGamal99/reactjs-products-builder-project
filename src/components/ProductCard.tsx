import type { IProduct } from "../interfaces"
import { txtSlicer } from "../utils/functions"
import Image from "./Image"
import Button from "./ui/Button"

interface IProps {
    product: IProduct
}
const ProductCard = ({ product }: IProps) => {
    const { title, description, imageURL, price, category } = product;
    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
            <Image className="rounded-md h-52 w-full lg:object-cover" imageURL={imageURL} alt="product image"/>
              <h3 className="text-md font-semibold">{txtSlicer(title, 20)}</h3>
      <p className="text-sm text-gray-500 wrap-break-words">{txtSlicer(description)}</p>

            <div className="flex items-center flex-wrap space-x-1">
                <span className="w-5 h-5 rounded-full bg-indigo-600 cursor-pointer" />
                <span className="w-5 h-5 rounded-full bg-red-600 cursor-pointer" />
                <span className="w-5 h-5 rounded-full bg-yellow-600 cursor-pointer" />
            </div>

            <div className="flex items-center justify-between">
                    <span className="text-lg text-indigo-600 font-semibold"> $ {price}</span>
                <div className="flex items-center space-x-2">
                          <span className="text-xs font-semibold">{category.name}</span>
                    <Image className="w-10 h-10 rounded-full object-cover" imageURL={category.imageURL} alt={category.name} />
                </div>
            </div>
            <div className="flex items-center justify-between space-x-2">
                <Button className="bg-indigo-700">EDIT</Button>
                <Button className="bg-red-700">DELETE</Button>

            </div>

        </div>
    )
}

export default ProductCard