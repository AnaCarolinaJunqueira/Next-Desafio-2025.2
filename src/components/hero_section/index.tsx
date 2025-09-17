export default function HeroSection(){
    return(
        <div className="flex items-center justify-center bg-cover h-[550px] md:h-[650px] bg-center text-white padding-0" style={{backgroundImage: "url('/home_page/herobg.jpeg')"}}>
            <div className="z-10 text-center px-4 max-w-2xl md:max-w-5xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-7">Qualidade, proteção e confiança em cada carta</h1>
                <h2 className="text-lg font-light md:text-xl mb-20">Produtos bem cuidados, lacrados e protegidos - prontos para sua coleção ou seu deck competitivo. Enviamos cartas em português, inglês e japonês com total segurança.</h2>
            <div className="flex justify-center gap-20">
                <button className="px-6 py-3 text-xl bg-blue-magenta hover:bg-darker-blue-magenta rounded-lg font-semibold shadow-lg lg:hidden btn-zoom">Ver Produtos</button>
               <button className="hidden lg:inline-block px-6 py-3 text-2xl bg-blue-magenta hover:bg-darker-blue-magenta rounded-lg font-semibold shadow-lg btn-zoom">Yu-Gi-Oh!</button>
               <button className="hidden lg:inline-block px-6 py-3 text-2xl bg-blue-magenta hover:bg-darker-blue-magenta rounded-lg font-semibold shadow-lg btn-zoom">Pokémon</button>
               <button className="hidden lg:inline-block px-6 py-3 text-2xl bg-blue-magenta hover:bg-darker-blue-magenta rounded-lg font-semibold shadow-lg btn-zoom">Digimon</button>
               <button className="hidden lg:inline-block px-6 py-3 text-2xl bg-blue-magenta hover:bg-darker-blue-magenta rounded-lg font-semibold shadow-lg btn-zoom">Acessórios</button>
            </div>
            </div>
        </div>
    )
}