import { useEffect, useState } from 'react';

export function NormalScreen() {
  const [count, setCount] = useState(0);

  // LỖI 1: Vi phạm Rule of Hooks (Gọi hook có điều kiện)
  if (count > 100) {
    useEffect(() => {
      console.log('Count is too high!');
    }, [count]);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      // LỖI 2: Stale Closure - Biến count luôn mang giá trị khởi tạo là 0 
      // do không được đưa vào dependency array. Việc tăng bộ đếm sẽ bị kẹt ở 1.
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); // <-- Cố tình thiếu dependency `count`

  return (
    // LỖI 3: React warning vì dùng `class` thay vì `className`
    <div class="normal-screen-container">
      <h2>Màn hình Bình thường</h2>
      <p>Count: {count}</p>
      
      {/* LỖI 4: React warning vì dùng `onclick` thay vì `onClick` */}
      <button onclick={() => setCount(c => c + 5)}>Tăng đếm</button>
      
      <p>
        Màn hình này chứa các lỗi React điển hình (Stale closure, Rule of hooks, Syntax DOM).
      </p>
    </div>
  );
}
