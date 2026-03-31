import { useState, useEffect } from 'react';

// VIOLATION 1: Default export instead of exported named function
// VIOLATION 2: Placed in `src/` root instead of `src/screens/`
// VIOLATION 3: Mixing complex business logic and state directly inside the UI component instead of `utils/`
export default function ViolatePatternScreen() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // God Object behavior: putting data fetching, processing, and UI all together
  const fetchAndProcessData = async () => {
    setLoading(true);
    try {
      // VIOLATION: Hardcoded endpoint, no external util/service
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      
      // Inline complex business logic
      const processedData = data.map((u: any) => ({
        ...u,
        customField: u.name.toUpperCase() + ' - ' + Math.random().toString(36).substr(2, 5),
        isVip: u.id % 2 === 0
      }));
      
      setUsers(processedData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndProcessData();
  }, []);

  return (
    // VIOLATION 4: Heavy inline styling instead of CSS classes
    <div style={{ padding: '20px', border: '5px solid red', backgroundColor: '#ffe6e6', color: '#333' }}>
      <h1 style={{ textAlign: 'center', color: '#d9534f' }}>
        🚨 God Object / Pattern Violator Screen 🚨
      </h1>
      <p style={{ fontWeight: 'bold' }}>
        Màn hình này cố tình thiết kế sai pattern:
      </p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Không nằm trong thư mục <code>src/screens/</code></li>
        <li>Sử dụng <code>export default</code> thay vì <code>export function</code></li>
        <li>Chứa mọi logic fetch data, process data bên trong component (God Object) thay vì tách ra <code>src/utils/</code></li>
      </ul>

      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={fetchAndProcessData}
          style={{
            padding: '10px 20px',
            backgroundColor: '#d9534f',
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
