import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <Card className="rounded-none">
            <CardContent className="p-5 flex flex-row justify-between items-center ">
                <div className="relative w-[120px] h-[18px]">
                    <Image src="/logo.png" alt="FSW Barber" priority fill sizes="(max-width: 768px) 100vw, 33vw"/>
                </div>
                <Button variant="outline" size="icon" className="h-8 w-8">
                    <MenuIcon size={16} />
                </Button>
            </CardContent>
        </Card>
    );
}

export default Header;