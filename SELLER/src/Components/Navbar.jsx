import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  LogIn, 
  UserPlus, 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  Layers, 
  MessageCircle, 
  LogOut 
} from 'lucide-react';
import { StoreContext } from '../Context';

const Navbar = () => {
  
  const navItemVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };
  const navigate = useNavigate()
  const {token, setToken} = useContext(StoreContext)
  const handleLogout = () => {
    // console.log('logout');
    localStorage.removeItem('sellerToken')
    setToken("")
    navigate('/')
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#ffeee5] text-[#211202] p-4 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          whileHover="hover"
          whileTap="tap"
          variants={navItemVariants}
        >
          <Link 
            to="/" 
            className="text-2xl font-bold flex items-center space-x-2"
          >
            <Home className="mr-2" />
            Seller Platform
          </Link>
        </motion.div>
        
        {!token ? (
          <div className="flex space-x-4">
            <motion.div whileHover="hover" whileTap="tap" variants={navItemVariants}>
              <Link to="/" className="flex items-center text-[#260e02] hover:text-[#d78500] transition">
                <Home className="mr-1" /> Home
              </Link>
            </motion.div>
            
            <motion.div whileHover="hover" whileTap="tap" variants={navItemVariants}>
              <Link to="/seller/login" className="flex items-center text-[#260e02] hover:text-[#d78500] transition">
                <LogIn className="mr-1" /> Login
              </Link>
            </motion.div>
            
            <motion.div whileHover="hover" whileTap="tap" variants={navItemVariants}>
              <Link to="/seller/register" className="flex items-center text-[#260e02] hover:text-[#d78500] transition">
                <UserPlus className="mr-1" /> Register
              </Link>
            </motion.div>
          </div>
        ) : (
          <div className="flex space-x-4 items-center">
            <motion.div whileHover="hover" whileTap="tap" variants={navItemVariants}>
              <Link to="/seller/dashboard" className="flex items-center text-[#260e02] hover:text-[#dc7600] transition">
                <LayoutDashboard className="mr-1" /> Dashboard
              </Link>
            </motion.div>
            
            <motion.div whileHover="hover" whileTap="tap" variants={navItemVariants}>
              <Link to="/seller/products" className="flex items-center text-[#260e02] hover:text-[#dc7600] transition">
                <Package className="mr-1" /> Products
              </Link>
            </motion.div>
            
            <motion.div whileHover="hover" whileTap="tap" variants={navItemVariants}>
              <Link to="/seller/orders" className="flex items-center text-[#260e02] hover:text-[#dc7600] transition">
                <ShoppingCart className="mr-1" /> Orders
              </Link>
            </motion.div>
            
            <motion.div whileHover="hover" whileTap="tap" variants={navItemVariants}>
              <Link to="/seller/earnings" className="flex items-center text-[#260e02] hover:text-[#dc7600] transition">
                <DollarSign className="mr-1" /> Earnings
              </Link>
            </motion.div>
            
            <motion.div whileHover="hover" whileTap="tap" variants={navItemVariants}>
              <Link to="/seller/stock" className="flex items-center text-[#260e02] hover:text-[#dc7600] transition">
                <Layers className="mr-1" /> Stock
              </Link>
            </motion.div>
            
            <motion.div whileHover="hover" whileTap="tap" variants={navItemVariants}>
              <Link to="/seller/chat" className="flex items-center text-[#260e02] hover:text-[#dc7600] transition">
                <MessageCircle className="mr-1" /> Chat
              </Link>
            </motion.div>
            
            <motion.button 
              onClick={handleLogout}
              whileHover="hover"
              whileTap="tap"
              variants={navItemVariants}
              className="flex items-center text-[#ff5e00] cursor-pointer bg-orange-50 px-3 py-1.5 rounded hover:text-[#ff0000] transition"
            >
              <LogOut className="mr-1" /> Logout
            </motion.button>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
