import AdminLogin from '../AdminLogin';

export default function AdminLoginExample() {
  return (
    <AdminLogin 
      onLogin={(username, password) => console.log('Login:', username, password)}
    />
  );
}
