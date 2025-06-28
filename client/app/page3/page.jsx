'use client'
import PageWrapper from '@/components/PageWrapper';
import AudioPlayer from '@/components/AudioPlayer';
import NavigationDots from '@/components/NavigationDots';

import ScrollNavigator from '@/components/ScrollNavigator';
export default function Page3() {
  return (
    <PageWrapper>
      <ScrollNavigator/>
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover z-0">
        <source src="/animations/vid3.mp4" type="video/mp4" />
      </video>
      <AudioPlayer src="/audio/audio3.mp3" startAt={98} />
      
      <NavigationDots />


<div className="relative z-10 text-white text-left px-4 max-w-lg" 
     style={{
       backgroundColor: 'pink',
       padding: '30px',
       borderRadius: '15px',
       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
     }}>

  {/* Title - kept your exact styling */}
  <h1 className="text-4xl font-bold mb-4 underline" style={{color:"purple"}}>Hey Daisy</h1>
  <p className="text-base font-bold text-gray-600 italic">Drizzy Drake</p>

  {/* Lyrics - left-aligned with your exact text */}
  <div className="space-y-4 text-left">
    <p className="text-2xl font-bold ">Out of Body</p>
    <p className="text-xl font-bold">That's just how I feel when I'm around you shawty</p>
    <p className="text-xl font-bold">Last Night we didn't say it, but girl we both thought it</p>
    <p className="text-xl font-bold">Why second guess? I should have stayed</p>
    <p className="text-xl font-bold">You say the word I'm on my way</p>
    <p className="text-xl font-bold">This shit feels like teenage fever</p>
  </div>

  {/* Spotify icon - slightly larger as requested */}
  <div className="flex items-center mt-4">
    <img 
      src="https://img.icons8.com/?size=50&id=11116&format=png&color=000000" 
      alt="Spotify" 
      className="w-5 h-5 mr-2"  
    />
    <span className="text-sm font-bold">Spotify</span>
  </div>
</div>
    </PageWrapper>
  );
}
