import { resume } from '../data/resume';

export default function Resume() {
  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '2rem' }}>Resume</h1>

      <section>
        <h2 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem' }}>Experience</h2>
        {resume.experience.map((e, i) => (
          <div key={i} style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <strong>{e.role}</strong>
              <span style={{ color: '#666', fontSize: '0.875rem' }}>{e.period}</span>
            </div>
            <div style={{ color: '#555', marginBottom: '0.5rem' }}>{e.company}</div>
            <ul style={{ paddingLeft: '1.25rem' }}>
              {e.bullets.map((b, j) => <li key={j} style={{ marginBottom: '0.25rem' }}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section style={{ marginTop: '2.5rem' }}>
        <h2 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem' }}>Education</h2>
        {resume.education.map((e, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span><strong>{e.degree}</strong> — {e.school}</span>
            <span style={{ color: '#666', fontSize: '0.875rem' }}>{e.year}</span>
          </div>
        ))}
      </section>

      <section style={{ marginTop: '2.5rem' }}>
        <h2 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem' }}>Skills</h2>
        <p>{resume.skills.join(' · ')}</p>
      </section>
    </div>
  );
}
