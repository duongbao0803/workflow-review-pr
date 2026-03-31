import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import heroImg from '../assets/hero.png';

export function HomeScreen() {
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
