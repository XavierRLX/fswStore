import ProductItem from "@/components/ui/product-tem";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
    products: Product[];
}

const ProductList = ({products} : ProductListProps) => {
    return (
        <div className="flex w-full gap-4 overflow-x-auto px-4 [&::-webkit-scrollbar]:hidden">
            {products.map(product => <ProductItem key={product.id} product={computeProductTotalPrice(product)}/>
            )}

        </div>
    );
}
 
export default ProductList;