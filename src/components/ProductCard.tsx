import type { IProduct } from "../interfaces"
import { txtSlicer } from "../utils/functions"
import Image from "./Image"
import Button from "./ui/Button"
import CircleColor from "./ui/CircleColor"

interface IProps {
    product: IProduct;
    setProductToEdit: (product: IProduct) => void;
    openEditModal: () => void;
    openConfirmModal:() => void;
    idx: number;
    setProductToEditIdx: (value: number) => void

}

const ProductCard = ({ product, setProductToEdit, openEditModal,openConfirmModal, idx, setProductToEditIdx }: IProps) => {
    const { title, description, imageURL, price, category, colors } = product;
    /* ___________RENDER___________*/
    const renderProductColors = colors.map(color =>
        <CircleColor key={color} color={color} />
    )
    /* ___________HANDLER___________*/
    const onEdit = () => {
        setProductToEdit(product);
        openEditModal();
        setProductToEditIdx(idx)
    }
    const onRemove = () => {
        setProductToEdit(product);
        openConfirmModal();

    }
    return (
        <div className=" border-gray-300 max-w-sm w-auto min-w-sm md:min-w-0 md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
            <Image className="rounded-md h-52 w-full lg:object-cover" imageURL={imageURL} alt="product image" />
            <h3 className="text-md font-semibold">{txtSlicer(title, 20)}</h3>
            <p className="text-sm text-gray-500 wrap-break-words">{txtSlicer(description)}</p>

            {/* <div className="flex items-center flex-wrap space-x-1">
                {renderProductColors}
            </div> */}

  <div className="flex items-center flex-wrap space-x-1">
        {!colors.length ? <p className="min-h-[20px]">Not available colors!</p> : renderProductColors}
      </div>
            <div className="flex items-center justify-between">
                <span className="text-lg text-indigo-600 font-semibold"> $ {price}</span>
                <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold">{category.name}</span>
                    <Image className="w-10 h-10 rounded-full object-cover" imageURL={category.imageURL} alt={category.name} />
                </div>
            </div>
            <div className="flex items-center justify-between space-x-2">
                <Button className="bg-indigo-700 hover:bg-indigo-800 text-sm" onClick={onEdit}>EDIT</Button>
                <Button className="bg-[#c2344d] hover:bg-red-800 text-sm" onClick={onRemove}>DELETE</Button>

            </div>

        </div>
    )
}

export default ProductCard