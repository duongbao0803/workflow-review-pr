import { useEffect } from 'react';
import { leakedArray } from '../utils/leakHelpers';

export function LeakGlobalArrayScreen() {
  useEffect(() => {
    const timer = setInterval(() => {
      // Memory Leak: Liên tục nhồi dữ liệu khổng lồ vào một mảng Global không bị Garbage Collected
      leakedArray.push(new Array(100000).fill('leak'));
      console.log(
        `LeakGlobalArrayScreen: Đã thêm dữ liệu rác. Kích thước mảng: ${leakedArray.length}`,
      );
    }, 500);

    return () => {
      clearInterval(timer);
      // Fix: Dọn dẹp mảng global khi unmount để tránh rò rỉ bộ nhớ
      leakedArray.splice(0, leakedArray.length);
      console.log('LeakGlobalArrayScreen: Đã dọn dẹp mảng global khi unmount.');
    };
  }, []);

  return (
    <div>
      <h2>Leak 3: Khối dữ liệu "mồ côi" (Global Array)</h2>
      <p>
        Màn hình này liên tục rải mảng lớn vào một biến Global. Vì biến này tồn tại suốt vòng đời
        ứng dụng, Garbage Collector không thể quét dọn bộ nhớ này.
      </p>
    </div>
  );
}
