import { useEffect, useState } from 'react';

// Global array to hold detached DOM nodes
const detachedNodes: HTMLElement[] = [];

export function LeakDOMScreen() {
  const [nodesCount, setNodesCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cố tình tạo một phần tử DOM lớn nhưng KHÔNG gắn vào document
      const div = document.createElement('div');
      div.innerText = new Array(10000).fill('DOM LEAK').join(' ');

      // Memory Leak: Giữ reference tới DOM node đã bị detach, tránh bị Garbage Collection dọn dẹp
      detachedNodes.push(div);
      setNodesCount(detachedNodes.length);

      console.log('LeakDOMScreen: Đã tạo và giữ tham chiếu tới DOM node mới.');
    }, 500);

    return () => {
      clearInterval(interval);
      // Fix: Xóa tất cả tham chiếu trong mảng để GC có thể dọn dẹp các DOM node
      detachedNodes.splice(0, detachedNodes.length);
      console.log('LeakDOMScreen: Đã giải phóng tất cả detached DOM nodes.');
    };
  }, []);

  return (
    <div>
      <h2>Leak 4: Detached DOM Nodes</h2>
      <p>Số lượng Detached Nodes đang bị giữ tham chiếu: {nodesCount}</p>
      <p>
        Màn hình này liên tục tạo ra các thẻ div có nội dung lớn trong bộ nhớ và lưu vào một mảng
        toàn cục. Vì vẫn còn reference trong mảng này, trình duyệt không thể dọn dẹp các node đó kể
        cả khi chúng không có mặt trên giao diện (Detached DOM).
      </p>
    </div>
  );
}
