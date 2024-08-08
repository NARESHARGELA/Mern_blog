import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

const Header = () => {
  const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Your Info</span> Blogs
      </Link>
      <form className='flex items-center'>
        <div className='relative hidden lg:block'>
          <TextInput 
            type='text'
            placeholder='Search...'
            className='pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600'
          />
          <AiOutlineSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
        </div>
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link 
            to='/' 
            className={path === '/' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}
          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link 
            to='/about' 
            className={path === '/about' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}
          >
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link 
            to='/projects' 
            className={path === '/projects' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}
          >
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <div className='flex gap-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue'>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}

export default Header;
