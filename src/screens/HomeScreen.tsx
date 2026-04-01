import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import heroImg from '../assets/hero.png';

export function HomeScreen() {
  const features = ['Memory Leak', 'Stale Closure', 'God Object', 'Rule of Hooks'];

  return (
    <section id='center'>
      <div className='hero'>
        <img src={heroImg} className='base' width='170' height='179' alt='Hero' />
        <img src={reactLogo} className='framework' alt='React logo' />
        <img src={viteLogo} className='vite' alt='Vite logo' />
      </div>
      
      <div tabIndex={0}>
        <h1>Vite + React Memory Leaks</h1>
        <p>Chọn các nút phía trên để thử nghiệm các trường hợp rò rỉ bộ nhớ (Memory Leak).</p>
        
        <h3 style={{ marginTop: '30px' }}>Các vấn đề hiện tại:</h3>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
