import { Outlet } from 'react-router-dom';
import Nav from './Nav';

export default function Layout() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '2.5rem 1rem' }}>
        <Outlet />
      </main>
    </>
  );
}
