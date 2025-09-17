export default function HeroSection(){
    return(
        <div className="flex items-center justify-center bg-cover h-[600px] bg-center text-white padding-0" style={{backgroundImage: "url('/home_page/herobg.jpeg')"}}>
            <h1>Qualidade, proteção e confiança em cada carta</h1>
            <h2 className="text-center">Produtos bem cuidados, lacrados e protegidos - prontos para sua coleção ou seu deck competitivo. Enviamos cartas em português, inglês e japonês com total segurança.</h2>
            <div >
                <button>Ver Produtos</button>
               <button className="hidden">Yu-Gi-Oh!</button>
               <button className="hidden">Pokémon</button>
               <button className="hidden">Digimon</button>
               <button className="hidden">Acessórios</button> 
            </div>
        </div>
    )
}