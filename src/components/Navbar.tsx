
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Code, MessageSquare, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: <Code size={18} /> },
    { path: '/chatbot', label: 'Chatbot', icon: <MessageSquare size={18} /> },
    { path: '/developer-insights', label: 'Developer Insights', icon: <User size={18} /> }
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <NavLink 
              to="/" 
              className="text-lg font-medium flex items-center text-nic-primary"
            >
              <Code className="mr-2" />
              <span>NIC Code</span>
            </NavLink>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? 'bg-nic-accent text-nic-primary' 
                    : 'text-nic-muted hover:text-nic-primary hover:bg-gray-100'
                  }
                `}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
          
          <div className="md:hidden">
            <div className="flex space-x-1">
              {navItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center p-2 rounded-md transition-all duration-200
                    ${isActive 
                      ? 'bg-nic-accent text-nic-primary' 
                      : 'text-nic-muted hover:text-nic-primary hover:bg-gray-100'
                    }
                  `}
                >
                  {item.icon}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
