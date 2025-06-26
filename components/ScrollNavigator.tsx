'use client'
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const pages = ['/page1', '/page2', '/page3', '/page4', '/page5'];

export default function ScrollNavigator() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let lastScrollTime = 0;
    const currentIndex = pages.indexOf(pathname);

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < 1000) return; // throttle
      lastScrollTime = now;

      if (e.deltaY > 0 && currentIndex < pages.length - 1) {
        router.push(pages[currentIndex + 1]);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        router.push(pages[currentIndex - 1]);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [pathname, router]);

  return null;
}
