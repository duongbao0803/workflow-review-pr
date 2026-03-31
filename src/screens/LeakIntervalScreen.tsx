import { useEffect, useState } from 'react';

export function LeakIntervalScreen() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // FIX: SetInterval giờ đã có hàm cleanup được gọi khi unmount
    const timer = setInterval(() => {
      setCount(c => c + 1);
      console.log('LeakIntervalScreen: Interval đang chạy ngầm...');
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('LeakIntervalScreen: Đã xóa Interval (FIXED)');
    };
  }, []);

  return (
    <div>
      <h2>Đã Fix (Leak 1): Quản lý Interval</h2>
      <p>Count: {count}</p>
      <p>
        Interval này đã được thêm logic dọn dẹp. Ngay khi bạn chuyển sang màn hình khác,
        Interval sẽ bị huỷ bỏ để tránh lặp vô tận và rò rỉ bộ nhớ.
      </p>
    </div>
  );
}
