import React from 'react';


export default function Footer() {
  return (
    <footer className="text-white py-8 pb-0 mt-8">
      <div className="bg-white py-4 text-center text-uppercase">
        <h2 className="text-black font-bold">
          EXTENDERS <span className="text-red-600">FOUNDATION</span> | COPYRIGHT {new Date().getFullYear()}
        </h2>
      </div>
    </footer>
  );
}
