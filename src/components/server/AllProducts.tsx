import { products } from "../../../products/products"

interface AllProductsProps {
    PRODUCTSPERPAGE: number
    page: number
}

export default function AllProducts({ PRODUCTSPERPAGE, page }: AllProductsProps) {
    return (
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 sm:w-3/4 p-2">
            {products && products.slice(PRODUCTSPERPAGE * (page - 1), PRODUCTSPERPAGE * (page)).map(product => (
                <div className="flex flex-col h-full" key={product.id}>
                    <div className="w-full flex justify-between items-center">
                        <h2 className="sm:text-2xl text-lg font-bold">{product.name}</h2>
                        <p>{product.date}</p>
                    </div>
                    <div className="relative h-[50dvh] w-full hover:opacity-90 overflow-hidden">
                        <a href={product.dtrpg}>
                            <img src={product.img.src} alt={product.name} className="rounded-lg hover:scale-110 transition-all duration-300" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}
