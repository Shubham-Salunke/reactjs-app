import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function PublicLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PublicLayout;