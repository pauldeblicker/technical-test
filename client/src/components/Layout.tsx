import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export function Layout(): JSX.Element {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/devis">Devis</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
