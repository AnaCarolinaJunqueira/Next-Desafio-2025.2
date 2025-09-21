import Title from "@/src/components/title";
import EmblaCarousel from "./carousel";
import {EmblaOptionsType} from 'embla-carousel';

const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    containScroll: 'keepSnaps'
};

const SLIDES_DATA = [
    {title: 'Amatsu Okami of The Divine Peaks', price: '$3.348,62', src: '/home_page/placeholder/placeholder_card.png'},
    {title: 'Amatsu Okami of The Divine Peaks', price: '$3.348,62', src: '/home_page/placeholder/placeholder_card.png'},
    {title: 'Amatsu Okami of The Divine Peaks', price: '$3.348,62', src: '/home_page/placeholder/placeholder_card.png'},
    {title: 'Amatsu Okami of The Divine Peaks', price: '$3.348,62', src: '/home_page/placeholder/placeholder_card.png'}
];

export default function TrendingCards(){
    return(
        <div className="w-full space-y-12">
            {/*Titulo da Seção*/}
            <div>
                <Title title="Confira os cards em alta"/>
            </div>
            <div>
                <EmblaCarousel slides={SLIDES_DATA} options={OPTIONS}/>
            </div>
        </div>
    )
}