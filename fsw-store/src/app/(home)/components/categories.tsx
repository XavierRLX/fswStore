import CategoryItem from "./category-item";
import { prismaClient } from "@/lib/prisma";

const Categories = async () => {
    const categories = await prismaClient.category.findMany({})
    return ( 
        <div className="grid grid-cols-2 gap-4 gap-y-2 gap-x-4 p-5">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
     );
};
 
export default Categories;