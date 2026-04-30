export default function Home() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      top: 0,
      backgroundImage: `url(${import.meta.env.BASE_URL}assets/hero.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '10vh',
    }}>
      <div style={{
        textAlign: 'center',
        color: '#333',
        textShadow: 'none',
        fontFamily: "'JetBrains Mono', monospace",
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.5px', margin: 0 }}>Hi, I'm Ben Calvert.</h1>
        <p style={{ marginTop: '0.75rem', fontSize: '1.2rem', fontWeight: 400}}>learning = exploration. tackling big problems = adventure. let's pushing our limits.</p>
      </div>
    </div>
  );
}
