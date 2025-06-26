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


      <div className="relative z-10 text-white text-center px-4 max-w-lg">
        <h1 className="text-4xl font-bold mb-4 underline">Always-Daniel Caesar</h1>
<div className="relative z-10 px-6 max-w-6xl font-bold text-start leading-snug"
  style={{
    fontFamily: '"Roboto Condensed", sans-serif',
    color: 'white',
    fontSize: '32px', // You can increase to 72px or 80px if needed
    lineHeight: '0.8',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }}>

  <p className="mb-4">Baby, baby, there will always be</p>
  <p className="mb-4">A space for you and me, right where you left it</p>
  <p className="mb-4">And just maybe, enough time will pass</p>
  <p className="mb-4">We'll look back and laugh, just don't forget it</p>
  <p className="mb-4">And maybe I'm wrong for writing this song</p>
  <p className="mb-4">Losing my head over you</p>
  </div>
        </div>
    </PageWrapper>
  );
}
