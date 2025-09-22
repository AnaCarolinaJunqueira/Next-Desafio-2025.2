import {Search as SearchIcon} from "lucide-react"

type SearchProps = {
    count: number
}

export default function Search({count}: SearchProps){
    return(
        <form className="flex w-full lg:w-10/12"
        id="search"
        autoComplete="off"
        >
            <div className="flex flex-col w-11/12 gap-2 my-10">
                <div className="relative flex items-center w-full">
                    <SearchIcon className="w-5 h-5 absolute text-blue-magenta left-4"/>
                    <input 
                    id="search-input"
                    name="search-input-name"
                    type="text"
                     className="w-11/12 rounded=xl px-16 py-3 text-blue-magenta border border-blue-magenta transition-all duration-300 rounded-2xl shadow-xl "
                     />
                </div>
                <span className="text-light-black">Total de {count} publicações encontradas.</span>
            </div>
        </form>
    )
}