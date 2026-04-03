import { useState, useEffect } from 'react';
import { fetchUserProfileData } from '../utils/userProfileHelper';

export function UserProfileScreen() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchUserProfileData().then(setData);
  }, []);

  return (
    <div style={{ backgroundColor: '#222', padding: '20px', borderRadius: '8px', color: 'white', border: '3px solid green' }}>
      <h2>Trang Cá Nhân (Chuẩn Pattern)</h2>
      <p>Màn hình này đã được refactor để tuân thủ đúng architecture pattern!</p>
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
