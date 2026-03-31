import { useEffect, useState } from 'react';

export function NormalScreen() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Component này dọn dẹp (cleanup) interval khi unmount -> KHÔNG LEAK
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('NormalScreen unmounted: Đã xoá interval!');
    };
  }, []);

  return (
    <div>
      <h2>Màn hình Bình thường (Không Leak)</h2>
      <p>Count: {count}</p>
      <p>
        Màn hình này sử dụng setInterval nhưng có hàm cleanup đúng chuẩn. Mở console để xem log khi
        chuyển màn hình.
      </p>
    </div>
  );
}
