import Image from "next/image";

type ReleasesCardProps = {
    title: string;
    description: string;
    src: string;
}

export default function ReleasesCard({title, description, src}: ReleasesCardProps){
    return(
        <div className="flex flex-col items-center justify-center gap-4 max-w-sm 2xl:max-w-md 3xl:max-w-lg p-3 transition-shadow duration-200 rounded-md hover:shadow-2xl bg-white">
            {/*Imagem */}
            <div className="relative w-[350px] h-[200px] rounded-md">
                <Image
                    src={src}
                    alt={title}
                    fill
                className="object-cover rounded-md"
            />
            </div>
            {/*Titulo e descrição */}
            <h1 className="text-center text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-light-black cursor-default">{title}</h1>
            <p className="text-center text-light-black text-light cursor-default">{description}</p>
        </div>
    )
}