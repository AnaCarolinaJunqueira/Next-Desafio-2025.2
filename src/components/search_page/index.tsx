import Link from "next/link";
import Search from "./search";

export default function SearchPage(){
    const count = 0;
    return(
        <div className="w-full">
            <Search count={count}/>
            {count != 0 ? (
                <div className="w-full flex flex-col">
                    <span className="text-2xl font-extrabold text-light-black">
                        Nenhuma publicação encontrada.
                    </span>
                    <span className="text-xl text-light-black">
                        Tente procurar por outra coisa, ou explore <Link href={'/posts'}>publicações</Link>
                    </span>
                </div>
            ): (
            <div className="w-full flex flex-col gap-12">
            </div>
                )}
        </div>
    )
}