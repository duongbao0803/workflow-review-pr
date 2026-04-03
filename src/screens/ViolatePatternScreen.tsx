import { useState, useEffect } from 'react';
import { fetchAndProcessUserData } from '../utils/violatePatternHelper';

export function ViolatePatternScreen() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const data = await fetchAndProcessUserData();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ padding: '20px', border: '5px solid green', backgroundColor: '#e6ffe6', color: '#333' }}>
      <h1 style={{ textAlign: 'center', color: '#28a745' }}>
        ✅ Clean Pattern Screen ✅
      </h1>
      <p style={{ fontWeight: 'bold' }}>
        Màn hình này ĐÃ refactor đúng pattern:
      </p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Nằm đúng trong thư mục <code>src/screens/</code></li>
        <li>Sử dụng <code>export function</code> thay vì export default</li>
        <li>Logic data fetch và process đã được đưa ra <code>src/utils/</code></li>
      </ul>

      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={loadData}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Đang tải...' : 'Reload Data'}
        </button>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {users.map(user => (
          <div key={user.id} style={{ padding: '10px', border: '1px solid #ccc', backgroundColor: '#fff' }}>
            <strong>{user.customField}</strong> {user.isVip && <span style={{ color: 'gold' }}>⭐ VIP</span>}
            <br />
            <small>{user.email}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
