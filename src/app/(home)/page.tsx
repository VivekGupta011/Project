// import { Header } from '@/components/layouts';
import { Intropage } from '@/components/intro';
import { Who } from '@/components/whopage';
import { Card } from '@/components/card';
import { Vinkallcard } from '@/components/Vinkallcard';
import Cardinfo from '@/components/cardinfo/Cardinfo';
import { How } from '@/components/howwork';
import { Question } from '@/components/question';
import { FooterCompo } from '@/components/Footer';
import { Testimonial } from '@/components/Testimonial';
import { Cardslider } from '@/components/cardslider';
import { CardSlidersingal } from '@/components/Singlecard';
import { Navigation } from '@/components/Navbar';
import { Compare } from '@/components/compare';

export default function Home() {
  return (
    <main className="w-full h-full min-h-screen ">
      <Navigation />
      <Intropage />
      <Testimonial />
      <Vinkallcard />
      <Who />
      <Cardslider />
      <How />
      <Card />
      <Cardinfo />
      <Compare />
      <Question />
      <FooterCompo />
    </main>
  );
}
