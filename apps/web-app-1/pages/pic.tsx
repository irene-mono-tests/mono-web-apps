import React from 'react';

import Image from 'next/image';

const Pic = () => {
  return (
    <div>
      <h1>Test page with image</h1>
      <Image src="/avatar.jpg" alt="pic" />
    </div>
  );
};

export default Pic;
