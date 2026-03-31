import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';

// Global array để thể hiện memory leak thông qua closure/global scope
const leakedArray: any[] = [];

function NormalScreen() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Component này dọn dẹp (cleanup) interval khi unmount -> KHÔNG LEAK
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('NormalScreen unmounted: Đã xoá interval!');
    };
  }, []);

  return (
    <div>
      <h2>Màn hình Bình thường (Không Leak)</h2>
      <p>Count: {count}</p>
      <p>
        Màn hình này sử dụng setInterval nhưng có hàm cleanup đúng chuẩn. Mở console để xem log khi
        chuyển màn hình.
      </p>
    </div>
  );
}

function LeakIntervalScreen() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Memory Leak: Không có hàm cleanup (clearInterval) được trả về
    setInterval(() => {
      setCount(c => c + 1);
      console.log('LeakIntervalScreen: Interval vẫn đang chạy ngầm... (Leak)');
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Leak 1: Quên xóa Interval</h2>
      <p>Count: {count}</p>
      <p>
        Interval này sẽ tiếp tục chạy và cập nhật state ngầm ngay cả khi bạn đã chuyển sang màn hình
        khác. Mở tab Console để xem!
      </p>
    </div>
  );
}

function LeakEventListenerScreen() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      console.log('LeakEventListenerScreen: Đang tracking chuột... (Leak)');
    };

    // Memory Leak: Event listener được thêm vào window nhưng không bao giờ xóa đi
    window.addEventListener('mousemove', handleMouseMove);
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

function LeakGlobalArrayScreen() {
  useEffect(() => {
    const timer = setInterval(() => {
      // Memory Leak: Liên tục nhồi dữ liệu khổng lồ vào một mảng Global không bị Garbage Collected
      leakedArray.push(new Array(100000).fill('leak'));
      console.log(
        `LeakGlobalArrayScreen: Đã thêm dữ liệu rác. Kích thước mảng: ${leakedArray.length}`,
      );
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Leak 3: Khối dữ liệu "mồ côi" (Global Array)</h2>
      <p>
        Màn hình này liên tục rải mảng lớn vào một biến Global. Vì biến này tồn tại suốt vòng đời
        ứng dụng, Garbage Collector không thể quét dọn bộ nhớ này.
      </p>
    </div>
  );
}

function App() {
  const [activeScreen, setActiveScreen] = useState('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'normal':
        return <NormalScreen />;
      case 'leak-interval':
        return <LeakIntervalScreen />;
      case 'leak-event':
        return <LeakEventListenerScreen />;
      case 'leak-global':
        return <LeakGlobalArrayScreen />;
      case 'home':
      default:
        return (
          <section id='center'>
            <div className='hero'>
              <img src={heroImg} className='base' width='170' height='179' alt='' />
              <img src={reactLogo} className='framework' alt='React logo' />
              <img src={viteLogo} className='vite' alt='Vite logo' />
            </div>
            <div>
              <h1>Vite + React Memory Leaks</h1>
              <p>Chọn các nút phía trên để thử nghiệm các trường hợp rò rỉ bộ nhớ (Memory Leak).</p>
            </div>
          </section>
        );
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      <nav
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '20px',
          padding: '15px',
          backgroundColor: '#242424',
          borderRadius: '8px',
          border: '1px solid #444',
        }}
      >
        <button onClick={() => setActiveScreen('home')}>Trang chủ</button>
        <button style={{ backgroundColor: '#28a745' }} onClick={() => setActiveScreen('normal')}>
          ✅ Bình thường
        </button>
        <button
          style={{ backgroundColor: '#dc3545' }}
          onClick={() => setActiveScreen('leak-interval')}
        >
          ⚠️ Leak: Interval
        </button>
        <button
          style={{ backgroundColor: '#dc3545' }}
          onClick={() => setActiveScreen('leak-event')}
        >
          ⚠️ Leak: EventListener
        </button>
        <button
          style={{ backgroundColor: '#dc3545' }}
          onClick={() => setActiveScreen('leak-global')}
        >
          ⚠️ Leak: Global Array{' '}
        </button>
      </nav>

      <main
        style={{
          padding: '20px',
          border: '1px solid #444',
          borderRadius: '8px',
          minHeight: '350px',
        }}
      >
        {renderScreen()}
      </main>
    </div>
  );
}

export default App;
