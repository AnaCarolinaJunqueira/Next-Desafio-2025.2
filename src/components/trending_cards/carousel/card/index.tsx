import Image from "next/image"
import Link from "next/link"

type TrendingCardsCarouselCardProps = {
    title: string;
    price: string;
    src: string;
}

export default function TrendingCardsCarouselCard({title, price, src}: TrendingCardsCarouselCardProps){
    return(
        <Link href={'/'} className="group">
            <div className="flex group-hover:shadow-xl rounded-xl shadow-md p-10 bg-white transition flex-col items-center gap-2 w-85">
                {/*Imagem */}
                <div className="relative w-82 h-80">
                    <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-contain rounded-lg"
                    />
                </div>
                {/*Titulo*/}
                <h2 className="text-center text-light-black text-lg">{title}
                </h2>

                {/*Preço*/}
                <div className="flex items-center  justify-center w-full">
                    <div className="w-10"></div>
                    <div className="flex-1 flex justify-center">
                        <span className="text-green-600  text-lg">{price}
                        </span>
                    </div>

                    {/*Bandeira*/}
                    <div className="w-10 flex justify-end">
                        <Image
                        src={'/flags/usa.png'}
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