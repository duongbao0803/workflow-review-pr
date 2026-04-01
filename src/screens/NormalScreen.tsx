import { useEffect, useState } from 'react';

export function NormalScreen() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('NormalScreen unmounted: Đã xoá interval!');
    };
  }, []);

  return (
    <div className="normal-screen-container">
      <h2>Màn hình Bình thường</h2>
      <p>Count: {count}</p>
      
      <button onClick={() => setCount(c => c + 5)}>Tăng đếm</button>
      
      <p>
        Màn hình này sử dụng setInterval nhưng có hàm cleanup đúng chuẩn. Mở console để xem log khi chuyển màn hình.
      </p>
    </div>
  );
}
