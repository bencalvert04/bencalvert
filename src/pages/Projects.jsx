import { projects } from '../data/projects';

function VideoEmbed({ src }) {
  if (!src) return null;
  if (src.startsWith('http')) {
    return (
      <iframe
        width="100%"
        height="380"
        src={src}
        allowFullScreen
        style={{ border: 0, marginTop: '1rem', borderRadius: '4px' }}
      />
    );
  }
  return (
    <video controls width="100%" style={{ marginTop: '1rem', borderRadius: '4px' }}>
      <source src={src} />
    </video>
  );
}

export default function Projects() {
  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '2rem' }}>Projects</h1>
      {projects.map((p, i) => (
        <div key={i} style={{ marginBottom: '3rem', paddingBottom: '2.5rem', borderBottom: '1px solid #e5e5e5' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600 }}>
            {p.link
              ? <a href={p.link} target="_blank" rel="noreferrer">{p.title}</a>
              : p.title}
          </h2>
          <p style={{ marginTop: '0.5rem', color: '#444' }}>{p.description}</p>
          <VideoEmbed src={p.videoSrc} />
        </div>
      ))}
    </div>
  );
}
