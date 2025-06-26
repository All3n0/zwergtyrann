'use client'
import PageWrapper from '@/components/PageWrapper';
import AudioPlayer from '@/components/AudioPlayer';
import NavigationDots from '@/components/NavigationDots';

import ScrollNavigator from '../../components/ScrollNavigator';
import { color } from 'framer-motion';
export default function Page2() {
  return (
    <PageWrapper>
      <ScrollNavigator/>
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover z-0">
        <source src="/animations/vid2.mp4" type="video/mp4" />
      </video>
      <AudioPlayer src="/audio/audio2.mp3" startAt={200} />

      <NavigationDots />
      
      <div className="relative z-10 text-white text-center px-4 max-w-lg">
        <h1 className="text-4xl font-bold mb-4 underline" style={{"color":"white"}}>DDA?!</h1>
<div
  className="relative z-10 px-6 max-w-6xl font-bold text-start leading-snug"
  style={{
    fontFamily: '"Roboto Condensed", sans-serif',
    color: 'white',
    fontSize: '32px', // You can increase to 72px or 80px if needed
    lineHeight: '0.8',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }}
>
  <p className="mb-4">I dedicate, I dedicate</p>
  <p className="mb-4">I dedicate, I dedicate, I dedicate</p>
  <p className="mb-4">I dedicate to you</p>
  <p className="mb-4">(I dedicate, I dedicate</p>
  <p className="mb-4">I dedicate, I dedicate, oh yeah</p>
  <p className="mb-4">I dedicate, I dedicate</p>
  <p>I dedicate, I dedicate to-)</p>
</div>

      </div>
    </PageWrapper>
  );
}
