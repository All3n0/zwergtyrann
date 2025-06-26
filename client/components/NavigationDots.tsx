'use client'
import { usePathname, useRouter } from 'next/navigation';

const pages = ['/page1', '/page2', '/page3', '/page4', '/page5'];

export default function NavigationDots() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {pages.map((path, index) => (
        <div
          key={path}
          onClick={() => router.push(path)}
          className={`w-4 h-4 rounded-full cursor-pointer ${
            pathname === path ? 'bg-white' : 'bg-white/40'
          }`}
        />
      ))}
    </div>
  );
}
