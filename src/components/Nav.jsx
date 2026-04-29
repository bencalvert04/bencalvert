import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
      <NavLink to="/resume" className={({ isActive }) => isActive ? styles.active : ''}>Resume</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>Projects</NavLink>
      <NavLink to="/hiking" className={({ isActive }) => isActive ? styles.active : ''}>Hiking</NavLink>
    </nav>
  );
}
