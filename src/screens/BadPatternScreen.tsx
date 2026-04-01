import React, { useState, useEffect } from 'react';

// VI PHẠM 1: Đặt business logic/utility function trực tiếp trong file UI thay vì chuyển file vào thư mục utils/
function calculateComplexBusinessLogic(data: any[]) {
  console.log("Tính toán phức tạp không nên nằm ở đây...");
  return data.map(item => ({ ...item, processed: true }));
}

// VI PHẠM 2: Nhồi nhét nhiều Component (có thể tái sử dụng hoặc là 1 màn hình độc lập) vào chung một file thay vì tách ra thư mục `components/` hoặc `screens/`
const SubComponentForNoReason = () => {
    return <div style={{ padding: 10, border: '1px solid red', marginTop: 10 }}>Tôi là một Component con bị nhét chung vào file screen</div>;
}

const AnotherUnrelatedView = () => {
    return <div style={{ padding: 10, border: '1px solid blue', marginTop: 10 }}>Tôi đáng lẽ nên là một file riêng biệt</div>;
}

// VI PHẠM 3: Dùng `export default` thay vì named export (export function BadPatternScreen) như Pattern yêu cầu
export default function BadPatternScreen() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Giả lập việc fetch data và xử lý logic phức tạp trộn lẫn với UI
    const rawData = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const processed = calculateComplexBusinessLogic(rawData);
    setData(processed);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Màn hình vi phạm Pattern (Bad Pattern Screen)</h2>
      <ul style={{ color: 'red' }}>
        <li>❌ <b>Gom cụm:</b> Chứa quá nhiều components (SubComponent, UnrelatedView) trong cùng 1 file.</li>
        <li>❌ <b>Trộn lẫn Logic và UI:</b> Chứa các hàm business logic/utils ngay trong file screen.</li>
        <li>❌ <b>Export sai chuẩn:</b> Dùng <code>export default</code> thay vì named export.</li>
      </ul>
      
      <SubComponentForNoReason />
      
      <AnotherUnrelatedView />
      
      <div style={{ marginTop: 20 }}>
        Dữ liệu đã tính toán: {JSON.stringify(data)}
      </div>
    </div>
  );
}
