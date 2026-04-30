export default function Home() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      top: '57px',
      backgroundImage: 'url(/assets/hero.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        textAlign: 'center',
        color: '#fff',
        textShadow: '0 1px 6px rgba(0,0,0,0.5)',
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.5px', margin: 0 }}>Ben Calvert</h1>
        <p style={{ marginTop: '0.75rem', fontSize: '1.2rem', fontWeight: 400 }}>Building things. Exploring places.</p>
      </div>
    </div>
  );
}
