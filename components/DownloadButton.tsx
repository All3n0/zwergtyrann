'use client'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

export default function DownloadMemoriesButton() {
  const downloadAll = async () => {
    const files = ['audio1.mp3', 'audio2.mp3', 'audio3.mp3', 'audio4.mp3', 'audio5.mp3']
    const zip = new JSZip()

    for (const file of files) {
      const response = await fetch(`/audio/${file}`)
      const blob = await response.blob()
      zip.file(file, blob)
    }

    const content = await zip.generateAsync({ type: 'blob' })
    saveAs(content, 'memories.zip')
  }

  return (
    <button
      onClick={downloadAll}
      className="button"
    >
      Download Memories
    </button>
  )
}
