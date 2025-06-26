'use client'
import PageWrapper from '@/components/PageWrapper';
import AudioPlayer from '@/components/AudioPlayer';
import NavigationDots from '@/components/NavigationDots';
// import Countdown from '@/components/Countdown';
import ScrollNavigator from '@/components/ScrollNavigator';
export default function Page1() {
  return (
    <PageWrapper>
      <ScrollNavigator/>
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover z-0">
        <source src="/animations/vid1.mp4" type="video/mp4" />
      </video>
      <AudioPlayer src="/audio/audio1.mp3" startAt={28}/>

      <NavigationDots />


      <div className="relative z-10 text-white text-center px-4 max-w-lg">
        <h1 className="text-4xl font-bold underline mb-4">DIE FOR YOU</h1>
 <div
  className="relative z-10 text-white px-6 max-w-3xl font-bold text-start leading-relaxed"
  style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
>
  <p className="text-2xl mb-3">I'm findin' ways to articulate the feelin' I'm goin' through</p>
  <p className="text-2xl mb-3">I just can't say I don't love you (Yeah)</p>
  <p className="text-2xl mb-3">Cause I love you, yeah</p>
  <p className="text-2xl mb-3">It's hard for me to communicate the thoughts that I hold</p>
  <p className="text-2xl mb-3">But tonight, I'm gon' let you know</p>
  <p className="text-2xl mb-3">Let me tell the truth</p>
  <p className="text-2xl">Baby, let me tell the truth, yeah</p>
</div>


      </div>
    </PageWrapper>
  );
}
