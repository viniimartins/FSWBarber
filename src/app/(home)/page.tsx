import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale/pt-BR";

export default function Home() {
    return (
        <div>
            <Header />


            <div className="px-5 pt-5">
                <h1 className="text-xl font-bold">Olá, Miguel!</h1>
                <p className="capitalize text-sm">{format(new Date(), "EEEE',' dd 'de' MMMM", {
                    locale: ptBR
                })}</p>
            </div>
        </div>
    );
}
