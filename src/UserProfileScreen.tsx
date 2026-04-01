import { useState, useEffect } from 'react';

// Cố tình đặt ở thư mục gốc src/ thay vì src/screens/
// Cố tình dùng export default
// Cố tình gộp logic fetch data vào trong component (God object)
export default function UserProfileScreen() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Logic nên để ở thư mục utils/
    setTimeout(() => {
      setData({ name: 'John Doe', role: 'Admin', status: 'Active' });
    }, 1000);
  }, []);

  return (
    <div style={{ backgroundColor: '#333', padding: '20px', borderRadius: '8px', color: 'white', border: '3px solid red' }}>
      <h2>Trang Cá Nhân (Sai Pattern)</h2>
      <p>Màn hình này vi phạm architecture pattern (nằm ngoài /screens, dùng export default, chứa logic data)</p>
      {data ? (
        <ul>
          <li>Name: {data.name}</li>
          <li>Role: {data.role}</li>
          <li>Status: {data.status}</li>
        </ul>
      ) : (
        <p>Đang tải dữ liệu...</p>
      )}
    </div>
  );
}
