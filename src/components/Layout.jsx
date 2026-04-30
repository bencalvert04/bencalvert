import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import { PAGE_EDGE, NAV_THICKNESS } from '../constants';

// Extra space between the nav and the page content
const CONTENT_GAP = 24;

// Padding applied to the main content area based on which edge the nav is on
const EDGE_PADDING = {
  bottom: {},                                             // home page is full-screen, no padding needed
  left:   { paddingLeft: NAV_THICKNESS + CONTENT_GAP },
};

export default function Layout() {
  const { pathname } = useLocation();
  const edge = PAGE_EDGE[pathname] ?? 'top';

  return (
    <>
      <Nav />
      <main style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        padding: '2.5rem 1rem',
        ...EDGE_PADDING[edge],
      }}>
        <Outlet />
      </main>
    </>
  );
}
