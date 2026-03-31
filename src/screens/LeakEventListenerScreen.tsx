import { useEffect, useState } from 'react';

export function LeakEventListenerScreen() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      console.log('LeakEventListenerScreen: Đang tracking chuột...');
    };

    // FIX: Thêm event listener vào window và gỡ ra khi unmount
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      console.log('LeakEventListenerScreen: Đã xoá bỏ tracking chuột (FIXED)');
    };
  }, []);

  return (
    <div>
      <h2>Đã Fix (Leak 2): Quản lý Event Listener</h2>
      <p>
        Tọa độ chuột X: {coords.x}, Y: {coords.y}
      </p>
      <p>
        Event listener đã được gán vào object "window" nhưng sẽ được dọn dẹp (removeEventListener) ngay 
        khi bạn rời khỏi màn hình này, giúp giải phóng bộ nhớ và tránh xử lý thừa thãi.
      </p>
    </div>
  );
}
