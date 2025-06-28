'use client'
import PageWrapper from '@/components/PageWrapper';
import AudioPlayer from '@/components/AudioPlayer';
import NavigationDots from '@/components/NavigationDots';
import { useRouter } from 'next/navigation';
import ScrollNavigator from '../../components/ScrollNavigator';

export default function Page5() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/page6');
  };

  return (
    <PageWrapper>
      <ScrollNavigator/>
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover z-0">
        <source src="/animations/vid5.mp4" type="video/mp4" />
      </video>
      <AudioPlayer src="/audio/audio5.mp3" startAt={7}/>

      <NavigationDots />

      <div className="relative z-10 text-white text-center px-4 max-w-lg">
        <h1 className="text-5xl font-extrabold mb-6">May I be your boyfriend?💍</h1>
        <p className="text-xl mb-6">This journey has led to one question — one moment, forever yours.</p>
        <button 
          onClick={handleButtonClick}
          className="button"
        >
          Of course I will ❤️
        </button>
      </div>
    </PageWrapper>
  );
}