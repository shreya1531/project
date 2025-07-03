import { useAuth } from '../context/AuthContext';
const ADMIN_UID = 'YOUR_ADMIN_UID';

export default function Admin() {
  const { user } = useAuth();
  if (!user || user.uid !== ADMIN_UID) return <p>Access Denied</p>;
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome {user.email}</p>
    </div>
  );
}
