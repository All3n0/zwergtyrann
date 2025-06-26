'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  src: string
  startAt?: number
}

export default function AudioPlayer({ src, startAt = 0 }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)

  useEffect(() => {
    // Stop any existing audio playing globally
    const audios = document.querySelectorAll('audio')
    audios.forEach((a) => {
      if (!a.paused) a.pause()
    })

    const audio = new Audio(src)
    audioRef.current = audio
    audio.loop = true

    const playAudio = async () => {
      try {
        audio.currentTime = startAt
        await audio.play()
        setAutoplayBlocked(false)
      } catch (err) {
        setAutoplayBlocked(true)
      }
    }

    playAudio()

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [src, startAt])

  return (
    <>
      {autoplayBlocked && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/80 text-white px-6 py-3 rounded-full text-sm"
          onClick={() => {
            audioRef.current?.play()
            setAutoplayBlocked(false)
          }}
        >
          🔊 Tap to start the music
        </div>
      )}
    </>
  )
}
