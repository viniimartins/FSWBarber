import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BarbershopDatailsPageProps {
    params: {
        id?: string;
    }
}

const BarbershopDatailsPage = async ({ params }: BarbershopDatailsPageProps) => {
    const session = await getServerSession(authOptions)

    if (!params.id) {
        return null
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
        include: {
            service: true
        }
    })

    if (!barbershop) {
        return null
    }

    return (
        <div>
            <BarbershopInfo barbershop={barbershop} />

            <div className="px-5 flex flex-col gap-4 py-6">
                {barbershop.service.map((service) => (
                    <ServiceItem barbershop={barbershop} key={service.id} service={service} isAuthenticated={!!session?.user} />
                ))}
            </div>

        </div>

    );
}

export default BarbershopDatailsPage;