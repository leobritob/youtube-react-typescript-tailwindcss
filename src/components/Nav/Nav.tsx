import { Button, NavLogo } from 'components';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav className="w-full h-20 bg-gray-50 border-b border-gray-200">
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between">
        <NavLogo />

        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          <Link to="/escrever-agora">
            <Button variant="primary">Escrever Agora</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
