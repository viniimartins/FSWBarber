"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { MenuIcon,  } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent,  SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";

const Header = () => {
    return (
        <Card className="rounded-none">
            <CardContent className="p-5 flex flex-row justify-between items-center ">
                <div className="relative w-[120px] h-[18px]">
                    <Image src="/logo.png" alt="FSW Barber" priority fill sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" >
                            <MenuIcon size={16} />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
    );
}

export default Header;