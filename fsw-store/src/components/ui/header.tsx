"use client"
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";

const Headerr = () => {
    const {status, data} = useSession();

    const handleLoginClick = async ()=> {
        await signIn();
    }

    const handleLogOffClick = async()=> {
        await signOut();
    }
    return (
      <Card className="flex items-center justify-between p-[1.87rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">
              <h1>Menu</h1>
            </SheetHeader>

            {status === "authenticated" && data?.user && (

                <div className="flex flex-col">
                    <div className="flex items-center gap-2 py-4">
                        <Avatar className="w-9 ">
                            <AvatarFallback>
                                {data.user.name?.[0].toUpperCase()}
                            </AvatarFallback>
                            {data.user.image && (
                                <AvatarImage className="rounded-full font-medium" src={data.user.image}/>
                            )}
                            </Avatar>
                            <p>{data.user.name}</p>
                    </div>
                    <Separator/>
                </div>
              )}

            <div className="mt-4 flex flex-col gap-3">
              {status === "unauthenticated" && (
                <Button
                  onClick={handleLoginClick}
                  variant={"outline"}
                  className="w-full justify-start gap-2"
                >
                  <LogInIcon />
                  <p>Login</p>
                </Button>
              )}
              
              {status === "authenticated" && (
                <Button
                  onClick={handleLogOffClick}
                  variant={"outline"}
                  className="w-full justify-start gap-2"
                >
                  <LogOutIcon />
                  <p>Exit</p>
                </Button>
              )}
              
              <Button
                variant={"outline"}
                className="w-full justify-start gap-2"
              >
                <HomeIcon size={16} />
                <p>inicio</p>
              </Button>
              <Button
                variant={"outline"}
                className="w-full justify-start gap-2"
              >
                <PercentIcon size={16} />
                <p>Ofertas</p>
              </Button>
              <Button
                variant={"outline"}
                className="w-full justify-start gap-2"
              >
                <ListOrderedIcon size={16} />
                <p>Catalogo</p>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-semibold">
          <span className="text-primary">FSW</span> Store
        </h1>
        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </Card>
    );
}
 
export default Headerr;