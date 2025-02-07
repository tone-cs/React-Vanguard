import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="w-64 h-screen bg-gray-900 p-6">
      <div className="items-center mb-8 flex flex-row">
        <img src="/img/Vanguard.svg" alt="Vanguard" className="w-10 m-3" />
        <h1 className="text-xl font-bold">Vanguard</h1>
      </div>
      <ul className="space-y-4">
        <li><Link to="/home" className="block p-2 rounded hover:bg-gray-800">Home</Link></li>
        <li><Link to="/transfer" className="block p-2 rounded hover:bg-gray-800">Transfer</Link></li>
        <li><Link to="/products" className="block p-2 rounded hover:bg-gray-800">Products & Services</Link></li>
        <li><Link to="/settings" className="block p-2 rounded hover:bg-gray-800">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
