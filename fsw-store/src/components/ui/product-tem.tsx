import { ProductWithTotalPrice } from "@/helpers/product";
import {
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowBigDownIcon,
  ArrowDownIcon,
  Badge,
} from "lucide-react";
import Image from "next/image";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="max-w[170px] flex flex-col gap-4">
      <div className=" relative h-[170px] w-[156]  items-center justify-center rounded-lg bg-accent ">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="max-h[80%] h-[90px] max-w-[70%]"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon size={14}/>
            {product.discountPercentage}
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className=" w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
      </div>

      <div className="flex items-center gap-2 w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
        {product.discountPercentage > 0 ? (
          <>
            <p className="font-semibold w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
              R${product.totalPrice.toFixed(2)}
            </p>

            <p className="text-xs line-through opacity-75 ">
              R${Number(product.basePrice).toFixed(2)}
            </p>
          </>
        ) : (
          <p className="font-semibold w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            R${product.totalPrice.toFixed(2)}
          </p>
        )}
        
      </div>
    </div>
  );
};

export default ProductItem;
