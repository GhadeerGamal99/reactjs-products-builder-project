import type { IProduct } from "../interfaces"
import Image from "./Image"
import Button from "./ui/Button"

interface IProps {
product:IProduct
}
const ProductCard = ({product}: IProps) => {
    const {title,description,imageURL,price}=product;
    return (
        <div className="flex flex-col border rounded-md p-2">
           <Image className="rounded-md mb-2 max-w-full" imageURL={imageURL} alt="product image"></Image>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="flex my-4 space-x-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 cursor-pointer" />
                <span className="w-5 h-5 rounded-full bg-red-600 cursor-pointer" />
                <span className="w-5 h-5 rounded-full bg-yellow-600 cursor-pointer" />
            </div>

            <div className="flex justify-between">
                <span>{price}</span>
                <Image className="w-10 h-10 rounded-full object-cover" imageURL="https://www.mytheresa.com/media/356/402/30/1e/P01102414_b2.jpg" alt="small product image" />
            </div>
            <div className="flex space-x-2 mt-5">
                <Button className="bg-indigo-700">EDIT</Button>
                <Button className="bg-red-700">DELETE</Button>
                <Button className="bg-slate-900">LOADING</Button>
                <Button className="bg-green-700">SUCCESS</Button>
                <Button className="bg-gray-300">CANCEL</Button>
</div>

        </div>
    )
}

export default ProductCard