import { NavLink, Outlet } from "react-router-dom";
import styles from "./styles.module.css";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/delivery"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Delivery
          </NavLink>
          <NavLink
            to="/newitems"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            New Items
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Contacts
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Users
          </NavLink>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>2025</footer>
    </div>
  );
};

export default Layout;
