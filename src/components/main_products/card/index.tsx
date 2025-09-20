import Link from "next/link";
import Image from "next/image";

export default function MainProductsCard(){
    return(
        <Link href={'/'} className="group">
            <div className="flex group-hover:shadow-lg rounded-xl shadow-md p-4 bg-white transition flex-col items-center gap-2 w-72">
                {/*Imagem */}
                <div className="relative w-64 h-52">
                    <Image
                    src={'/home_page/placeholder/placeholder.jpg'}
                    alt="Placeholder"
                    fill
                    className="object-contain rounded-lg"
                    />
                </div>
                {/*Titulo*/}
                <h2 className="text-center font-semibold text-light-black text-sm">Yu-Gi-Oh! Coleção Lendária Edição do 25° aniversário
                </h2>

                {/*Preço*/}
                <div className="flex items-center  justify-center w-full">
                    <div className="w-10"></div>
                    <div className="flex-1 flex justify-center">
                        <span className="text-green-600  text-lg">R$199,90
                        </span>
                    </div>

                    {/*Bandeira*/}
                    <div className="w-10 flex justify-end">
                        <Image
                        src={'/flags/brazil.png'}
                        alt="Bandeira do país do produto"
                        width={24}
                        height={18}
                        />
                    </div>
                </div>
            </div>
            
        </Link>
    )
}