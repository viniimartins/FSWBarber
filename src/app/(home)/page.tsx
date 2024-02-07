import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale/pt-BR";
import Search from "./_components/search";
import BarberShopItem from "./_components/barbershop-item";
import { db } from "../_lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import BookingItem from "../_components/booking-item";

export default async function Home() {
    const session = await getServerSession(authOptions)

    const [barbershops, confirmedBookings] = await Promise.all([
        db.barbershop.findMany({}),
        session?.user ? await db.booking.findMany({
            where: {
                userId: (session.user as any).id,
                date: {
                    gte: new Date()
                }
            },
            include: {
                service: true,
                barbershop: true,
            },

        }) : Promise.resolve([])
    ])

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

            <div className="mt-6">
                <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold pl-5">Agendamentos</h2>

                <div className="px-5 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                    {confirmedBookings.map(booking => <BookingItem key={booking.id} booking={booking} />)}
                </div>
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
