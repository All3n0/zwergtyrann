// 'use client'
// import { useEffect, useState } from 'react';

// const targetDate = new Date('2023-12-25'); // change to your anniversary date

// export default function Countdown() {
//   const [days, setDays] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       const diff = Math.floor((now.getTime() - targetDate.getTime()) / (1000 * 60 * 60 * 24));
//       setDays(diff);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     // <div className="absolute bottom-4 left-4 text-white text-sm z-10">
//     //   {days} days since our love began
//     // </div>
//   );
// }
