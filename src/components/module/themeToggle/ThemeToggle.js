// components/ThemeToggle.js
'use client';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'; // Icons for moon (dark mode) and sun (light mode)
import { useTheme } from '../../../../context/ThemeContext';
const ThemeToggle = () => {
  
  const { darkTheme, setDarkTheme } = useTheme();
  return (
    <div className='flex items-center border-gray-200 border-l-2 pl-2 border-slate-200'>
      <button
        onClick={() => setDarkTheme(!darkTheme)}
        className="text-orange-600 transition"
      >
        {darkTheme ? (
          <IoMoonOutline className="text-2xl" />
        ) : (
          <IoSunnyOutline className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
