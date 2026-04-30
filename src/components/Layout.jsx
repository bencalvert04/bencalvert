import { Outlet, useLocation } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import Nav from './Nav';
import { PAGE_EDGE, NAV_THICKNESS } from '../constants';

const CONTENT_GAP = 24;

const EDGE_PADDING = {
  bottom: {},
  left:   { paddingLeft: NAV_THICKNESS + CONTENT_GAP },
};

// Where the content starts before animating in, matched to the nav's direction.
// Content and nav slide together as one unit.
const CONTENT_ENTRANCE = {
  bottom: { transform: 'translateY(40px)', opacity: 0 }, // coming from home: slide up
  left:   { transform: 'translateX(-40px)', opacity: 0 }, // coming from left nav: slide right
};

const CONTENT_NATURAL = { transform: 'none', opacity: 1 };

const TRANSITION = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease';

export default function Layout() {
  const { pathname, state } = useLocation();
  const edge = PAGE_EDGE[pathname] ?? 'left';

  const [entering, setEntering] = useState(false);

  // Same pattern as Nav: snap content to entrance position before paint,
  // then animate to natural position.
  useLayoutEffect(() => {
    if (!state?.fromEdge) return;
    setEntering(true);
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setEntering(false));
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  const fromEdge = state?.fromEdge;
  const isHome = pathname === '/';

  // Skip content animation on home page — the hero is position:fixed, and
  // CSS transforms on a parent break fixed positioning, causing a visual glitch.
  const entranceStyle   = (!isHome && entering && fromEdge) ? CONTENT_ENTRANCE[fromEdge] : CONTENT_NATURAL;
  const transitionStyle = (!isHome && entering) ? 'none' : TRANSITION;

  return (
    <>
      <Nav />
      <main style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        padding: '2.5rem 1rem',
        ...EDGE_PADDING[edge],
        ...entranceStyle,
        transition: transitionStyle,
      }}>
        <Outlet />
      </main>
    </>
  );
}
