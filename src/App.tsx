import { useState } from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { NormalScreen } from './screens/NormalScreen';
import { LeakIntervalScreen } from './screens/LeakIntervalScreen';
import { LeakEventListenerScreen } from './screens/LeakEventListenerScreen';
import { LeakGlobalArrayScreen } from './screens/LeakGlobalArrayScreen';
import ViolatePatternScreen from './ViolatePatternScreen';
import './App.css';

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
      case 'violate-pattern':
        return <ViolatePatternScreen />;
      case 'home':
      default:
        return <HomeScreen />;
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
        <button
          style={{ backgroundColor: '#ff9800', color: 'black', fontWeight: 'bold' }}
          onClick={() => setActiveScreen('violate-pattern')}
        >
          ❌ Sai Pattern
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
