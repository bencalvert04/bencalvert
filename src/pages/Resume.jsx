import { resume } from '../data/resume';

const sectionLabel = {
  fontSize: '0.7rem',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#888',
  marginBottom: '1rem',
  marginTop: '2.5rem',
  borderBottom: '1px solid #e5e5e5',
  paddingBottom: '0.4rem',
};

export default function Resume() {
  return (
    <div style={{ fontSize: '0.95rem' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 600 }}>Benjamin Calvert</h1>
      <p style={{ color: '#555', marginTop: '0.35rem' }}>
        (360) 975-0901 · <a href="mailto:bencalvert04@gmail.com">bencalvert04@gmail.com</a>
      </p>

      {/* Education */}
      <h2 style={sectionLabel}>Education</h2>
      {resume.education.map((e, i) => (
        <div key={i} style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.25rem' }}>
            <strong>{e.degree}</strong>
            <span style={{ color: '#666', fontSize: '0.875rem' }}>{e.year}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#555' }}>
            <span>{e.school}{e.minor ? ` · ${e.minor}` : ''}</span>
            <span style={{ fontSize: '0.875rem' }}>{e.location}</span>
          </div>
          {e.gpa && <div style={{ marginTop: '0.25rem', color: '#444' }}>GPA {e.gpa}</div>}
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
            {e.highlights.map((h, j) => <li key={j} style={{ marginBottom: '0.3rem', color: '#444' }}>{h}</li>)}
          </ul>
        </div>
      ))}

      {/* Experience */}
      <h2 style={sectionLabel}>Experience</h2>
      {resume.experience.map((e, i) => (
        <div key={i} style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.25rem' }}>
            <strong>{e.role} — {e.company}</strong>
            <span style={{ color: '#666', fontSize: '0.875rem', whiteSpace: 'nowrap' }}>{e.period}</span>
          </div>
          <div style={{ color: '#666', fontSize: '0.875rem', marginBottom: '0.4rem' }}>{e.location}</div>
          <ul style={{ paddingLeft: '1.25rem' }}>
            {e.bullets.map((b, j) => <li key={j} style={{ marginBottom: '0.3rem', color: '#444' }}>{b}</li>)}
          </ul>
        </div>
      ))}

      {/* Skills */}
      <h2 style={sectionLabel}>Skills</h2>
      <ul style={{ paddingLeft: '1.25rem' }}>
        {resume.skills.map((s, i) => <li key={i} style={{ marginBottom: '0.3rem', color: '#444' }}>{s}</li>)}
      </ul>

      {/* Personal Projects */}
      <h2 style={sectionLabel}>Personal Projects</h2>
      <ul style={{ paddingLeft: '1.25rem' }}>
        {resume.projects.map((p, i) => <li key={i} style={{ marginBottom: '0.3rem', color: '#444' }}>{p}</li>)}
      </ul>
    </div>
  );
}
