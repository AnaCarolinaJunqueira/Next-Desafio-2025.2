type AboutUsCardProps = {
    title: string;
    description: string;
}

export default function AboutUsCard({title, description}: AboutUsCardProps){
    return(
        <div className="flex flex-col items-center gap-8 max-w-sm 2xl:max-w-md 3xl:max-w-lg p-8 transition-shadow duration-200 hover:shadow-2xl bg-opaque-blue h-60 btn-zoom">
            <h1 className="text-center text-2xl text-white font-semibold cursor-default">{title}</h1>
            <p className="text-center text-white text-xl font-light line-clamp-6 cursor-default">{description}</p>
        </div>
    )
}