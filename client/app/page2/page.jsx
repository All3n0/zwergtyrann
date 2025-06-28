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
      
<div className="relative z-10 text-white text-left px-4 max-w-lg" 
     style={{
       backgroundColor: 'pink',
       padding: '30px',
       borderRadius: '15px',
       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
     }}>

  {/* Title with purple underline */}
  <h1 className="text-4xl font-bold mb-4 underline" style={{color:"purple"}}>DDA?!</h1>
<p className="text-base font-bold text-gray-600 italic">Drizzy Drake</p>
  {/* Lyrics with left alignment */}
  <div className="space-y-4 text-left">
    <p className="text-2xl font-bold ">I dedicate, I dedicate</p>
    <p className="text-xl font-bold">I dedicate, I dedicate, I dedicate</p>
    <p className="text-xl font-bold">I dedicate to you</p>
    <p className="text-xl font-bold">(I dedicate, I dedicate</p>
    <p className="text-xl font-bold">I dedicate, I dedicate, oh yeah</p>
    <p className="text-xl font-bold">I dedicate, I dedicate</p>
    <p className="text-xl font-bold">I dedicate, I dedicate to-)</p>
  </div>

  {/* Spotify footer */}
  <div className="flex items-center mt-4">
    <img 
      src="https://img.icons8.com/?size=50&id=11116&format=png&color=000000" 
      alt="Spotify" 
      className="w-5 h-5 mr-2"  
    />
    <span className="text-sm font-bold text-black">Spotify</span>
  </div>
</div>

      
    </PageWrapper>
  );
}
