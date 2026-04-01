import { useEffect, useState } from 'react';

export function LeakIntervalScreen() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fix: Lưu intervalId và trả về cleanup function để clearInterval khi unmount
    const intervalId = setInterval(() => {
      setCount(c => c + 1);
      console.log('LeakIntervalScreen: Interval đang chạy (đã được fix).');
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Leak 1: Quên xóa Interval</h2>
      <p>Count: {count}</p>
      <p>
        Interval này sẽ tiếp tục chạy và cập nhật state ngầm ngay cả khi bạn đã chuyển sang màn hình
        khác. Mở tab Console để xem!
      </p>
    </div>
  );
}
