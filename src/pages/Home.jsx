import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const TILES = [
  { path: '/resume',     label: 'Resume',     className: styles.tileLeft   },
  { path: '/projects',   label: 'Projects',   className: styles.tileMiddle },
  { path: '/adventures', label: 'Adventures', className: styles.tileRight  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundImage: `url(${import.meta.env.BASE_URL}assets/hero.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '10vh',
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      <div style={{ textAlign: 'center', color: '#333' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.5px', margin: 0 }}>Hi, I'm Ben Calvert.</h1>
        <p style={{ marginTop: '0.75rem', fontSize: '1.2rem', fontWeight: 400 }}>learning = exploration. tackling big problems = adventure. let's push our limits.</p>
      </div>

      <div className={styles.tilesContainer}>
        {TILES.map(({ path, label, className }) => (
          <button
            key={path}
            className={`${styles.tile} ${className}`}
            onClick={() => navigate(path, { state: { fromEdge: 'bottom' } })}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
