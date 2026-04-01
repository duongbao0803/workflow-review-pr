import { useEffect, useState } from 'react';

export function LeakEventListenerScreen() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      console.log('LeakEventListenerScreen: Đang tracking chuột... (Leak)');
    };

    // Fix: Thêm event listener và trả về cleanup để xóa khi unmount
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      <h2>Leak 2: Quên xóa Event Listener</h2>
      <p>
        Tọa độ chuột X: {coords.x}, Y: {coords.y}
      </p>
      <p>
        Event listener được gắn vào object "window" toàn cục và không bị xóa khi unmount. Di chuột
        qua lại và xem Console sau khi rời khỏi màn hình này.
      </p>
    </div>
  );
}
