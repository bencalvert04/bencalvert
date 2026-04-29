import { trips } from '../data/adventures';

export default function Adventures() {
  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '2rem' }}>Adventures</h1>
      {trips.map((t, i) => (
        <div key={i} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{t.name}</h2>
            <span style={{ fontSize: '0.875rem', color: '#666' }}>{t.date}</span>
          </div>
          {t.description && (
            <p style={{ marginTop: '0.5rem', color: '#444' }}>{t.description}</p>
          )}
          {t.photos.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '0.5rem',
              marginTop: '1rem',
            }}>
              {t.photos.map((photo, j) => (
                <img
                  key={j}
                  src={`/assets/hiking/${photo}`}
                  alt={`${t.name} ${j + 1}`}
                  style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '4px' }}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
