import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
    return ( 
        <Card className="rounded-none">
            <CardContent className="p-5 flex flex-row justify-between items-center ">
                <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />
                <Button variant="outline" size="icon" className="h-8 w-8">
                    <MenuIcon size={16}/>
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;