import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

interface BarbershopDatailsPageProps {
    params: {
        id?: string;
    }
}

const BarbershopDatailsPage = async ({ params }: BarbershopDatailsPageProps) => {
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
                    <ServiceItem key={service.id} service={service} />
                ))}
            </div>

        </div>

    );
}

export default BarbershopDatailsPage;