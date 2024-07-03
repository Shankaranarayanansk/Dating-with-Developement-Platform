import React from 'react';
import { IoChatbubbleEllipses } from 'react-icons/io5';

function Bot() {
  return (
    <div className='fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-Black text-4xl bg-red-600 w-16 h-16 rounded-full flex items-center justify-center animate-bounce'>
      <IoChatbubbleEllipses  className='text-white'/>
    </div>
  );
}

export default Bot;