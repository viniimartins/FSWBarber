"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {

    const { data, status } = useSession()


    const handleLogoutClick = () => signOut()

    const handleLoginClick = () => signIn('google')


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
                        <SheetHeader className="text-left border-b border-solid border-secondary p-5">
                            <SheetTitle>
                                Menu
                            </SheetTitle>
                        </SheetHeader>


                        {data?.user ? (
                            <div className="flex justify-between px-5 py-6 items-center">
                                <div className="flex items-center gap-3"  >
                                    <Avatar>
                                        <AvatarImage src={data.user?.image ?? ""} />
                                    </Avatar>

                                    <h2 className="font-bold">{data.user.name}</h2>
                                </div>


                                <Button variant="secondary" size="icon">
                                    <LogOutIcon onClick={handleLogoutClick} size={20} />
                                </Button>
                            </div>

                        ) : (
                            <div className="flex flex-col px-5 pt-6 pb-3 gap-3">
                                <div className="flex items-center gap-2">
                                    <UserIcon size={28} />
                                    <h2 className="font-bold">Olá, faça seu login!</h2>
                                </div>
                                <Button variant="secondary" className="w-full justify-start" onClick={handleLoginClick}>
                                    <LogInIcon className="mr-2" size={18} />
                                    Fazer Login
                                </Button>
                            </div>
                        )}

                        <div className="flex flex-col gap-3 px-5">
                            <Button variant="outline" className="justify-start" asChild>
                                <Link href="/">
                                    <HomeIcon size={18} className="mr-2" />
                                    Início
                                </Link>
                            </Button>

                            {data?.user && (
                                <Button variant="outline" className="justify-start" asChild>
                                    <Link href="/bookings">
                                        <CalendarIcon size={18} className="mr-2" />
                                        Agendamentos
                                    </Link>
                                </Button>
                            )}
                        </div>

                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
    );
}

export default Header;