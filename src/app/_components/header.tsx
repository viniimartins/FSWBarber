"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { MenuIcon, } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";
import Link from "next/link";

const Header = () => {
    return (
      <header>
          <Card className="rounded-none">
            <CardContent className="p-5 flex flex-row justify-between items-center ">
                <div className="relative w-[120px] h-[18px]">
                    <Link href="/">
                        <Image src="/logo.png" alt="FSW Barber" priority fill sizes="(max-width: 768px) 100vw, 33vw" />
                    </Link>
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
      </header>
    );
}

export default Header;