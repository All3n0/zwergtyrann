'use client'
import PageWrapper from '@/components/PageWrapper';
import AudioPlayer from '@/components/AudioPlayer';
import NavigationDots from '@/components/NavigationDots';

import ScrollNavigator from '@/components/ScrollNavigator';
export default function Page4() {
  return (
    <PageWrapper>
      <ScrollNavigator/>
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover z-0">
        <source src="/animations/vid4.mp4" type="video/mp4" />
      </video>
      <AudioPlayer src="/audio/audio4.mp3" startAt={14} />

      <NavigationDots />

<div className="relative z-10 max-w-md mx-auto bg-white rounded-md p-6 shadow-lg"
  style={{
    fontFamily: '"Gotham", sans-serif',
    backgroundColor: 'pink',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  }}>

  {/* Title section */}
  <div className="mb-5 text-left">
    <h1 className="text-2xl font-black tracking-tight">Always</h1>
    <p className="text-base font-bold text-gray-600 italic">Daniel Caesar</p>
  </div>

  {/* Lyrics - thicker font and proper padding */}
  <div className="space-y-3 text-left pl-1">
    <p className="text-lg font-black text-gray-800 ">Baby, baby, there will always be</p>
    <p className="text-lg font-black text-gray-800">A space for you and me, right where you left it</p>
    <p className="text-lg font-black text-gray-800">And just maybe, enough time will pass</p>
    <p className="text-lg font-black text-gray-800">We'll look back and laugh, just don't forget it</p>
    <p className="text-lg font-black text-gray-800">And maybe I'm wrong for writing this song</p>
    <p className="text-lg font-black text-gray-800">Losing my head over you</p>
  </div>

  {/* Spotify footer - perfectly sized icon */}
  <div className="flex items-center mt-5 pt-4">
    <img 
      src="https://img.icons8.com/?size=50&id=11116&format=png&color=000000" 
      alt="Spotify" 
      className="w-2 h-3 mr-2" 
    />
    <span className="text-xs font-bold text-gray-500">Spotify</span>
  </div>
</div>

        
    </PageWrapper>
  );
}
