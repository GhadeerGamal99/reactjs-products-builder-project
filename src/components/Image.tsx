interface IProps {
    className: string;
    alt: string;
    imageURL: string;
}
const Image = ({ imageURL, alt, className }: IProps) => {
    return (
        <img className={className} src={imageURL} alt={alt} />
    )
}

export default Image