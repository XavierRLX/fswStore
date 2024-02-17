import { useSession } from "next-auth/react";
import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import { Category } from "@prisma/client";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promobenner";
import Footer from "@/components/ui/footer";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouse = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  // const {data} = useSession();

  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner 
      src="/bannerHome1.png"
      alt="bannerHomeDiscont" />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertass !</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
      src="/bannerHome2.png"
      alt="bannerHomeDiscontMouse" />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
      
      <PromoBanner
    src="/bannerHome3.png"
    alt="bannerHomeDispcontHeadFone" />

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouse} />
      </div>  
      
    </div>

  
    
  );
}
