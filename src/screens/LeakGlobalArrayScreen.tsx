import { useEffect } from 'react';
import { leakedArray } from '../utils/leakHelpers';

export function LeakGlobalArrayScreen() {
  useEffect(() => {
    // FIX: SetInterval giờ đã lưu vào timer, được cleanup. 
    // Đồng thời giải phóng global array khi màn hình unmount.
    const timer = setInterval(() => {
      leakedArray.push(new Array(10000).fill('leak'));
      console.log(
        `LeakGlobalArrayScreen: Đang test thêm dữ liệu rác. Kích thước mảng: ${leakedArray.length}`,
      );
    }, 500);

    return () => {
      clearInterval(timer);
      leakedArray.length = 0; // Empty the array to allow Garbage Collection
      console.log('LeakGlobalArrayScreen: Đã xóa dữ liệu thừa khỏi Global Array (FIXED)');
    };
  }, []);

  return (
    <div>
      <h2>Đã Fix (Leak 3): Giải phóng mảng Global</h2>
      <p>
        Màn hình này sử dụng đoạn logic gắn dữ liệu lớn vào một mảng Global. Tuy nhiên,
        giờ đây nó sẽ thực thi dọn rác (length = 0) ngay khi bạn thoát khỏi màn hình,
        cho phép Garbage Collector làm việc đúng cách và tránh crash bộ nhớ.
      </p>
    </div>
  );
}
