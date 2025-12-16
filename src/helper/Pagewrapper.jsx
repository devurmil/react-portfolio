import React from 'react'
import '../index.css'

function PageWrapper({ children }) {
  return (
    <div className="pt-10 sm:pt-5 lg:pt-20 pb-25 sm:pb-19 lg:pb-20 h-screen overflow-y-auto scrollbar-hide relative">
      {children}
    </div>
  );
}
export default PageWrapper