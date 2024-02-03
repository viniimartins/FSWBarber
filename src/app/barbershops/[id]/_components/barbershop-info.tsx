"use client"

import SideMenu from "@/app/_components/side-menu";
import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";



interface BarbershopDatailsPageProps {
    barbershop: Barbershop
}
const BarbershopInfo = ({ barbershop }: BarbershopDatailsPageProps) => {
    const router = useRouter()

    const handleBackClick = () => {
        router.back()
    }

    return (
        <div>
            <div className="h-[250px] w-full relative">
                <Button onClick={handleBackClick} variant="outline" size="icon" className="z-40 absolute top-4 left-4">
                    <ChevronLeftIcon />
                </Button>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="z-40 absolute top-4 right-4">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>


                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>
                </Sheet>

                <Image
                    src={barbershop.imageUrl}
                    fill
                    alt={barbershop.name}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{
                        objectFit: "cover"
                    }}
                    className="opacity-75"
                    priority
                />
            </div>

            <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
                <h1 className="text-xl font-bold">{barbershop.name}</h1>
                <div className="flex itens-center gap-1 mt-2">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-sm">{barbershop.address}</p>
                </div>
                <div className="flex itens-center gap-1 mt-2">
                    <StarIcon className="text-primary" size={18} />
                    <p className="text-sm">5,0 (899 avalicacoes)</p>
                </div>
            </div>
        </div>

    );
}

export default BarbershopInfo;