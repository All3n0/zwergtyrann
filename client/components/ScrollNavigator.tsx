'use client';
import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const pages = ['/page1', '/page2', '/page3', '/page4', '/page5'];

export default function ScrollNavigator() {
  const pathname = usePathname();
  const router = useRouter();
  const touchStartY = useRef<number | null>(null);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    const currentIndex = pages.indexOf(pathname);

    const throttle = () => {
      const now = Date.now();
      if (now - lastScrollTime.current < 1000) return false;
      lastScrollTime.current = now;
      return true;
    };

    const handleWheel = (e: WheelEvent) => {
      if (!throttle()) return;

      if (e.deltaY > 0 && currentIndex < pages.length - 1) {
        router.push(pages[currentIndex + 1]);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        router.push(pages[currentIndex - 1]);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY.current - touchEndY;

      if (!throttle()) return;

      if (diffY > 50 && currentIndex < pages.length - 1) {
        // Swipe up
        router.push(pages[currentIndex + 1]);
      } else if (diffY < -50 && currentIndex > 0) {
        // Swipe down
        router.push(pages[currentIndex - 1]);
      }

      touchStartY.current = null;
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [pathname, router]);

  return null;
}
