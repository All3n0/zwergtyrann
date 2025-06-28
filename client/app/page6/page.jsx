'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AudioPlayer from '@/components/AudioPlayer'

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image7.jpg',
  '/images/image8.jpg',
  '/images/image9.jpg',
  '/images/image10.jpg',
  '/images/image11.jpg',
  '/images/image12.jpg',
  '/images/image13.jpg',
  '/images/image14.jpg',
]

// Duplicate more times to ensure continuous scrolling
const duplicateImages = [...images, ...images, ...images, ...images]

export default function MemoryPage() {
  const router = useRouter()

  // Add confetti after page load
  useEffect(() => {
    import('canvas-confetti').then((confetti) => {
      const duration = 5 * 1000
      const end = Date.now() + duration

      const frame = () => {
        confetti.default({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        })
        confetti.default({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      }

      frame()
    })
  }, [])

  const columns = 4
  const splitColumns = Array.from({ length: columns }, (_, i) =>
    duplicateImages.filter((_, index) => index % columns === i)
  )

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col">
      {/* Columns Container */}
      <div className="flex-1 flex flex-row w-full h-[calc(100vh-150px)] overflow-hidden">
        {splitColumns.map((colImages, i) => (
          <div
            key={i}
            className="w-1/4 h-full relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full flex flex-col gap-4 ${
              i % 2 === 0 ? 'animate-slide-down-a' : 'animate-slide-down-b'
            }`}>
              {colImages.map((src, j) => (
                <div key={j} className="w-full">
                  <img
                    src={src}
                    alt={`memory-${i}-${j}`}
                    className="rounded-lg shadow-lg w-full object-cover h-[200px]"
                  />
                </div>
              ))}
              {/* Duplicate the images to create seamless looping */}
              {colImages.map((src, j) => (
                <div key={`dup-${j}`} className="w-full">
                  <img
                    src={src}
                    alt={`memory-dup-${i}-${j}`}
                    className="rounded-lg shadow-lg w-full object-cover h-[200px]"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Audio Player - Positioned in bottom right corner */}
      <div className="absolute bottom-4 right-4 z-20">
        <AudioPlayer 
          src="./audio/audio6.mp3" startAt={45}
          autoPlay={true}
          loop={true}
          volume={0.5}
          showControls={true}
          className="text-white bg-black bg-opacity-50 rounded-full p-2"
        />
      </div>

      {/* Fixed Footer */}
      <div className="h-[150px] w-full flex flex-col items-center justify-center bg-pink-500 z-10 p-4"style={{backgroundColor: 'rgba(255, 0, 0, 0.5)'}}>
        <p className="text-3xl md:text-4xl font-bold mb-4 text-white">Jowi and Awall 💖</p>
        <button
          onClick={() => router.push('/')}
          className="button"
        >
          Go Home
        </button>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes slide-down-a {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes slide-down-b {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-slide-down-a {
          animation: slide-down-a 30s linear infinite;
        }
        .animate-slide-down-b {
          animation: slide-down-b 35s linear infinite;
        }
        /* Force landscape orientation */
        @media (orientation: portrait) {
          .flex-row {
            height: 50vh !important;
          }
        }
      `}</style>
    </div>
  )
}