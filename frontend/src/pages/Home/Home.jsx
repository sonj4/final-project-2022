import CarouselFadeExample from '../../components/CarouselFadeExample';
import Slider from '../../components/Slider/Slider';

import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <CarouselFadeExample />
      <Slider key={1}/>
      <Slider key={2}/>
    </div>
  )
}
