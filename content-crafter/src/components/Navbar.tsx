import React, { useState } from 'react';
import circle from '../assets/circle.svg';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';

function Navbar() {
  const [isOpen, setOpen] = useState(false);

//   const toggleMenu = () => {
//     setOpen(!isOpen);
//   };

const toggleMenu = () =>{
    setOpen(!isOpen);
}


  return (
    <div className="relative">
      <img className="absolute -top-20" src={circle} />

      <div className="flex gap-4 justify-between m-12">
        <div className="cursor-pointer font-bold text-lg relative m-4">
          ContentCrafter
        </div>

        <div className="relative flex items-center">
          <div className="md:hidden">
            {isOpen ? (
              <GrFormClose
                className="text-2xl bg-white cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <HiOutlineMenuAlt1
                className="text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>

          <ol
            className={`${
              isOpen ? 'flex flex-col items-center ml-4 gap-4 mt-6' : 'hidden'
            } md:flex md:flex-row md:gap-8 cursor-pointer md:mt-4 `}
          >
            <li>
              <Link className='hover:underline' to="/">home</Link>
            </li>
            <li>
              <Link className='hover:underline'  to="/usecase">usecase</Link>
            </li>
            <li>
              <Link className='hover:underline'  to="/about">about</Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
