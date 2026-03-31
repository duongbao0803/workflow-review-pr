import { useEffect, useState } from 'react';

export function LeakIntervalScreen() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Memory Leak: Không có hàm cleanup (clearInterval) được trả về
    setInterval(() => {
      setCount(c => c + 1);
      console.log('LeakIntervalScreen: Interval vẫn đang chạy ngầm... (Leak)');
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
