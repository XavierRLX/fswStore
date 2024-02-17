import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon, HeadphonesIcon } from "lucide-react";

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
    const categoryIcon = {
        keyboards : <KeyboardIcon size={20}/>,
        monitors : <MonitorIcon size={20}/>,
        headphones : <HeadphonesIcon size={20}/>,
        mousepads : <SquareIcon size={20}/>,
        speakers : <SpeakerIcon size={20}/>,
        mouses: <MouseIcon size={20}/>
    }
    return (
        <Badge className="py-3 flex justify-center items-center gap-2 rounded-lg" variant="outline">
            {categoryIcon[category.slug as keyof typeof categoryIcon]}
            <span className="text-xs font-bold ">{category.name}</span>
        </Badge>
    );
}
 
export default CategoryItem;