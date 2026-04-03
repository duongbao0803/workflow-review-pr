import { useState, useEffect } from 'react';
import { calculateComplexBusinessLogic } from '../utils/badPatternHelper';
import { SubComponentForNoReason } from '../components/SubComponentForNoReason';
import { AnotherUnrelatedView } from '../components/AnotherUnrelatedView';

export function BadPatternScreen() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const rawData = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const processed = calculateComplexBusinessLogic(rawData);
    setData(processed);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Màn hình Clean (trước là Bad Pattern Screen)</h2>
      <ul style={{ color: 'green' }}>
        <li>
          ✅ <b>Không còn Gom cụm:</b> Các Component con đã được tách sang `src/components`.
        </li>
        <li>
          ✅ <b>Tách biệt Logic và UI:</b> Logic phức tạp đã sang `src/utils`.
        </li>
        <li>
          ✅ <b>Export chuẩn:</b> Dùng `export function` thay vì default.
        </li>
      </ul>

      <SubComponentForNoReason />

      <AnotherUnrelatedView />

      <div style={{ marginTop: 20 }}>Dữ liệu đã tính toán: {JSON.stringify(data)}</div>
    </div>
  );
}
