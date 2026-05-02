import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import styles from './Nav.module.css';
import { PAGE_EDGE } from '../constants';

const LINKS = [
  { path: '/',           label: 'Home'       },
  { path: '/resume',     label: 'Resume'     },
  { path: '/projects',   label: 'Projects'   },
  { path: '/adventures', label: 'Adventures' },
];

// Returns the CSS transform that places the nav at `fromEdge` position
// while it is actually rendered at `toEdge`. Removing this transform
// causes the nav to animate from fromEdge to toEdge.
function getEntranceTransform(fromEdge, toEdge) {
  const transforms = {
    'bottom→left': 'translate(-100vw, 100vh)', // diagonal: up from bottom-left corner
    'left→bottom': 'translate(-100vw, 100vh)', // diagonal: down to bottom-left corner
  };

  return transforms[`${fromEdge}→${toEdge}`] ?? null;
}

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentEdge = PAGE_EDGE[location.pathname] ?? 'left';
  const isVertical  = currentEdge === 'left';

  const [entranceTransform, setEntranceTransform] = useState(null);

  // useLayoutEffect fires synchronously before the browser paints.
  // This ensures the nav snaps to its entrance position before the user
  // sees it, so the subsequent CSS animation plays from that position.
  // It re-runs on every page change (location.pathname dependency).
  useLayoutEffect(() => {
    const fromEdge = location.state?.fromEdge;
    if (!fromEdge) return;

    const transform = getEntranceTransform(fromEdge, currentEdge);
    if (!transform) return;

    // Snap nav to entrance position (transition disabled via inline style)
    setEntranceTransform(transform);

    // After the browser paints the entrance position, clear the transform.
    // Removing it lets the CSS transition animate the nav to its natural position.
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setEntranceTransform(null));
    });
    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  // Intercept nav link clicks to pass the current edge as router state,
  // so the destination page knows where the nav is coming from.
  const handleClick = (e, toPath) => {
    const toEdge = PAGE_EDGE[toPath];
    if (toEdge === currentEdge) return;
    e.preventDefault();
    navigate(toPath, { state: { fromEdge: currentEdge } });
  };

  // Home page uses floating tiles for navigation — no nav bar needed
  if (currentEdge === 'bottom') return null;

  // During the entrance animation, disable transitions so the nav snaps
  // to its starting position instantly before animating.
  const inlineStyle = entranceTransform
    ? { transform: entranceTransform, transition: 'none' }
    : {};

  return (
    <nav
      className={[
        styles.nav,
        styles[currentEdge],
        isVertical ? styles.vertical : styles.horizontal,
      ].join(' ')}
      style={inlineStyle}
    >
      {LINKS.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          end={path === '/'}
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : ''].join(' ')
          }
          onClick={(e) => handleClick(e, path)}
        >
          {/* First letter is always visible.
              The rest of the label slides in on hover (vertical nav only). */}
          <span className={styles.firstLetter}>{label[0]}</span>
          <span className={styles.restOfLabel}>{label.slice(1)}</span>
        </NavLink>
      ))}
    </nav>
  );
}
