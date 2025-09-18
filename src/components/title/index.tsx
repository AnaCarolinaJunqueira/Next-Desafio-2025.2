type TittleProps = {
    title: string;
}

export default function Title({title}: TittleProps) {
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold text-light-black leading-relaxed text-center">{title}</h1>
        </div>
    )
}