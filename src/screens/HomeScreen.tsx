import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import heroImg from '../assets/hero.png';

export function HomeScreen() {
  const features = ['Memory Leak', 'Stale Closure', 'God Object', 'Rule of Hooks'];

  return (
    <section id='center'>
      <div className='hero'>
        {/* LỖI 1: Thiếu thuộc tính alt quan trọng cho accessibility */}
        <img src={heroImg} className='base' width='170' height='179' />
        <img src={reactLogo} className='framework' alt='React logo' />
        <img src={viteLogo} className='vite' alt='Vite logo' />
      </div>
      
      {/* LỖI 2: Dùng `tabindex` thay vì `tabIndex` trong React JSX */}
      <div tabindex="0">
        <h1>Vite + React Memory Leaks</h1>
        <p>Chọn các nút phía trên để thử nghiệm các trường hợp lỗi.</p>
        
        <h3 style={{ marginTop: '30px' }}>Các vấn đề hiện tại:</h3>
        <ul>
          {/* LỖI 3: Render array thành list DOM elements nhưng thiếu prop `key` */}
          {features.map((feature) => (
            <li>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
