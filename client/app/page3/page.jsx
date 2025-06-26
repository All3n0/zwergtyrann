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


      <div className="relative z-10 text-white text-center px-4 max-w-lg">
        <h1 className="text-4xl font-bold mb-4 backdrop-filter underline backdrop-blur-sm"style={{"color":"purple"}}backgroundColor={{color:"rgba(0, 0, 0, 0.5)"}}>Hey Daisy</h1>
 <div className="relative z-10 px-6 max-w-6xl font-bold text-start leading-snug"
  style={{
    fontFamily: '"Roboto Condensed", sans-serif',
    color: 'white',
    fontSize: '32px', // You can increase to 72px or 80px if needed
    lineHeight: '0.8',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }}>

  <p className="mb-4">Out of Body</p>
  <p className="mb-4">That's just how I feel when I'm around you shawty</p>
  <p className="mb-4">Last Night we didn't say it, but girl we both thought it</p>
  <p className="mb-4">Why second guess? I should have stayed</p>
  <p className="mb-4">You say the word I'm on my way</p>
  <p className="mb-4">This shit feels like teenage fever</p>
  </div>
</div>      
    </PageWrapper>
  );
}
