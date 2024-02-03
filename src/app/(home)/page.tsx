import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale/pt-BR";
import Search from "./_components/search";
import BarberShopItem from "./_components/barbershop-item";
import BookingItem from "../_components/booking-item";

import { db } from "../_lib/prisma";

export default async function Home() {

    const barbershops = await db.barbershop.findMany({})

    return (
        <div>
            <Header />
            <div className="px-5 pt-5">
                <h1 className="text-xl font-bold">Olá, Miguel!</h1>
                <p className="capitalize text-sm">{format(new Date(), "EEEE',' dd 'de' MMMM", {
                    locale: ptBR
                })}</p>
            </div>

            <div className="px-5 mt-6">
                <Search />
            </div>

            <div className="px-5 mt-6">
                <h2 className="text-xs  mb-3 uppercase text-gray-400 font-bold">Agendamentos</h2>
                <BookingItem />
            </div>

            <div className="mt-6">
                <h2 className="text-xs px-5 mb-3 uppercase text-gray-400 font-bold">Recomendados</h2>

                <div className="flex px-5 gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                    {barbershops.map((barbershop) => (
                        <BarberShopItem key={barbershop.id} barbershop={barbershop} />
                    ))}
                </div>
            </div>


            <div className="mt-6 mb-[4.5rem]">
                <h2 className="text-xs px-5 mb-3 uppercase text-gray-400 font-bold">Populares</h2>

                <div className="flex px-5 gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                    {barbershops.map((barbershop) => (
                        <BarberShopItem key={barbershop.id} barbershop={barbershop} />
                    ))}
                </div>
            </div>
        </div>
    );
}
