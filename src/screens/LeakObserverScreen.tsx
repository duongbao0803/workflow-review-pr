import { useEffect, useRef } from 'react';

export function LeakObserverScreen() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Memory Leak: Tạo ResizeObserver trên element nhưng cố tình không thực hiện cleanup
    // Fixed: Now performing cleanup
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        console.log(
          `LeakObserverScreen: Kích thước mới là ${entry.contentRect.width}x${entry.contentRect.height} (Leak)`,
        );
      }
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h2>Leak 5: Quên dọn dẹp API Browser (Observer)</h2>
      <p>
        Màn hình này khởi tạo một <code>ResizeObserver</code> để theo dõi sự thay đổi kích thước của
        phần tử bên dưới. Tuy nhiên lại quên gọi lệnh <code>disconnect()</code> khi unmount.
      </p>
      <p>
        Thử chuyển sang màn hình khác, sau đó thay đổi kích thước cửa sổ trình duyệt và quan sát
        Console. Bạn sẽ thấy log cảnh báo vẫn liên tục xuất hiện do Observer ảo này hoạt động dưới
        nền.
      </p>
      <div
        ref={elementRef}
        style={{
          width: '100%',
          minHeight: '100px',
          backgroundColor: '#444',
          border: '2px solid #666',
          borderRadius: '8px',
          padding: '10px',
          marginTop: '20px',
        }}
      >
        Thay đổi chiều rộng cửa sổ trình duyệt (Resize) để kích hoạt Callback của Observer.
      </div>
    </div>
  );
}
