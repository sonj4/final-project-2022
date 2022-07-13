import CarouselFadeExample from '../../components/CarouselFadeExample';
import Slider from '../../components/Slider/Slider';

import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <CarouselFadeExample/>
      <Slider />
      <Slider />
    </div>
  )
}
