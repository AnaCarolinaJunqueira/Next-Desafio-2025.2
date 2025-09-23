type TitlePageProps = {
    title: string
}

export default function TitlePage({title}: TitlePageProps){
    return(
        <div className="flex flex-col w-full py-15 gap-1">
            <h1 className="font-semibold text-3xl md:text-2xl px-8">{title}</h1>
            <div className="h-1 w-90 bg-linear-65 from-blue-for-gratient to-lighter-blue ml-8"></div>
        </div>
    )
}